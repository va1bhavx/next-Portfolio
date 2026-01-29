import ProjectDetails from "./project-details";

import { PROJECTS } from "@/helper/data/ProjectData";
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

  return {
    title: `${project.title} | Vaibhav Kumar`,
    description: project.snippet || project.description,
    openGraph: {
      title: project.title,
      description: project.snippet,
      images: [
        {
          url: project.cover,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.snippet,
      images: [project.cover],
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

export default function Page() {
  return <ProjectDetails />;
}
