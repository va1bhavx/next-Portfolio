import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Link from "next/link";
import { PROJECTS } from "@/helper/data/ProjectData";
import ProjectCard from "../ui/ProjectCard";

const RecentWork = () => {
  return (
    <Container cn="items-start">
      <section className="flex flex-col gap-10 w-full">
        {/* Section Header */}
        <div className="flex items-end justify-between w-full">
          <Heading
            tag="h2"
            cn="text-lg uppercase tracking-widest text-neutral-400"
          >
            Recent Work
          </Heading>

          <Link
            href="/projects"
            aria-label="View all projects by Vaibhav Kumar"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition"
          >
            View all projects →
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {PROJECTS.slice(0, 2).map((project) => (
            <ProjectCard
              key={project.id}
              project={{
                cover: project.cover,
                id: Number(project.id),
                slug: project.slug,
                title: project.title,
                snippet: project.snippet,
              }}
            />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default RecentWork;
