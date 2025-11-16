import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import React from "react";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import Pills from "@/components/ui/Pills";

const Experience = () => {
  return (
    <Container cn="items-start">
      <div className="flex items-start justify-start self-start mb-8">
        <Heading
          tag="h1"
          cn="text-3xl header bg-[#2f2f2f] px-2 text-white w-max break-words h-[40px] flex items-center"
        >
          Experience
        </Heading>
      </div>

      <div className="grid md:grid-cols-2 gap-6 w-full">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className="bg-gray-100 border-2 border-black px-5 py-4 shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000] transition-all duration-300 group w-full flex flex-col gap-4"
          >
            {/* Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Briefcase className="text-neutral-900" />
                <Heading tag="h2" cn="text-sm font-bold header text-gray-900">
                  {exp.company}
                </Heading>
              </div>
              <div className="flex items-center text-xs body  text-gray-600 gap-1">
                <Calendar size={14} />
                {exp.duration}
              </div>
            </div>

            {/* Role */}
            <Heading
              tag="h3"
              cn="text-xl sm:text-2xl font-semibold text-gray-800 header"
            >
              {exp.role}
            </Heading>

            {/* Short Description */}
            <Paragraph cn="text-xs sm:text-sm text-gray-600 ">
              {exp.description}
            </Paragraph>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 ">
              {exp.tech.map((t, i) => (
                // <span
                //   key={i}
                //   className="px-2 py-0.5 rounded-md text-xs font-medium bg-linear-to-r from-gray-100 to-gray-200 text-gray-800 shadow-sm body"
                // >
                //   {t}
                // </span>
                <Pills status="info" key={i}>
                  {t}
                </Pills>
              ))}
            </div>

            {/* CTA */}
            <Link
              href={`/experience${exp.slug}`}
              className="body text-xs uppercase border-t border-black/40 pt-1 hover:text-red-600 transition w-max flex items-center gap-2 text-gray-700"
            >
              Read Full Story <ChevronRight size={18} />
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Experience;
