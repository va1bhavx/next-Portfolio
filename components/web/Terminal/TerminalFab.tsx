"use client";

import { TerminalSquare } from "lucide-react";

interface TerminalFabProps {
  onClick: () => void;
}

const TerminalFab: React.FC<TerminalFabProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Open command terminal"
    className="
      fixed bottom-24 right-4 md:bottom-6 md:right-6 z-[60]
      flex items-center justify-center
      w-12 h-12 rounded-full
      bg-neutral-900 border border-neutral-700
      text-neutral-300 hover:text-emerald-500 hover:border-neutral-600
      shadow-[0_8px_24px_rgba(0,0,0,0.35)]
      transition-all hover:scale-105 active:scale-95
    "
  >
    <TerminalSquare size={20} />
  </button>
);

export default TerminalFab;
