"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";
import TerminalFab from "./TerminalFab";
import { runCommand } from "./commands";

interface Line {
  type: "input" | "output";
  text: string;
}

const WELCOME: Line[] = [
  { type: "output", text: "Welcome. Type 'help' to see all commands." },
];

const isEditableTarget = (el: Element | null) => {
  if (!el) return false;
  const tag = el.tagName;
  return (
    tag === "INPUT" || tag === "TEXTAREA" || (el as HTMLElement).isContentEditable
  );
};

const isNavCommand = (cmdText: string) => {
  const t = cmdText.trim().toLowerCase();
  return t === "resume" || t.startsWith("open ");
};

const CommandTerminal = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<Line[]>(WELCOME);
  const [value, setValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cmdHistoryRef = useRef<string[]>([]);
  const historyIndexRef = useRef(-1);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  // Backtick toggles open — global, since the input doesn't exist while closed.
  // Runs only while focus isn't on some other editable element on the page.
  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`" && !isEditableTarget(document.activeElement)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  // Escape / history recall / Tab handled locally on the input, with
  // stopPropagation so keystrokes (space included) never bubble up to any
  // other global keydown listener on the page (e.g. ImageCarousel's).
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.stopPropagation();

    if (e.key === "Tab") {
      e.preventDefault();
      return;
    }

    if (e.key === "Escape") {
      close();
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const cmds = cmdHistoryRef.current;
      if (!cmds.length) return;
      const next =
        historyIndexRef.current < 0
          ? cmds.length - 1
          : Math.max(0, historyIndexRef.current - 1);
      historyIndexRef.current = next;
      setValue(cmds[next]);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const cmds = cmdHistoryRef.current;
      if (historyIndexRef.current < 0) return;
      const next = historyIndexRef.current + 1;
      if (next >= cmds.length) {
        historyIndexRef.current = -1;
        setValue("");
      } else {
        historyIndexRef.current = next;
        setValue(cmds[next]);
      }
    }
  };

  // Lock page scroll while open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Focus input on open
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Keep scrollback pinned to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;

    cmdHistoryRef.current = [...cmdHistoryRef.current, trimmed];
    historyIndexRef.current = -1;

    if (trimmed.toLowerCase() === "clear") {
      setHistory([]);
    } else {
      const output = runCommand(trimmed, router);
      setHistory((prev) => [
        ...prev,
        { type: "input", text: trimmed },
        ...output.map((line) => ({ type: "output" as const, text: line })),
      ]);
    }

    if (isNavCommand(trimmed)) close();

    setValue("");
  };

  return (
    <>
      <TerminalFab onClick={open} />

      {isOpen && (
        <div
          role="presentation"
          onClick={close}
          className="fixed inset-0 z-[70] flex items-start sm:items-center justify-center bg-black/70 backdrop-blur-sm px-4 pt-20 sm:pt-4 pb-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Command terminal"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden shadow-2xl"
          >
            {/* Title bar */}
            <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/60">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-xs text-neutral-500">
                  vaibhav@portfolio: ~
                </span>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close terminal"
                className="text-neutral-500 hover:text-neutral-200 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {/* Scrollback */}
            <div
              ref={scrollRef}
              className="no-scrollbar px-4 sm:px-5 py-4 font-mono text-xs sm:text-sm leading-relaxed max-h-[50vh] overflow-y-auto"
            >
              {history.map((line, i) => (
                <div
                  key={i}
                  className={
                    line.type === "input"
                      ? "text-emerald-400"
                      : "text-neutral-300 whitespace-pre-wrap"
                  }
                >
                  {line.type === "input" ? `$ ${line.text}` : line.text || " "}
                </div>
              ))}
            </div>

            {/* Input line */}
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-4 sm:px-5 py-3 border-t border-neutral-800"
            >
              <span className="text-emerald-400 font-mono text-sm">$</span>
              <input
                ref={inputRef}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
                className="flex-1 bg-transparent outline-none font-mono text-xs sm:text-sm text-neutral-100 placeholder:text-neutral-600"
                placeholder="type a command…"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck={false}
              />
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CommandTerminal;
