import { SITE_URL } from "../data/common";

export function getLogArticleSchema(log) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",

    "@id": `${SITE_URL}/logs/${log.slug}/#article`,
    mainEntityOfPage: `${SITE_URL}/logs/${log.slug}`,

    headline: log.title,
    description: log.description,

    author: {
      "@id": `${SITE_URL}/#person`,
    },

    publisher: {
      "@id": `${SITE_URL}/#person`,
    },

    datePublished: log.date,
    dateModified: log.date,

    url: `${SITE_URL}/logs/${log.slug}`,
  };
}
