"use client";

import BackButton from "@/components/ui/BackButton";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import Paragraph from "@/components/ui/Paragraph";
import { ProjectData, PROJECTS } from "@/helper/data/ProjectData";
import { ChevronLeft, Github, Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaTools, FaUserTie, FaFlagCheckered } from "react-icons/fa";

interface ProjectDetailsProps {
  slug?: string;
}

const SoftCard = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.07)] transition-all">
    {children}
  </div>
);

const SectionBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-12 pb-10 border-b border-neutral-200">
    <Heading tag="h2" cn="text-2xl font-semibold mb-4 text-neutral-900 header">
      {title}
    </Heading>
    <div className="prose prose-neutral max-w-none body">{children}</div>
  </section>
);

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ slug }) => {
  const params = useParams();
  const router = useRouter();
  const [projectToShow, setProjectToShow] = useState<ProjectData | undefined>(
    undefined
  );

  useEffect(() => {
    if (params.slug) {
      const project =
        PROJECTS.find((prj) => prj.slug.split("/").pop() === params.slug) ||
        null;
      if (!project) router.push("/projects");
      else setProjectToShow(project);
    }
  }, [params.slug, router]);

  if (!projectToShow)
    return <p className="text-center mt-10 body">Loading...</p>;

  return (
    <Container cn="items-start mx-auto pb-20">
      {/* Back button */}
      <BackButton
        url="/projects"
        title="Back to Projects"
        label="Link to go back to projects page"
      />

      <article className="w-full">
        {/* Cover Image */}
        {projectToShow.cover && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-neutral-300 shadow-sm">
            <Image
              src={projectToShow.cover}
              alt={projectToShow.title}
              width={1400}
              height={500}
              className="object-cover w-full h-[350px]"
              priority
            />
          </div>
        )}

        {/* Title */}
        <header className="text-center mb-10">
          <Heading
            tag="h1"
            cn="text-4xl md:text-5xl font-bold text-neutral-900 header"
          >
            {projectToShow.title}
          </Heading>
        </header>

        {/* Description */}
        {projectToShow.description && (
          <section className="mb-14 max-w-3xl mx-auto text-center">
            <Paragraph cn="text-lg text-neutral-700 leading-relaxed body">
              {projectToShow.description}
            </Paragraph>
          </section>
        )}

        {/* Info Cards */}
        <section className="grid md:grid-cols-3 gap-6 mb-16">
          {projectToShow.techStack && (
            <SoftCard>
              <div className="flex items-center gap-2 mb-3">
                <FaTools className="text-neutral-700" />
                <h2 className="font-semibold text-neutral-900 header">
                  Tech Stack
                </h2>
              </div>
              <div className="flex flex-wrap gap-2 body">
                {projectToShow.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 rounded-md text-xs font-medium bg-neutral-100 border border-neutral-300 text-neutral-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </SoftCard>
          )}

          {projectToShow.role && (
            <SoftCard>
              <div className="flex items-center gap-2 mb-3">
                <FaUserTie className="text-neutral-700" />
                <h2 className="font-semibold text-neutral-900 header">Role</h2>
              </div>
              <Paragraph cn="text-neutral-700 text-sm leading-relaxed body">
                {projectToShow.role}
              </Paragraph>
            </SoftCard>
          )}

          {projectToShow.status && (
            <SoftCard>
              <div className="flex items-center gap-2 mb-3">
                <FaFlagCheckered className="text-neutral-700" />
                <h2 className="font-semibold text-neutral-900 header">
                  Status
                </h2>
              </div>
              <Paragraph cn="text-neutral-700 text-sm leading-relaxed body">
                {projectToShow.status}
              </Paragraph>
            </SoftCard>
          )}
        </section>

        {/* Features */}
        {projectToShow.features?.length > 0 && (
          <SectionBlock title="Key Features">
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 body">
              {projectToShow.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </SectionBlock>
        )}

        {/* Challenges */}
        {projectToShow.challenges?.length > 0 && (
          <SectionBlock title="Challenges">
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 body">
              {projectToShow.challenges.map((challenge, idx) => (
                <li key={idx}>{challenge}</li>
              ))}
            </ul>
          </SectionBlock>
        )}

        {/* Outcomes */}
        {projectToShow.outcomes?.length > 0 && (
          <SectionBlock title="Outcomes">
            <ul className="list-disc pl-6 space-y-2 text-neutral-700 body">
              {projectToShow.outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </SectionBlock>
        )}

        {/* Gallery */}
        {projectToShow.images?.length > 0 && (
          <section className="mb-16">
            <Heading
              tag="h2"
              cn="text-2xl font-semibold text-neutral-900 mb-4 header"
            >
              Project Gallery
            </Heading>

            <div className="grid md:grid-cols-2 gap-6">
              <ImageCarousel images={projectToShow.images} />
            </div>
          </section>
        )}

        {/* Links */}
        {(projectToShow.github || projectToShow.liveDemo) && (
          <section className="flex flex-wrap gap-4 mt-12">
            {projectToShow.github && (
              <a
                href={projectToShow.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition flex items-center gap-2 body"
              >
                <Github size={18} />
                View on GitHub
              </a>
            )}

            {projectToShow.liveDemo && (
              <a
                href={projectToShow.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-neutral-900 text-white rounded-md text-sm font-medium hover:bg-neutral-800 transition flex items-center gap-2 body"
              >
                Live Demo <Link2 size={18} />
              </a>
            )}
          </section>
        )}
      </article>
    </Container>
  );
};

export default ProjectDetails;
