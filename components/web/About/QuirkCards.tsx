"use client";

import { useState } from "react";
import { QUIRKS } from "@/helper/data/AboutData";

const QuirkCards = () => {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="grid grid-cols-2 gap-4" style={{ perspective: "1000px" }}>
      {QUIRKS.map((quirk, i) => {
        const isFlipped = flipped.has(i);

        return (
          <button
            key={quirk.label}
            type="button"
            onClick={() => toggle(i)}
            aria-label={`${quirk.label}. Tap to ${isFlipped ? "hide" : "reveal"} detail.`}
            aria-pressed={isFlipped}
            className="relative h-32 sm:h-36 text-left cursor-pointer"
            style={{ perspective: "1000px" }}
          >
            <div
              className="relative w-full h-full transition-transform duration-500"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 p-4"
                style={{ backfaceVisibility: "hidden" }}
              >
                <span className="text-2xl">{quirk.emoji}</span>
                <span className="text-sm text-neutral-200 font-medium text-center">
                  {quirk.label}
                </span>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 flex items-center justify-center rounded-lg border border-emerald-500/20 bg-emerald-500/5 p-4"
                style={{
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <span className="text-xs text-neutral-300 leading-relaxed text-center">
                  {quirk.detail}
                </span>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default QuirkCards;
