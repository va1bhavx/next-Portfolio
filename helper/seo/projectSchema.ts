import { SITE_URL } from "../data/common";

export function getProjectSchema(project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",

    "@id": `${SITE_URL}/projects/${project.slug}/#project`,
    url: `${SITE_URL}/projects/${project.slug}`,

    name: project.title,
    description: project.description || project.snippet,

    image: `${SITE_URL}${project.cover}`,

    author: {
      "@id": `${SITE_URL}#person`,
    },

    programmingLanguage: project.techStack,
  };
}
