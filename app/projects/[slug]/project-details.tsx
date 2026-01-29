"use client";

import BackButton from "@/components/ui/BackButton";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { ProjectData, PROJECTS } from "@/helper/data/ProjectData";
import { Github, Link2 } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

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

  return (
    <Container cn="items-start pb-24">
      <article className=" w-full flex flex-col gap-12">
        <BackButton
          url="/projects"
          title="Back to Projects"
          label="Back to projects"
        />

        {/* Hero */}
        {project.cover && (
          <div className="max-w-4xl mx-auto w-full overflow-hidden rounded-xl border border-neutral-800">
            <Image
              src={project.cover}
              alt={project.title}
              width={1400}
              height={600}
              className="w-full h-[260px] md:h-80 object-cover"
              priority
            />
          </div>
        )}

        {/* Title */}
        <header className="flex flex-col gap-4">
          <Heading tag="h1" cn="text-4xl md:text-5xl text-neutral-100">
            {project.title}
          </Heading>

          {project.description && (
            <Paragraph cn="text-lg text-neutral-400 leading-relaxed">
              {project.description}
            </Paragraph>
          )}
        </header>

        {/* Content */}
        {project.features?.length > 0 && (
          <section className="flex flex-col gap-4">
            <Heading tag="h2" cn="text-2xl text-neutral-200">
              What was built
            </Heading>

            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              {project.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </section>
        )}

        {project.challenges?.length > 0 && (
          <section className="flex flex-col gap-4">
            <Heading tag="h2" cn="text-2xl text-neutral-200">
              Challenges
            </Heading>

            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              {project.challenges.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </section>
        )}

        {project.outcomes?.length > 0 && (
          <section className="flex flex-col gap-4">
            <Heading tag="h2" cn="text-2xl text-neutral-200">
              Outcomes
            </Heading>

            <ul className="list-disc pl-6 space-y-2 text-neutral-400">
              {project.outcomes.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Gallery */}
        {project.images?.length > 0 && (
          <section className="flex flex-col gap-4">
            <Heading tag="h2" cn="text-2xl text-neutral-200">
              Screenshots
            </Heading>

            <ImageCarousel images={project.images} />
          </section>
        )}

        {/* Links */}
        {(project.github || project.liveDemo) && (
          <section className="flex gap-4 flex-wrap pt-6 border-t border-neutral-800">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white"
              >
                <Github size={18} />
                Source Code
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-neutral-300 hover:text-white"
              >
                <Link2 size={18} />
                Live Demo
              </a>
            )}
          </section>
        )}
      </article>
    </Container>
  );
};

export default ProjectDetails;
