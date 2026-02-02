import DetailedLog from "./DetailedLog";
import { Logs } from "@/helper/data/LogData";
import { getLogArticleSchema } from "@/helper/seo/logSchema";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const log = Logs.find((l) => l.slug === slug);

  if (!log) {
    return {
      title: "Log | Vaibhav Kumar",
    };
  }

  return {
    title: `${log.title} | Logs | Vaibhav Kumar`,
    description: log.snippet,

    openGraph: {
      title: log.title,
      description: log.snippet,
      url: `https://kumarvaibhav.xyz/logs/${log.slug}`,
      images: [
        {
          url: log.coverImage || "/banner.png", // or log.cover later
          width: 1200,
          height: 630,
          alt: log.title,
        },
      ],
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: log.title,
      description: log.snippet,
      images: log.coverImage || ["/banner.png"],
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

<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(getLogArticleSchema(Logs)),
  }}
/>;

export default function Page() {
  return <DetailedLog />;
}
