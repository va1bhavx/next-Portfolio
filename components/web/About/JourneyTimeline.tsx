"use client";

import { useEffect, useRef, useState } from "react";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import { EDUCATION } from "@/helper/data/AboutData";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { GraduationCap, Briefcase } from "lucide-react";

interface TimelineNode {
  key: string;
  title: string;
  subtitle: string;
  duration: string;
  icon: React.ReactNode;
}

const CAREER_NODES: TimelineNode[] = [...EXPERIENCE]
  .reverse()
  .map((exp) => ({
    key: exp.slug,
    title: exp.role,
    subtitle: exp.company,
    duration: exp.duration,
    icon: <Briefcase size={14} />,
  }));

const NODES: TimelineNode[] = [
  {
    key: "education",
    title: EDUCATION.degree,
    subtitle: EDUCATION.institution,
    duration: EDUCATION.duration,
    icon: <GraduationCap size={14} />,
  },
  ...CAREER_NODES,
];

const JourneyTimeline = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [pending, setPending] = useState<Set<number>>(new Set());

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const belowFold = new Set<number>();
    itemRefs.current.forEach((el, i) => {
      if (el && el.getBoundingClientRect().top >= window.innerHeight) {
        belowFold.add(i);
      }
    });

    if (belowFold.size === 0) return;
    setPending(belowFold);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = itemRefs.current.indexOf(entry.target as HTMLDivElement);
          if (index === -1) return;

          setPending((prev) => {
            if (!prev.has(index)) return prev;
            const next = new Set(prev);
            next.delete(index);
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 },
    );

    itemRefs.current.forEach((el, i) => {
      if (el && belowFold.has(i)) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative flex flex-col gap-8 pl-6">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-800" />

      {NODES.map((node, i) => (
        <div
          key={node.key}
          ref={(el) => {
            itemRefs.current[i] = el;
          }}
          className={`relative flex flex-col gap-1 transition-all duration-500 ${
            pending.has(i)
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <span
            aria-hidden="true"
            className="absolute -left-6 top-0.5 flex items-center justify-center w-4 h-4 rounded-full bg-neutral-900 border border-neutral-700 text-neutral-500"
          >
            <span className="scale-75">{node.icon}</span>
          </span>

          <span className="text-xs text-neutral-500">{node.duration}</span>
          <Heading tag="h3" cn="text-base text-neutral-100 font-medium">
            {node.title}
          </Heading>
          <Paragraph cn="text-sm text-neutral-400">{node.subtitle}</Paragraph>
        </div>
      ))}
    </div>
  );
};

export default JourneyTimeline;
