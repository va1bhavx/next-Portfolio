import DetailedLog from "./DetailedLog";
import { Logs } from "@/helper/data/LogData";
import { getLogArticleSchema } from "@/helper/seo/logSchema";
import { SITE_URL } from "@/helper/data/common";
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

  const coverImage = log.coverImage || "/banner.png";

  return {
    title: `${log.title} | Logs | Vaibhav Kumar`,
    description: log.snippet,

    openGraph: {
      title: log.title,
      description: log.snippet,
      url: `${SITE_URL}/logs/${log.slug}`,
      images: [
        {
          url: coverImage,
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
      images: [coverImage],
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const log = Logs.find((l) => l.slug === slug);

  return (
    <>
      {log && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLogArticleSchema(log)),
          }}
        />
      )}
      <DetailedLog />
    </>
  );
}
