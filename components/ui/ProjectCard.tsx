import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Link from "next/link";
import { ProjectData } from "@/helper/data/ProjectData";

interface ProjectCardProps {
  project: ProjectData;
}

const statusColorMap: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  wip: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  archived: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const {
    cover,
    title,
    slug,
    snippet,
    tagline,
    highlight,
    type,
    primaryTech,
    quickStats,
    statusVariant,
    lastUpdated,
  } = project;

  return (
    <article
      className="
        group relative flex flex-col gap-4
        bg-neutral-900/70
        border border-neutral-800
        p-5 rounded-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:border-neutral-600
        hover:bg-neutral-900
        hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
        focus-within:border-neutral-600
      "
    >
      {/* Cover */}
      <div className="relative overflow-hidden rounded-lg">
        <Image
          src={cover}
          alt={title}
          width={500}
          height={250}
          className="
            object-cover w-full h-44
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
        />

        {/* Type badge */}
        {type && (
          <span
            className="
              absolute top-3 left-3
              text-xs font-medium
              bg-neutral-900/80 backdrop-blur
              text-neutral-200
              px-2 py-1 rounded
              border border-neutral-700
            "
          >
            {type}
          </span>
        )}
      </div>

      {/* Header */}
      <div className="flex items-start justify-between gap-2">
        <Heading
          cn="text-lg text-neutral-100 font-medium group-hover:text-white transition"
          tag="h3"
        >
          {title}
        </Heading>

        {statusVariant && (
          <span
            className={`
              text-xs px-2 py-0.5 rounded border
              ${statusColorMap[statusVariant] ?? statusColorMap.archived}
            `}
          >
            {statusVariant}
          </span>
        )}
      </div>

      {/* Primary description */}
      <Paragraph cn="text-sm text-neutral-300 leading-relaxed">
        {tagline ?? snippet}
      </Paragraph>

      {/* Secondary info (progressive reveal) */}
      <div
        className="
          flex flex-col gap-2
          transition-all duration-300
        "
      >
        {highlight && (
          <p className="text-xs text-neutral-400 italic">{highlight}</p>
        )}

        {(primaryTech || lastUpdated) && (
          <div className="flex items-center gap-3 text-xs text-neutral-400">
            {primaryTech && (
              <span className="font-medium text-neutral-300">
                {primaryTech}
              </span>
            )}
            {lastUpdated && <span>Updated {lastUpdated}</span>}
          </div>
        )}

        {quickStats && quickStats.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {quickStats.slice(0, 3).map((stat) => (
              <span
                key={stat}
                className="
                  text-xs
                  bg-neutral-800
                  text-neutral-300
                  px-2 py-1
                  rounded-md
                  border border-neutral-700
                "
              >
                {stat}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <div className="pt-2 mt-auto">
        <Link
          href={`/projects/${slug}`}
          className="
            inline-flex items-center gap-1
            text-sm text-neutral-400
            group-hover:text-emerald-500
            transition
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-neutral-600
            rounded
          "
          aria-label={`Read more about project ${title}`}
        >
          View project
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
