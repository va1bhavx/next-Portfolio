import type { MetadataRoute } from "next";
import { PROJECTS } from "@/helper/data/ProjectData";
import { EXPERIENCE } from "@/helper/data/ExperienceData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kumarvaibhav.xyz";

  // Static pages
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: new Date(),
    },
  ];

  // Dynamic project pages
  const projectRoutes = PROJECTS.map((project) => ({
    url: `${baseUrl}/projects/${project.slug.split("/").pop()}`,
    lastModified: new Date(),
  }));

  // Dynamic experience pages
  const experienceRoutes = EXPERIENCE.map((exp) => ({
    url: `${baseUrl}/experience/${exp.slug.split("/").pop()}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes, ...experienceRoutes];
}
