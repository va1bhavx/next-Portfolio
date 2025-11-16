import React from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Image from "next/image";
import Paragraph from "../ui/Paragraph";
import Link from "next/link";
import { PROJECTS } from "@/helper/data/ProjectData";
import { ChevronLeft } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

const RecentWork = () => {
  return (
    <Container cn="items-start">
      <div className="flex items-start justify-between w-full self-start mb-8">
        <Heading
          tag="h1"
          cn="text-2xl sm:text-3xl header bg-[#2f2f2f] px-2 text-white w-max break-words h-[40px] flex items-center"
        >
          Recent Work
        </Heading>

        <Link
          href={"/projects"}
          aria-label="View Vaibhav Kumar's all projects page"
        >
          <Paragraph cn="text-sm font-serif text-gray-800 leading-relaxed self-end">
            View More →
          </Paragraph>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {PROJECTS.slice(0, 2).map((project) => (
          <ProjectCard
            project={{
              cover: project.cover,
              id: Number(project.id),
              slug: project.slug,
              title: project.title,
              snippet: project.snippet,
            }}
            key={project.id}
          />
        ))}
      </div>
    </Container>
  );
};

export default RecentWork;
