"use client";

import React, { useEffect, useState } from "react";
import Paragraph from "./Paragraph";

const randomTexts = [
  "Crafting beautiful user experiences…",
  "Optimizing code, one component at a time…",
  "Designing interfaces that delight users…",
  "Turning chai into React code…",
  "Solving problems with clean, efficient solutions…",
  "Exploring the art of frontend development…",
  "Making the web a more interactive place…",
];

interface LoadingScreenProps {
  imageSrc?: string;
  alt?: string;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({
  imageSrc,
  alt = "Loading",
}) => {
  const [text, setText] = useState(randomTexts[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);

      setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * randomTexts.length);
        setText(randomTexts[randomIndex]);
        setFade(true);
      }, 300);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-neutral-950 z-50 px-6">
      <div className="relative mb-8">
        <div className="w-12 h-12 border-2 border-neutral-700 rounded-full"></div>
        <div className="absolute inset-0 w-12 h-12 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>

      <Paragraph
        cn={`text-center text-neutral-400 text-sm sm:text-base max-w-sm leading-relaxed transition-opacity duration-300 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
      >
        {text}
      </Paragraph>

      <span className="text-neutral-600 text-xs mt-6 tracking-wide">
        Loading experience…
      </span>
    </div>
  );
};

export default LoadingScreen;
