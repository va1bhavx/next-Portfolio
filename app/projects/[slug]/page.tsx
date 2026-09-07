import ProjectDetails from "./project-details";

import { PROJECTS } from "@/helper/data/ProjectData";
import { getProjectSchema } from "@/helper/seo/projectSchema";
import { SITE_URL } from "@/helper/data/common";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug.split("/").pop() === slug);

  if (!project) {
    return { title: "Project | Vaibhav Kumar" };
  }

  const cleanSlug = project.slug.split("/").pop();
  const coverImage = project.cover || "/banner.png";

  return {
    title: `${project.title} | Vaibhav Kumar`,
    description: project.snippet || project.description,
    openGraph: {
      title: project.title,
      description: project.snippet,
      url: `${SITE_URL}/projects/${cleanSlug}`,
      images: [
        {
          url: coverImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.snippet,
      images: [coverImage],
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
  const project = PROJECTS.find((p) => p.slug.split("/").pop() === slug);

  return (
    <>
      {project && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getProjectSchema(project)),
          }}
        />
      )}
      <ProjectDetails />
    </>
  );
}
