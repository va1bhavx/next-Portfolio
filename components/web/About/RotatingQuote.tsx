"use client";

import { useEffect, useState } from "react";
import { MOTTOS } from "@/helper/data/AboutData";

const RotatingQuote = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % MOTTOS.length);
        setFade(true);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <p
      className={`text-sm italic text-neutral-400 leading-relaxed transition-opacity duration-300 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      “{MOTTOS[index]}”
    </p>
  );
};

export default RotatingQuote;
