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
import {
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  TriangleAlert,
  Sparkles,
} from "lucide-react";

type Experience = (typeof EXPERIENCE)[0];

const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "responsibilities", label: "Key Responsibilities" },
  { id: "achievements", label: "Achievements" },
  { id: "challenges", label: "Challenges Faced" },
  { id: "learnings", label: "Skills & Learnings" },
  { id: "projects", label: "Notable Projects" },
];

const ListSection = ({
  id,
  title,
  items,
  icon,
}: {
  id: string;
  title: string;
  items: string[];
  icon?: React.ReactNode;
}) => (
  <section id={id} className="flex flex-col gap-6 scroll-mt-24">
    <Heading
      tag="h2"
      cn="text-xl text-neutral-100 font-bold flex items-center gap-2"
    >
      {icon}
      {title}
    </Heading>

    <div className="flex flex-col gap-3 leading-relaxed">
      {items.map((item, i) => (
        <Paragraph key={i} cn="text-neutral-400">
          • {item}
        </Paragraph>
      ))}
    </div>
  </section>
);

const Sidebar = ({
  experience,
  sections,
}: {
  experience: Experience;
  sections: { id: string; label: string }[];
}) => (
  <aside className="w-full lg:w-[200px] lg:shrink-0 flex flex-col gap-6 lg:sticky lg:top-10 lg:self-start">
    <div className="flex flex-col gap-3">
      <span className="text-[11px] uppercase tracking-wide text-neutral-500">
        On this page
      </span>
      <ul className="flex flex-col gap-2.5">
        {sections.map((s) => (
          <li key={s.id}>
            <a
              href={`#${s.id}`}
              className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
            >
              {s.label}
            </a>
          </li>
        ))}
      </ul>
    </div>

    {experience.notableProjects?.[0]?.link && (
      <>
        <div className="border-t border-neutral-800" />
        <Link
          href={experience.notableProjects[0].link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-flex items-center justify-center gap-2
            px-4 py-2.5 rounded-lg text-sm font-medium
            bg-neutral-800 border border-neutral-700
            text-neutral-200 hover:text-white hover:border-neutral-600
            transition-all
          "
        >
          View Live Project
          <ExternalLink size={14} />
        </Link>
      </>
    )}
  </aside>
);

const ExperienceDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [experience, setExperience] = useState<Experience | null>(null);

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
      <article className="w-full flex flex-col gap-14">
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
        </header>

        {/* Sidebar + content */}
        <div className="flex flex-col lg:flex-row gap-10 w-full items-start">
          <Sidebar experience={experience} sections={SECTIONS} />

          <div className="flex-1 min-w-0 flex flex-col gap-14">
            {/* Overview */}
            {experience.description && (
              <section id="overview" className="flex flex-col gap-4 scroll-mt-24">
                <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                  Overview
                </Heading>
                <Paragraph cn="text-lg text-neutral-400 leading-relaxed">
                  {experience.description}
                </Paragraph>
              </section>
            )}

            {/* Tech Stack */}
            {experience.tech?.length > 0 && (
              <section
                id="tech-stack"
                className="flex flex-col gap-4 scroll-mt-24"
              >
                <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
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
                id="responsibilities"
                title="Key Responsibilities"
                items={experience.responsibilities}
              />
            )}

            {/* Achievements — highlight cards */}
            {experience.achievements?.length > 0 && (
              <section
                id="achievements"
                className="flex flex-col gap-6 scroll-mt-24"
              >
                <Heading
                  tag="h2"
                  cn="text-xl text-neutral-100 font-bold flex items-center gap-2"
                >
                  <Sparkles size={18} className="text-neutral-500" />
                  Achievements
                </Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experience.achievements.map((a, i) => (
                    <div
                      key={i}
                      className="
                        flex items-start gap-3 p-4 rounded-lg
                        bg-neutral-900/50 border border-neutral-800
                      "
                    >
                      <CheckCircle2
                        size={16}
                        className="text-neutral-500 shrink-0 mt-0.5"
                      />
                      <Paragraph cn="text-neutral-300 text-sm leading-relaxed">
                        {a}
                      </Paragraph>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Challenges */}
            {experience.challenges?.length > 0 && (
              <ListSection
                id="challenges"
                title="Challenges Faced"
                items={experience.challenges}
                icon={<TriangleAlert size={18} className="text-neutral-500" />}
              />
            )}

            {/* Learnings */}
            {experience.learned?.length > 0 && (
              <ListSection
                id="learnings"
                title="Skills & Learnings"
                items={experience.learned}
              />
            )}

            {/* Projects */}
            {experience.notableProjects?.length > 0 && (
              <section id="projects" className="flex flex-col gap-6 scroll-mt-24">
                <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                  Notable Projects
                </Heading>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {experience.notableProjects.map((p, i) =>
                    p.link ? (
                      <Link
                        key={i}
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          flex items-center justify-between gap-2 p-4 rounded-lg
                          bg-neutral-900/50 border border-neutral-800
                          text-neutral-300 hover:text-white hover:border-neutral-700
                          transition-all
                        "
                      >
                        {p.name}
                        <ExternalLink size={14} className="shrink-0" />
                      </Link>
                    ) : (
                      <div
                        key={i}
                        className="p-4 rounded-lg bg-neutral-900/50 border border-neutral-800 text-neutral-300"
                      >
                        {p.name}
                      </div>
                    ),
                  )}
                </div>
              </section>
            )}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default ExperienceDetails;
