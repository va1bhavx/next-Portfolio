import { SITE_URL } from "../data/common";

export function getExperienceSchema(exp) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",

    "@id": `${SITE_URL}/experience/${exp.slug}/#case`,
    url: `${SITE_URL}/experience/${exp.slug}`,

    name: `${exp.role} at ${exp.company}`,
    description: exp.description,

    author: {
      "@id": `${SITE_URL}/#person`,
    },

    about: exp.tech,

    dateCreated: exp.duration,
  };
}
