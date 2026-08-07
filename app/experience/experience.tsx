import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import ExperienceCard from "@/components/ui/ExperienceCard";
import { EXPERIENCE } from "@/helper/data/ExperienceData";

const Experience = () => {
  return (
    <Container cn="items-start">
      <section className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-3 ">
          <Heading
            tag="h2"
            cn="text-xl uppercase tracking-widest text-neutral-300"
          >
            Experience
          </Heading>
          <Paragraph cn="text-neutral-400 leading-relaxed">
            A collection of projects I’ve worked on, ranging from production
            applications to experimental builds. Each project reflects my
            approach to building scalable, maintainable, and user-friendly web
            experiences.
          </Paragraph>
        </div>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {EXPERIENCE.map((exp, i) => (
            <ExperienceCard key={exp.id} experience={exp} current={i === 0} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Experience;
