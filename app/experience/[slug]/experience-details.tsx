"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Pills from "@/components/ui/Pills";
import BackButton from "@/components/ui/BackButton";
import { Building2, Calendar } from "lucide-react";

const ListSection = ({ title, items }: { title: string; items: string[] }) => (
  <section className="flex flex-col gap-6">
    <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
      {title}
    </Heading>

    <div className="flex flex-col gap-3  leading-relaxed">
      {items.map((item, i) => (
        <Paragraph key={i} cn="text-neutral-400">
          • {item}
        </Paragraph>
      ))}
    </div>
  </section>
);

const ExperienceDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [experience, setExperience] = useState<(typeof EXPERIENCE)[0] | null>(
    null,
  );

  useEffect(() => {
    if (params.slug) {
      const exp =
        EXPERIENCE.find((e) => e.slug.split("/").pop() === params.slug) || null;

      if (!exp) router.push("/experience");
      else setExperience(exp);
    }
  }, [params.slug, router]);

  if (!experience) return null;

  return (
    <Container cn="items-start pb-24">
      <article className=" w-full flex flex-col gap-14">
        {/* Back */}
        <BackButton
          url="/experience"
          title="Back to Experience"
          label="Back to experience"
        />

        {/* Title + Intro */}
        <header className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <Building2 size={16} />
            Experience Case Study
          </div>

          <Heading tag="h1" cn="text-4xl md:text-5xl text-neutral-100">
            {experience.role}
          </Heading>

          <div className="flex flex-wrap gap-6 text-neutral-400">
            <div className="flex items-center gap-2">
              <Building2 size={16} />
              {experience.company}
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {experience.duration}
            </div>
          </div>

          {experience.description && (
            <Paragraph cn="text-lg text-neutral-400 leading-relaxed">
              {experience.description}
            </Paragraph>
          )}
        </header>

        {/* Tech Stack */}
        {experience.tech?.length > 0 && (
          <section className="flex flex-col gap-4">
            <Heading tag="h2" cn="text-xl text-neutral-200">
              Tech Stack
            </Heading>

            <div className="flex flex-wrap gap-2">
              {experience.tech.map((tech, i) => (
                <Pills status="info" key={i}>
                  {tech}
                </Pills>
              ))}
            </div>
          </section>
        )}

        {/* Responsibilities */}
        {experience.responsibilities?.length > 0 && (
          <ListSection
            title="Key Responsibilities"
            items={experience.responsibilities}
          />
        )}

        {/* Achievements */}
        {experience.achievements?.length > 0 && (
          <ListSection title="Achievements" items={experience.achievements} />
        )}

        {/* Learnings */}
        {experience.learned?.length > 0 && (
          <ListSection title="Skills & Learnings" items={experience.learned} />
        )}

        {/* Projects */}
        {experience.notableProjects?.length > 0 && (
          <section className="flex flex-col gap-6">
            <Heading tag="h2" cn="text-xl text-neutral-200">
              Notable Projects
            </Heading>

            <div className="flex flex-col gap-3 text-neutral-400">
              {experience.notableProjects.map((p, i) => (
                <Paragraph key={i} cn="text-neutral-400">
                  •{" "}
                  {p.link ? (
                    <>
                      <Link
                        href={p.link}
                        target="_blank"
                        className="underline hover:text-white"
                      >
                        {p.name}
                      </Link>
                    </>
                  ) : (
                    p.name
                  )}
                </Paragraph>
              ))}
            </div>
          </section>
        )}
      </article>
    </Container>
  );
};

export default ExperienceDetails;
