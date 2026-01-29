"use client";

import React, { ReactNode } from "react";

interface TooltipProps {
  label: string;
  children: ReactNode;
  cn?: string;
}

export default function Tooltip({ label, children }: TooltipProps) {
  return (
    <div className="relative group flex items-center">
      {children}

      {/* Tooltip */}
      <div
        className="
          absolute bottom-full mb-2 left-1/2 -translate-x-1/2
          whitespace-nowrap
          bg-neutral-800 text-neutral-200
          text-xs px-2 py-1
          opacity-0 pointer-events-none
          group-hover:opacity-100
          transition-opacity duration-200
        "
      >
        {label}
      </div>
    </div>
  );
}
