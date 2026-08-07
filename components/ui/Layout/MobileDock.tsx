"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, Briefcase, NotebookText } from "lucide-react";

const LINKS = [
  { id: 1, name: "Home", url: "/", icon: Home },
  { id: 2, name: "Projects", url: "/projects", icon: FolderKanban },
  { id: 3, name: "Experience", url: "/experience", icon: Briefcase },
  { id: 4, name: "Logs", url: "/logs", icon: NotebookText },
];

interface PillRect {
  left: number;
  top: number;
  width: number;
  height: number;
}

const MobileDock = () => {
  const pathname = usePathname();
  const listRef = useRef<HTMLUListElement>(null);
  const itemRefs = useRef<Record<number, HTMLLIElement | null>>({});
  const [pillRect, setPillRect] = useState<PillRect | null>(null);

  const activeId =
    LINKS.find(({ url }) =>
      url === "/" ? pathname === "/" : pathname.startsWith(url),
    )?.id ?? LINKS[0].id;

  useLayoutEffect(() => {
    const list = listRef.current;
    const activeEl = itemRefs.current[activeId];
    if (!list || !activeEl) return;

    const listRect = list.getBoundingClientRect();
    const elRect = activeEl.getBoundingClientRect();

    setPillRect({
      left: elRect.left - listRect.left,
      top: elRect.top - listRect.top,
      width: elRect.width,
      height: elRect.height,
    });
  }, [activeId]);

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center pb-safe"
    >
      <ul
        ref={listRef}
        className="relative flex items-center gap-0.5 rounded-full px-1.5 py-1.5 bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]"
      >
        {pillRect && (
          <span
            aria-hidden="true"
            className="absolute rounded-full bg-emerald-500/10 pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: pillRect.left,
              top: pillRect.top,
              width: pillRect.width,
              height: pillRect.height,
            }}
          />
        )}

        {LINKS.map(({ id, name, url, icon: Icon }) => {
          const isActive = id === activeId;

          return (
            <li
              key={id}
              ref={(node) => {
                itemRefs.current[id] = node;
              }}
            >
              <Link
                href={url}
                aria-label={`Navigate to ${name} page`}
                aria-current={isActive ? "page" : undefined}
                className={`relative z-10 flex flex-col items-center justify-center gap-0 w-16 h-11 rounded-full transition-colors duration-300 ${
                  isActive
                    ? "text-emerald-500"
                    : "text-neutral-400 active:scale-90"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.4 : 2} />
                <span className="text-[9px] tracking-wide">{name}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MobileDock;
