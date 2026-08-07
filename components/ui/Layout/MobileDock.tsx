"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, Briefcase, NotebookText } from "lucide-react";

const LINKS = [
  { id: 1, name: "Home", url: "/", icon: Home },
  { id: 2, name: "Projects", url: "/projects", icon: FolderKanban },
  { id: 3, name: "Experience", url: "/experience", icon: Briefcase },
  { id: 4, name: "Logs", url: "/logs", icon: NotebookText },
];

const MobileDock = () => {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Mobile navigation"
      className="md:hidden fixed bottom-4 inset-x-0 z-50 flex justify-center pb-safe"
    >
      <ul className="flex items-center gap-0.5 rounded-full px-1.5 py-1.5 bg-white/[0.04] backdrop-blur-xl backdrop-saturate-150 border border-white/10 shadow-[0_8px_24px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.06)]">
        {LINKS.map(({ id, name, url, icon: Icon }) => {
          const isActive = url === "/" ? pathname === "/" : pathname.startsWith(url);

          return (
            <li key={id}>
              <Link
                href={url}
                aria-label={`Navigate to ${name} page`}
                aria-current={isActive ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-0 w-16 h-11 rounded-full transition-all duration-300 ${
                  isActive
                    ? "bg-emerald-500/10 text-emerald-500"
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
