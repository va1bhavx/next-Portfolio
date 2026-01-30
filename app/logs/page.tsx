import Logs from "@/components/web/Logs/Logs";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Logs | Vaibhav Kumar",
    description:
      "Development logs by Vaibhav Kumar covering real-world frontend engineering, project learnings, architecture decisions, and practical problem-solving experiences.",

    openGraph: {
      title: "Logs | Vaibhav Kumar",
      description:
        "Engineering logs documenting real product development, experiments, and lessons learned while building modern web applications.",
      url: "https://kumarvaibhav.xyz/logs",
      images: [
        {
          url: "/banner.png",
          width: 1200,
          height: 630,
          alt: "Vaibhav Kumar Development Logs",
        },
      ],
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title: "Logs | Vaibhav Kumar",
      description:
        "Real-world development logs, technical learnings, and engineering insights by Vaibhav Kumar.",
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

function page() {
  return <Logs />;
}

export default page;
