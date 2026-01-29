import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import Pills from "@/components/ui/Pills";
import BackButton from "@/components/ui/BackButton";

const Experience = () => {
  return (
    <Container cn="items-start">
      <section className="flex flex-col gap-10 w-full">
        <BackButton url="/" title="Back" label="Link to go back to home page" />

        <Heading
          tag="h2"
          cn="text-sm uppercase tracking-widest text-neutral-400"
        >
          Experience
        </Heading>

        <div className="grid md:grid-cols-2 gap-8 w-full">
          {EXPERIENCE.map((exp) => (
            <div
              key={exp.id}
              className="
                border border-neutral-800
                bg-neutral-900/60
                p-6
                flex flex-col gap-4
                transition
                hover:border-neutral-700
                hover:-translate-y-1
                rounded-lg
              "
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-neutral-400" />
                  <Heading tag="h3" cn="text-neutral-200 text-sm font-medium">
                    {exp.company}
                  </Heading>
                </div>

                <div className="flex items-center text-xs text-neutral-400 gap-1">
                  <Calendar size={14} />
                  {exp.duration}
                </div>
              </div>

              <Heading tag="h4" cn="text-lg font-medium text-neutral-100">
                {exp.role}
              </Heading>

              <Paragraph cn="text-sm text-neutral-400 leading-relaxed">
                {exp.description}
              </Paragraph>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <Pills status="info" key={i}>
                    {t}
                  </Pills>
                ))}
              </div>

              <Link
                href={`/experience${exp.slug}`}
                className="
                  text-sm text-neutral-400
                  hover:text-neutral-200
                  transition
                  flex items-center gap-1 w-max
                "
              >
                View case study <ChevronRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Experience;
