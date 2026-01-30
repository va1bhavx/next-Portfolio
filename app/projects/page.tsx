import Projects from "./projects";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Projects | Vaibhav Kumar",
    description:
      "Explore projects built by Vaibhav Kumar, including production applications, dashboards, and modern web experiences developed using React and Next.js.",

    openGraph: {
      title: "Projects | Vaibhav Kumar",
      description:
        "A collection of real-world projects showcasing scalable and modern frontend development.",
      url: "https://kumarvaibhav.xyz/projects",
      images: [
        {
          url: "/banner.png",
          width: 1200,
          height: 630,
          alt: "Vaibhav Kumar Projects",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Projects | Vaibhav Kumar",
      description:
        "Projects and case studies built by Vaibhav Kumar using React and Next.js.",
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
  return <Projects />;
};

export default page;
