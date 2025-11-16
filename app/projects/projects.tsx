import BackButton from "@/components/ui/BackButton";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import ProjectCard from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/helper/data/ProjectData";

const Projects = () => {
  return (
    <Container cn=" items-start">
      <BackButton
        url="/"
        title="Go Back"
        label="Link to go back to home page"
      />
      <div className="flex items-start justify-between w-full self-start mb-8">
        <Heading
          tag="h1"
          cn="text-3xl header bg-[#2f2f2f] px-2 text-white w-max break-words h-[40px] flex items-center"
        >
          Projects
        </Heading>
      </div>
      <div className="grid md:grid-cols-2 gap-6 w-full">
        {PROJECTS.map((project) => (
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

export default Projects;
