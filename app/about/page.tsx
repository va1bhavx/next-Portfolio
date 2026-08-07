import React from "react";
import AboutPage from "./AboutPage";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "About | Vaibhav Kumar",
    description:
      "Get to know Vaibhav Kumar — a frontend developer from Patna, Bihar, now based in Hyderabad, building products with React and Next.js, one commit at a time.",

    openGraph: {
      title: "About | Vaibhav Kumar",
      description:
        "The story, journey, and quirks behind Vaibhav Kumar — frontend developer building real products, not just tutorials.",
      url: "https://kumarvaibhav.xyz/about",
      images: [
        {
          url: "/banner.png",
          width: 1200,
          height: 630,
          alt: "Vaibhav Kumar",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "About | Vaibhav Kumar",
      description:
        "The story, journey, and quirks behind Vaibhav Kumar — frontend developer building real products, not just tutorials.",
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
  return <AboutPage />;
};

export default page;
