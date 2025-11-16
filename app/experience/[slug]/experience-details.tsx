"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import { ArrowLeft, Building2, Calendar, Clock } from "lucide-react";
import Pills from "@/components/ui/Pills";
import BackButton from "@/components/ui/BackButton";

const SectionCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="bg-neutral-50 border border-neutral-200 rounded-xl p-6 sm:p-8 shadow-[0_1px_2px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_6px_rgba(0,0,0,0.06)] transition-all">
    <Heading
      tag="h2"
      cn="text-xl sm:text-2xl font-semibold pb-3 mb-4 border-b border-gray-200 header"
    >
      {title}
    </Heading>
    <div className="prose prose-neutral max-w-none">{children}</div>
  </section>
);

const ExperienceDetails = () => {
  const params = useParams();
  const router = useRouter();
  const [experience, setExperience] = useState<(typeof EXPERIENCE)[0] | null>(
    null
  );

  useEffect(() => {
    if (params.slug) {
      const expData =
        EXPERIENCE.find((exp) => exp.slug.split("/").pop() === params.slug) ||
        null;
      if (!expData) router.push("/experience");
      else setExperience(expData);
    }
  }, [params.slug, router]);

  if (!experience) return <p className="text-center mt-10">Loading...</p>;

  return (
    <Container cn="items-start min-h-screen w-full pb-20">
      {/* Back Button */}

      <BackButton
        url="/experience"
        title="Back to Experience"
        label="Link to go back to experience page"
      />
      {/* Hero Section */}
      <section className="w-full  py-12 ">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="text-xs uppercase tracking-wide mb-3 flex items-center justify-center gap-1 text-gray-600 body">
            <Building2 className="w-4 h-4" />
            Case Study
          </div>

          <Heading
            tag="h1"
            cn="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900 header"
          >
            {experience.role}
          </Heading>

          {/* Company + Duration */}
          <div className="flex flex-wrap justify-center gap-6 mb-4 text-gray-700">
            <div className="flex items-center gap-2 body">
              <Building2 className="w-5 h-5 text-gray-500" />
              {experience.company}
            </div>

            <div className="flex items-center gap-2 body">
              <Calendar className="w-5 h-5 text-gray-500" />
              {experience.duration}
            </div>
          </div>

          {experience.description && (
            <Paragraph cn="max-w-3xl mx-auto text-base sm:text-lg text-gray-700 leading-relaxed body">
              {experience.description}
            </Paragraph>
          )}
        </div>
      </section>

      {/* Layout Grid */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-10">
          {experience.responsibilities?.length > 0 && (
            <SectionCard title="Key Responsibilities">
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-base body">
                {experience.responsibilities.map((r, idx) => (
                  <li key={idx}>{r}</li>
                ))}
              </ul>
            </SectionCard>
          )}

          {experience.achievements?.length > 0 && (
            <SectionCard title="Achievements">
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-base body">
                {experience.achievements.map((a, idx) => (
                  <li key={idx}>{a}</li>
                ))}
              </ul>
            </SectionCard>
          )}

          {experience.learned?.length > 0 && (
            <SectionCard title="Skills & Learnings">
              <ul className="list-disc list-inside space-y-3 text-gray-700 text-base body">
                {experience.learned.map((l, idx) => (
                  <li key={idx}>{l}</li>
                ))}
              </ul>
            </SectionCard>
          )}

          {experience.notableProjects?.length > 0 && (
            <SectionCard title="Notable Projects">
              <ul className="list-disc list-inside space-y-3 text-base text-gray-700 body">
                {experience.notableProjects.map((p, idx) => (
                  <li key={idx}>
                    {p.link ? (
                      <Link
                        href={p.link}
                        target="_blank"
                        className="underline text-blue-600 hover:text-blue-800"
                      >
                        {p.name}
                      </Link>
                    ) : (
                      p.name
                    )}
                  </li>
                ))}
              </ul>
            </SectionCard>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-8 lg:sticky lg:top-34 h-fit">
          {experience.tech?.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
              <Heading
                tag="h3"
                cn="text-lg font-semibold mb-3 border-b pb-2 header"
              >
                Tech Stack
              </Heading>
              <div className="flex flex-wrap gap-2">
                {experience.tech.map((tech, idx) => (
                  <Pills status="info" key={idx}>
                    {tech}
                  </Pills>
                ))}
              </div>
            </div>
          )}

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <Heading
              tag="h3"
              cn="text-lg font-semibold mb-3 border-b pb-2 header"
            >
              Experience Overview
            </Heading>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium header">Duration</span>
                <span className="body">{experience.duration}</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium header">Company</span>
                <span className="body">{experience.company}</span>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
};

export default ExperienceDetails;
