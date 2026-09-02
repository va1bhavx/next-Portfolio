"use client";

import BackButton from "@/components/ui/BackButton";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Pills from "@/components/ui/Pills";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { ProjectData, PROJECTS } from "@/helper/data/ProjectData";
import {
  Award,
  BarChart3,
  Bell,
  Bookmark,
  Calendar,
  CheckCircle2,
  Code2,
  Database,
  Flame,
  Github,
  Layers,
  Layout,
  Link2,
  ListTodo,
  Lock,
  Palette,
  Plug,
  RefreshCw,
  Search,
  ShieldCheck,
  Sparkles,
  Timer,
  TrendingUp,
  TriangleAlert,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";

const statusColorMap: Record<string, string> = {
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  wip: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  archived: "bg-neutral-500/10 text-neutral-400 border-neutral-500/20",
};

const getStatusColor = (status?: string) => {
  if (!status) return statusColorMap.archived;
  const key = status.toLowerCase();
  if (key.includes("progress") || key.includes("wip"))
    return statusColorMap.wip;
  if (key.includes("complet")) return statusColorMap.completed;
  return statusColorMap.archived;
};

const getFeatureIcon = (text: string) => {
  const lower = text.toLowerCase();
  if (
    lower.includes("timer") ||
    lower.includes("clock") ||
    lower.includes("focus time") ||
    lower.includes("focus session") ||
    lower.includes("controls")
  ) {
    return <Timer size={16} />;
  }
  if (lower.includes("streak") || lower.includes("habit")) {
    return <Flame size={16} />;
  }
  if (lower.includes("achievement") || lower.includes("unlock")) {
    return <Award size={16} />;
  }
  if (
    lower.includes("stat") ||
    lower.includes("trend") ||
    lower.includes("visualiz") ||
    lower.includes("chart")
  ) {
    return <BarChart3 size={16} />;
  }
  if (
    lower.includes("search") ||
    lower.includes("filter") ||
    lower.includes("history")
  ) {
    return <Search size={16} />;
  }
  if (lower.includes("link") || lower.includes("quick link")) {
    return <Bookmark size={16} />;
  }
  if (
    lower.includes("task") ||
    lower.includes("todo") ||
    lower.includes("drawer")
  ) {
    return <ListTodo size={16} />;
  }
  if (lower.includes("schedule") || lower.includes("calendar")) {
    return <Calendar size={16} />;
  }
  if (
    lower.includes("notification") ||
    lower.includes("sound") ||
    lower.includes("bell")
  ) {
    return <Bell size={16} />;
  }
  if (
    lower.includes("wallpaper") ||
    lower.includes("background") ||
    lower.includes("customiz") ||
    lower.includes("theme") ||
    lower.includes("color")
  ) {
    return <Palette size={16} />;
  }
  if (
    lower.includes("recover") ||
    lower.includes("restart") ||
    lower.includes("reload") ||
    lower.includes("sync")
  ) {
    return <RefreshCw size={16} />;
  }
  if (
    lower.includes("local") ||
    lower.includes("storage") ||
    lower.includes("privacy") ||
    lower.includes("keychain") ||
    lower.includes("encrypt") ||
    lower.includes("credential")
  ) {
    return <ShieldCheck size={16} />;
  }
  if (
    lower.includes("database") ||
    lower.includes("sqlite") ||
    lower.includes("connection")
  ) {
    return <Database size={16} />;
  }
  if (
    lower.includes("ast") ||
    lower.includes("babel") ||
    lower.includes("static analysis") ||
    lower.includes("typescript") ||
    lower.includes("dependency") ||
    lower.includes("import") ||
    lower.includes("esm")
  ) {
    return <Code2 size={16} />;
  }
  if (
    lower.includes("auth") ||
    lower.includes("login") ||
    lower.includes("signup")
  ) {
    return <Lock size={16} />;
  }
  if (
    lower.includes("api") ||
    lower.includes("tmdb") ||
    lower.includes("reddit") ||
    lower.includes("endpoint") ||
    lower.includes("request")
  ) {
    return <Plug size={16} />;
  }
  if (
    lower.includes("workspace") ||
    lower.includes("new tab") ||
    lower.includes("interface") ||
    lower.includes("ui") ||
    lower.includes("desktop") ||
    lower.includes("layout") ||
    lower.includes("view")
  ) {
    return <Layout size={16} />;
  }
  return <Sparkles size={16} />;
};

const parseItem = (item: string) => {
  if (item.includes(" — ")) {
    const [title, ...rest] = item.split(" — ");
    return { title: title.trim(), desc: rest.join(" — ").trim() };
  }
  if (item.includes(": ")) {
    const [title, ...rest] = item.split(": ");
    return { title: title.trim(), desc: rest.join(": ").trim() };
  }
  return { title: null, desc: item };
};

const KeyFeaturesSection = ({
  features,
  featureCategories,
}: {
  features: string[];
  featureCategories?: { category: string; items: string[] }[];
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories =
    featureCategories && featureCategories.length > 1
      ? featureCategories
      : null;

  const displayedFeatures = useMemo(() => {
    if (!categories || selectedCategory === "All") {
      return features;
    }
    const cat = categories.find((c) => c.category === selectedCategory);
    return cat ? cat.items : features;
  }, [categories, selectedCategory, features]);

  return (
    <section id="features" className="flex flex-col gap-6 scroll-mt-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Heading
          tag="h2"
          cn="text-xl text-neutral-100 font-bold flex items-center gap-2"
        >
          <Sparkles size={18} className="text-emerald-400" />
          Key Features
        </Heading>

        <span className="text-xs text-neutral-500 font-mono">
          {features.length} capabilities
        </span>
      </div>

      {/* Category Segmented Navigation (if categories available) */}
      {categories && (
        <div className="flex flex-wrap gap-1.5  w-fit">
          <button
            type="button"
            onClick={() => setSelectedCategory("All")}
            className={`
              text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium
              ${
                selectedCategory === "All"
                  ? "bg-neutral-800 text-neutral-100 border-neutral-700 shadow-sm"
                  : "bg-transparent text-neutral-400 border-transparent hover:text-neutral-200 hover:bg-neutral-800/40"
              }
            `}
          >
            All ({features.length})
          </button>
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat.category;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedCategory(cat.category)}
                className={`
                  text-xs px-3 py-1.5 rounded-lg border transition-all cursor-pointer font-medium
                  ${
                    isSelected
                      ? "bg-neutral-800 text-neutral-100 border-neutral-700 shadow-sm"
                      : "bg-transparent text-neutral-400 border-transparent hover:text-neutral-200 hover:bg-neutral-800/40"
                  }
                `}
              >
                {cat.category} ({cat.items.length})
              </button>
            );
          })}
        </div>
      )}

      {/* Features Grid with dual-tier typography */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {displayedFeatures.map((item, i) => {
          const { title, desc } = parseItem(item);

          return (
            <div
              key={item}
              className="
                group relative flex items-start gap-3.5 p-4 rounded-xl
                bg-neutral-900/30 border border-neutral-800/60
                hover:border-neutral-700/80 hover:bg-neutral-900/60
                transition-all duration-200
              "
            >
              {/* Feature Icon */}
              <div
                className="
                  flex items-center justify-center w-8 h-8 rounded-lg shrink-0 mt-0.5
                  bg-neutral-800/60 border border-neutral-700/50 text-neutral-400
                  group-hover:text-emerald-400 group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10
                  transition-colors duration-200
                "
              >
                {getFeatureIcon(title || desc)}
              </div>

              {/* Feature Text */}
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                {title ? (
                  <>
                    <h3 className="text-sm font-medium text-neutral-100 group-hover:text-white transition-colors">
                      {title}
                    </h3>
                    <Paragraph cn="text-xs text-neutral-400 leading-relaxed">
                      {desc}
                    </Paragraph>
                  </>
                ) : (
                  <Paragraph cn="text-sm text-neutral-300 group-hover:text-neutral-100 leading-relaxed font-normal">
                    {desc}
                  </Paragraph>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

const ChallengesSection = ({ items }: { items: string[] }) => (
  <section id="challenges" className="flex flex-col gap-6 scroll-mt-24">
    {/* Header */}
    <div className="flex items-center justify-between gap-3">
      <Heading
        tag="h2"
        cn="text-xl text-neutral-100 font-bold flex items-center gap-2"
      >
        <TriangleAlert size={18} className="text-amber-400/90" />
        Engineering Challenges
      </Heading>

      <span className="text-xs text-neutral-500 font-mono">
        {items.length} hurdles solved
      </span>
    </div>

    {/* Stepped Engineering Timeline */}
    <div className="relative pl-8 sm:pl-10 space-y-5 before:absolute before:left-3.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-px before:bg-gradient-to-b before:from-amber-500/40 before:via-neutral-800 before:to-transparent">
      {items.map((item, i) => {
        const num = i + 1 < 10 ? `0${i + 1}` : `${i + 1}`;
        const { title, desc } = parseItem(item);

        return (
          <div key={i} className="relative group">
            {/* Step Node */}
            <div
              className="
                absolute -left-8 sm:-left-10 top-0.5 w-7 h-7 rounded-full
                bg-neutral-950 border border-neutral-800
                group-hover:border-amber-500/60 group-hover:bg-amber-500/10
                flex items-center justify-center text-[11px] font-mono
                text-neutral-400 group-hover:text-amber-400 font-medium
                transition-all duration-200
              "
            >
              {num}
            </div>

            {/* Content */}
            <div className="flex flex-col gap-0.5">
              {title ? (
                <>
                  <h3 className="text-sm font-medium text-neutral-200 group-hover:text-white transition-colors">
                    {title}
                  </h3>
                  <Paragraph cn="text-xs sm:text-[13px] text-neutral-400 leading-relaxed">
                    {desc}
                  </Paragraph>
                </>
              ) : (
                <Paragraph cn="text-sm text-neutral-300 group-hover:text-neutral-100 leading-relaxed">
                  {desc}
                </Paragraph>
              )}
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

const OutcomesSection = ({ outcomes }: { outcomes: string[] }) => {
  if (!outcomes || outcomes.length === 0) return null;

  return (
    <section id="outcomes" className="flex flex-col gap-6 scroll-mt-24">
      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <Heading
          tag="h2"
          cn="text-xl text-neutral-100 font-bold flex items-center gap-2"
        >
          <TrendingUp size={18} className="text-emerald-400" />
          Outcomes & Impact
        </Heading>

        <span className="text-xs text-neutral-500 font-mono">
          {outcomes.length} milestones delivered
        </span>
      </div>

      {/* Impact Deliverables Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {outcomes.map((item, idx) => {
          const { title, desc } = parseItem(item);

          return (
            <div
              key={idx}
              className="
                group relative flex items-start gap-3.5 p-4 rounded-xl
                bg-gradient-to-br from-emerald-500/[0.04] to-neutral-900/20
                border border-emerald-500/15 hover:border-emerald-500/35
                hover:bg-emerald-500/[0.07] transition-all duration-200
              "
            >
              {/* Checkmark Icon */}
              <div
                className="
                  w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20
                  text-emerald-400 flex items-center justify-center shrink-0 mt-0.5
                  group-hover:scale-105 transition-transform
                "
              >
                <CheckCircle2 size={15} />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-0.5 min-w-0 flex-1">
                {title ? (
                  <>
                    <h3 className="text-sm font-medium text-neutral-100 group-hover:text-white transition-colors">
                      {title}
                    </h3>
                    <Paragraph cn="text-xs text-neutral-300/90 leading-relaxed">
                      {desc}
                    </Paragraph>
                  </>
                ) : (
                  <Paragraph cn="text-sm text-neutral-300 group-hover:text-neutral-100 leading-relaxed">
                    {desc}
                  </Paragraph>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

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
    ...(project.features?.length
      ? [{ id: "features", label: "Key Features" }]
      : []),
    ...(project.challenges?.length
      ? [{ id: "challenges", label: "Challenges" }]
      : []),
    ...(project.outcomes?.length
      ? [{ id: "outcomes", label: "Outcomes" }]
      : []),
    ...(project.images?.length
      ? [{ id: "screenshots", label: "Screenshots" }]
      : []),
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
              <section
                id="overview"
                className="flex flex-col gap-4 scroll-mt-24"
              >
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
              <section
                id="tech-stack"
                className="flex flex-col gap-4 scroll-mt-24"
              >
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
              <KeyFeaturesSection
                features={project.features}
                featureCategories={project.featureCategories}
              />
            )}

            {/* Challenges */}
            {project.challenges && project.challenges.length > 0 && (
              <ChallengesSection items={project.challenges} />
            )}

            {/* Outcomes */}
            {project.outcomes && project.outcomes.length > 0 && (
              <OutcomesSection outcomes={project.outcomes} />
            )}

            {/* Gallery */}
            {project.images && project.images.length > 0 && (
              <section
                id="screenshots"
                className="flex flex-col gap-4 scroll-mt-24"
              >
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
