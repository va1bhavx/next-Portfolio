import React from "react";
import Experience from "./experience";

import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Experience | Vaibhav Kumar",
    description:
      "Professional experience of Vaibhav Kumar, showcasing real-world frontend development work, product contributions, and scalable application development using React and Next.js.",

    openGraph: {
      title: "Experience | Vaibhav Kumar",
      description:
        "Work experience and case studies highlighting frontend engineering and product development contributions.",
      url: "https://kumarvaibhav.xyz/experience",
      images: [
        {
          url: "/banner.png",
          width: 1200,
          height: 630,
          alt: "Vaibhav Kumar Experience",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Experience | Vaibhav Kumar",
      description:
        "Explore Vaibhav Kumar’s professional experience and real-world frontend engineering contributions.",
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

const page = () => {
  return <Experience />;
};

export default page;
