import { SITE_URL } from "../data/common";

export function getPersonSchema() {
  return {
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Vaibhav Kumar",
    url: SITE_URL,
    image: `${SITE_URL}/banner.png`,
    jobTitle: "Frontend Developer",
    description:
      "Frontend developer specializing in React and Next.js, building scalable and performance-focused web applications.",

    sameAs: [
      "https://github.com/va1bhavx",
      "https://twitter.com/va1bhavx",
      "https://www.linkedin.com/in/va1bhavx",
      "https://medium.com/@va1bhavx",
      "https://va1bhavx.hashnode.dev",
      "https://dev.to/va1bhavx",
    ],

    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "Frontend Architecture",
      "Web Performance",
      "UI Engineering",
    ],

    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      skills: ["React", "Next.js", "TypeScript", "Dashboard Applications"],
    },

    worksFor: {
      "@id": `${SITE_URL}#org`,
    },
  };
}

export function getOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#org`,
    name: "Aptagrim Limited",
  };
}

export function getWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Vaibhav Kumar Portfolio",
    description:
      "Portfolio of Vaibhav Kumar — frontend developer sharing projects, case studies, and engineering logs.",
    inLanguage: "en",
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function getHomePageSchema() {
  return {
    "@type": "WebPage",
    "@id": `${SITE_URL}/#webpage`,
    url: SITE_URL,
    name: "Vaibhav Kumar – React & NextJS Developer Portfolio",
    inLanguage: "en",
    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },
    about: {
      "@id": `${SITE_URL}/#person`,
    },
    mainEntity: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function getBlogSchema() {
  return {
    "@type": "Blog",
    "@id": `${SITE_URL}/logs/#blog`,
    name: "Engineering Logs by Vaibhav Kumar",
    description:
      "Technical logs and engineering notes about frontend systems and real-world product development.",
    author: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

export function getRootGraphSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      getPersonSchema(),
      getOrganizationSchema(),
      getWebsiteSchema(),
      getHomePageSchema(),
      getBlogSchema(),
    ],
  };
}
