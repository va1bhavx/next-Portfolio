"use client";

import BackButton from "@/components/ui/BackButton";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Pills from "@/components/ui/Pills";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { ProjectData, PROJECTS } from "@/helper/data/ProjectData";
import {
  CheckCircle2,
  Github,
  Layers,
  Link2,
  Sparkles,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const statusColorMap: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  wip: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  archived: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
};

const getStatusColor = (status?: string) => {
  if (!status) return statusColorMap.archived;
  const key = status.toLowerCase();
  if (key.includes("progress") || key.includes("wip")) return statusColorMap.wip;
  if (key.includes("complet")) return statusColorMap.completed;
  return statusColorMap.archived;
};

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

const CardGrid = ({
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

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-start gap-3 p-4 rounded-lg bg-neutral-900/50 border border-neutral-800"
        >
          <CheckCircle2 size={16} className="text-neutral-500 shrink-0 mt-0.5" />
          <Paragraph cn="text-neutral-300 text-sm leading-relaxed">
            {item}
          </Paragraph>
        </div>
      ))}
    </div>
  </section>
);

const Sidebar = ({
  project,
  sections,
}: {
  project: ProjectData;
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

    {project.quickStats && project.quickStats.length > 0 && (
      <>
        <div className="border-t border-neutral-800" />
        <div className="flex flex-col gap-3">
          <span className="text-[11px] uppercase tracking-wide text-neutral-500">
            Highlights
          </span>
          <ul className="flex flex-col gap-2">
            {project.quickStats.map((stat, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-neutral-300"
              >
                <CheckCircle2
                  size={14}
                  className="text-neutral-500 shrink-0 mt-0.5"
                />
                {stat}
              </li>
            ))}
          </ul>
        </div>
      </>
    )}

    {(project.liveDemo || project.github) && (
      <>
        <div className="border-t border-neutral-800" />
        <div className="flex flex-col gap-2">
          {project.liveDemo && (
            <Link
              href={project.liveDemo}
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
              Live Demo
              <Link2 size={14} />
            </Link>
          )}

          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center justify-center gap-2
                px-4 py-2.5 rounded-lg text-sm font-medium
                bg-transparent border border-neutral-700
                text-neutral-300 hover:text-white hover:border-neutral-600
                transition-all
              "
            >
              Source Code
              <Github size={14} />
            </Link>
          )}
        </div>
      </>
    )}
  </aside>
);

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<ProjectData | undefined>();

  useEffect(() => {
    if (params.slug) {
      const found =
        PROJECTS.find((p) => p.slug.split("/").pop() === params.slug) || null;

      if (!found) router.push("/projects");
      else setProject(found);
    }
  }, [params.slug, router]);

  if (!project) return null;

  const sections = [
    { id: "overview", label: "Overview" },
    { id: "tech-stack", label: "Tech Stack" },
    ...(project.features?.length ? [{ id: "features", label: "Key Features" }] : []),
    ...(project.challenges?.length ? [{ id: "challenges", label: "Challenges" }] : []),
    ...(project.outcomes?.length ? [{ id: "outcomes", label: "Outcomes" }] : []),
    ...(project.images?.length ? [{ id: "screenshots", label: "Screenshots" }] : []),
  ];

  const status = project.statusVariant || project.status;

  return (
    <Container cn="items-start pb-24">
      <article className="w-full flex flex-col gap-14">
        <BackButton
          url="/projects"
          title="Back to Projects"
          label="Back to projects"
        />

        {/* Hero */}
        {project.cover && (
          <div className="w-full overflow-hidden rounded-xl border border-neutral-800">
            <Image
              src={project.cover}
              alt={project.title}
              width={1400}
              height={600}
              className="w-full h-[280px] md:h-[360px] object-cover"
              priority
            />
          </div>
        )}

        {/* Header */}
        <header className="flex flex-col gap-5">
          <div className="flex items-center gap-2 text-neutral-400 text-sm">
            <Layers size={16} />
            Project Case Study
          </div>

          <Heading tag="h1" cn="text-4xl md:text-5xl text-neutral-100">
            {project.title}
          </Heading>

          {project.tagline && (
            <Paragraph cn="text-lg text-neutral-300 leading-relaxed max-w-2xl">
              {project.tagline}
            </Paragraph>
          )}

          {/* Context row */}
          <div className="flex flex-wrap gap-2 text-sm">
            {project.type && (
              <span className="px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs">
                {project.type}
              </span>
            )}
            {project.role && (
              <span className="px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs">
                {project.role}
              </span>
            )}
            {project.lastUpdated && (
              <span className="px-2.5 py-1 rounded-md bg-neutral-800 border border-neutral-700 text-neutral-300 text-xs">
                Updated {project.lastUpdated}
              </span>
            )}
            {status && (
              <span
                className={`px-2.5 py-1 rounded-md border text-xs ${getStatusColor(status)}`}
              >
                {status}
              </span>
            )}
          </div>
        </header>

        {/* Sidebar + content */}
        <div className="flex flex-col lg:flex-row gap-10 w-full items-start">
          <Sidebar project={project} sections={sections} />

          <div className="flex-1 min-w-0 flex flex-col gap-14">
            {/* Overview */}
            {(project.description || project.snippet) && (
              <section id="overview" className="flex flex-col gap-4 scroll-mt-24">
                <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                  Overview
                </Heading>
                <Paragraph cn="text-lg text-neutral-400 leading-relaxed">
                  {project.description || project.snippet}
                </Paragraph>

                {project.highlight && (
                  <blockquote className="border-l-2 border-neutral-700 pl-4 py-1 italic text-neutral-300">
                    {project.highlight}
                  </blockquote>
                )}
              </section>
            )}

            {/* Tech Stack */}
            {(project.techStack?.length || project.primaryTech) && (
              <section id="tech-stack" className="flex flex-col gap-4 scroll-mt-24">
                <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                  Tech Stack
                </Heading>

                <div className="flex flex-wrap gap-2">
                  {(project.techStack?.length
                    ? project.techStack
                    : [project.primaryTech!]
                  ).map((tech, i) => (
                    <Pills status="info" key={i}>
                      {tech}
                    </Pills>
                  ))}
                </div>
              </section>
            )}

            {/* Features */}
            {project.features && project.features.length > 0 && (
              <CardGrid
                id="features"
                title="Key Features"
                items={project.features}
                icon={<Sparkles size={18} className="text-neutral-500" />}
              />
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <ListSection
                id="challenges"
                title="Challenges"
                items={project.challenges}
                icon={<TriangleAlert size={18} className="text-neutral-500" />}
              />
            )}

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <CardGrid
                id="outcomes"
                title="Outcomes"
                items={project.outcomes}
                icon={<TrendingUp size={18} className="text-neutral-500" />}
              />
            )}

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
              <section id="screenshots" className="flex flex-col gap-4 scroll-mt-24">
                <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                  Screenshots
                </Heading>
                <ImageCarousel images={project.images} />
              </section>
            )}
          </div>
        </div>
      </article>
    </Container>
  );
};

export default ProjectDetails;
