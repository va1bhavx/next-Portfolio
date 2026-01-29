import BackButton from "@/components/ui/BackButton";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/helper/data/ProjectData";

const Projects = () => {
  return (
    <Container cn="items-start">
      <section className="flex flex-col gap-10 w-full">
        <BackButton url="/" title="Back" label="Link to go back to home page" />

        <div className="flex flex-col gap-3 max-w-2xl">
          <Heading tag="h1" cn="text-3xl text-neutral-200">
            Projects
          </Heading>

          <Paragraph cn="text-neutral-400 leading-relaxed">
            A collection of projects I’ve worked on, ranging from production
            applications to experimental builds. Each project reflects my
            approach to building scalable, maintainable, and user-friendly web
            experiences.
          </Paragraph>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {PROJECTS.map((project) => (
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

export default Projects;
