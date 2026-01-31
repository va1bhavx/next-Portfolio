import React from "react";
import ExperienceDetails from "./experience-details";
import { Metadata } from "next";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import { getExperienceSchema } from "@/helper/seo/experienceSchema";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const experience = EXPERIENCE.find((e) => e.slug.split("/").pop() === slug);

  if (!experience) {
    return {
      title: "Experience | Vaibhav Kumar",
    };
  }

  return {
    title: `${experience.role} at ${experience.company} | Vaibhav Kumar`,
    description: experience.description,
    openGraph: {
      title: `${experience.role} at ${experience.company}`,
      description: experience.description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${experience.role} at ${experience.company}`,
      description: experience.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getExperienceSchema(EXPERIENCE)),
  }}
/>;

const page = () => {
  return <ExperienceDetails />;
};

export default page;
