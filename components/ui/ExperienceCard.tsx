import React from "react";
import Link from "next/link";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Pills from "./Pills";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import { Calendar, Sparkles, ChevronRight } from "lucide-react";

type Experience = (typeof EXPERIENCE)[0];

interface ExperienceCardProps {
  experience: Experience;
  current?: boolean;
}

const MAX_TECH = 5;

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  current,
}) => {
  const { company, role, duration, description, tech, slug, achievements } =
    experience;

  const highlight = achievements?.[0];
  const visibleTech = tech.slice(0, MAX_TECH);
  const extraTech = tech.length - visibleTech.length;

  return (
    <article
      className="
        group relative flex flex-col gap-4
        bg-neutral-900/70
        border border-neutral-800
        rounded-xl p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-neutral-600
        hover:bg-neutral-900
        hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
        focus-within:border-neutral-600
      "
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="h-10 w-10 shrink-0 rounded-lg bg-neutral-800 border border-neutral-700 flex items-center justify-center text-sm font-bold text-neutral-200">
            {company.charAt(0)}
          </div>

          <div className="min-w-0 flex flex-col">
            <Heading
              tag="h3"
              cn="text-base text-neutral-200 font-medium truncate"
            >
              {company}
            </Heading>
            <span className="flex items-center gap-1.5 text-xs text-neutral-500">
              <Calendar size={12} />
              {duration}
            </span>
          </div>
        </div>

        {current && (
          <span
            className="
              shrink-0 flex items-center gap-1.5
              text-[10px] font-medium uppercase tracking-wide
              bg-emerald-500/10 text-emerald-400
              px-2 py-1 rounded-full border border-emerald-500/20
            "
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Current
          </span>
        )}
      </div>

      {/* Role */}
      <Heading
        tag="h4"
        cn="text-lg font-semibold text-neutral-100 group-hover:text-white transition"
      >
        {role}
      </Heading>

      {/* Description */}
      <Paragraph cn="text-sm text-neutral-400 leading-relaxed line-clamp-2">
        {description}
      </Paragraph>

      {/* Highlight */}
      {highlight && (
        <div className="flex items-start gap-2 text-xs text-neutral-400 italic">
          <Sparkles size={13} className="text-neutral-500 shrink-0 mt-0.5" />
          <span className="line-clamp-1">{highlight}</span>
        </div>
      )}

      {/* Tech */}
      <div className="flex flex-wrap items-center gap-2 pt-1">
        {visibleTech.map((t, i) => (
          <Pills status="info" key={i}>
            {t}
          </Pills>
        ))}
        {extraTech > 0 && (
          <span className="text-xs text-neutral-500">+{extraTech} more</span>
        )}
      </div>

      {/* CTA */}
      <div className="pt-2 mt-auto">
        <Link
          href={`/experience${slug}`}
          className="
            inline-flex items-center gap-1
            text-sm text-neutral-400
            group-hover:text-emerald-500
            transition
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-neutral-600
            rounded
          "
          aria-label={`View case study for ${role} at ${company}`}
        >
          View case study
          <ChevronRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </article>
  );
};

export default ExperienceCard;
