import Image from "next/image";
import React from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Link from "next/link";
// import { ProjectData } from "@/helper/data/ProjectData";

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
    <div
      key={project.id}
      className="bg-[#efefef] border-2 border-black px-5 py-4  shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 group"
    >
      {/* Project Header */}
      <div className="border-b-2 border-black pb-3 mb-3">
        <Image
          src={project.cover}
          alt={project.title}
          width={500}
          height={250}
          className="object-cover w-full h-40 grayscale group-hover:grayscale-0 transition duration-500"
        />
      </div>

      {/* Project Title like a newspaper headline */}
      <Heading cn=" text-xl font-bold header tracking-wide mb-2" tag="h2">
        {project.title}
      </Heading>

      {/* Small description like a teaser snippet */}
      <Paragraph cn="text-sm text-gray-600 leading-relaxed text-balance">
        {project.snippet}
      </Paragraph>

      {/* Read more link styled like old column footers */}
      <div className="mt-3">
        <Link
          href={`/projects/${project.slug}`}
          className="body text-xs uppercase border-t border-black pt-1 inline-block hover:text-red-600 transition"
          aria-label={`Read full story about project ${project.title}`}
        >
          Read Full Story →
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
