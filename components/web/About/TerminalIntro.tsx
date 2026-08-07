"use client";

import { useEffect, useState } from "react";

const LINES = [
  "$ whoami",
  "vaibhav-kumar — Software Engineer",
  "",
  "$ cat current.txt",
  "NextJS Developer @ Aptagrim Limited, Hyderabad",
  "",
  "$ cat focus.txt",
  "React · Next.js · leveling up into Full-Stack",
  "",
  "$ echo $STATUS",
  "Building things, one commit at a time.",
];

const FULL_TEXT = LINES.join("\n");

const TerminalIntro = () => {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(FULL_TEXT);
      setDone(true);
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));

      if (i >= FULL_TEXT.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, 18);

    return () => clearInterval(interval);
  }, []);

  const lines = typed.split("\n");

  return (
    <div className="w-full rounded-lg border border-neutral-800 bg-neutral-950 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-neutral-800 bg-neutral-900/60">
        <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        <span className="ml-3 text-xs text-neutral-500">
          vaibhav@portfolio: ~
        </span>
      </div>

      {/* Body */}
      <div className="px-4 py-4 sm:px-6 sm:py-5 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto">
        {lines.map((line, i) => (
          <div
            key={i}
            className={
              line.startsWith("$") ? "text-emerald-400" : "text-neutral-300"
            }
          >
            {line || " "}
            {i === lines.length - 1 && !done && (
              <span className="inline-block w-2 h-4 -mb-0.5 ml-0.5 bg-neutral-300 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TerminalIntro;
