import React from "react";
import ExperienceDetails from "./experience-details";
import { Metadata } from "next";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import { getExperienceSchema } from "@/helper/seo/experienceSchema";
import { SITE_URL } from "@/helper/data/common";

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

  const cleanSlug = experience.slug.split("/").pop();

  return {
    title: `${experience.role} at ${experience.company} | Vaibhav Kumar`,
    description: experience.description,
    openGraph: {
      title: `${experience.role} at ${experience.company}`,
      description: experience.description,
      url: `${SITE_URL}/experience/${cleanSlug}`,
      images: [
        {
          url: "/banner.png",
          width: 1200,
          height: 630,
          alt: `${experience.role} at ${experience.company}`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${experience.role} at ${experience.company}`,
      description: experience.description,
      images: ["/banner.png"],
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = EXPERIENCE.find((e) => e.slug.split("/").pop() === slug);

  return (
    <>
      {experience && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getExperienceSchema(experience)),
          }}
        />
      )}
      <ExperienceDetails />
    </>
  );
}
