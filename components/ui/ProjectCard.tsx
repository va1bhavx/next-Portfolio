import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Link from "next/link";

interface ProjectData {
  id: number;
  cover: string;
  title: string;
  snippet: string;
  slug: string;
}

interface ProjectCardProps {
  project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <article
      className="
        group flex flex-col gap-4
        bg-neutral-900/70
        border border-neutral-800
        p-5
        transition-all duration-300
        hover:-translate-y-1
        hover:border-neutral-600
        hover:bg-neutral-900
        rounded-lg
      "
    >
      {/* Cover */}
      <div className="overflow-hidden">
        <Image
          src={project.cover}
          alt={project.title}
          width={500}
          height={250}
          className="
            object-cover w-full h-44
            transition-transform duration-500
            group-hover:scale-[1.03] rounded-lg
          "
        />
      </div>

      {/* Title */}
      <Heading
        cn="text-lg text-neutral-100 font-medium group-hover:text-white transition"
        tag="h3"
      >
        {project.title}
      </Heading>

      {/* Description */}
      <Paragraph cn="text-sm text-neutral-300 leading-relaxed">
        {project.snippet}
      </Paragraph>

      {/* Link */}
      <div>
        <Link
          href={`/projects/${project.slug}`}
          className="
            text-sm text-neutral-400
            group-hover:text-neutral-200
            transition
          "
          aria-label={`Read more about project ${project.title}`}
        >
          View project →
        </Link>
      </div>
    </article>
  );
};

export default ProjectCard;
