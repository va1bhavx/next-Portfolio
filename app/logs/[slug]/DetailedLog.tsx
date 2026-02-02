"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { Logs, LogsDetail } from "@/helper/data/LogData";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";

function DetailedLog() {
  const params = useParams();
  const router = useRouter();
  const [log, setLog] = useState<LogsDetail | undefined>();

  useEffect(() => {
    if (params.slug) {
      const found =
        Logs.find((p) => p.slug.split("/").pop() === params.slug) || null;

      if (!found) router.push("/logs");
      else setLog(found);
    }
  }, [params.slug, router]);

  if (!log) return null;

  return (
    <Container cn="items-start pb-24">
      <article className="w-full  flex flex-col gap-10">
        {/* Back */}
        <BackButton url="/logs" title="Back to Logs" label="Back to logs" />

        {/* Header */}
        <header className="flex flex-col gap-4">
          <Heading
            tag="h1"
            cn="text-3xl md:text-4xl text-neutral-100 leading-snug"
          >
            {log.title}
          </Heading>

          <div className="flex flex-wrap gap-3 text-sm text-neutral-500">
            <span>{log.author}</span>
            <span>•</span>
            <span>{log.date}</span>
            <span>•</span>
            <span className="uppercase tracking-wide">{log.tag}</span>
          </div>

          <div className="flex flex-col gap-3 pt-2">
            {log.description.map((d, i) => (
              <Paragraph key={i} cn="text-lg text-neutral-400 leading-relaxed">
                {d}
              </Paragraph>
            ))}
          </div>
        </header>

        {/* Cover Image */}
        {log.coverImage && (
          <figure className="flex flex-col gap-2">
            <div className="overflow-hidden border border-neutral-800">
              <Image
                src={log.coverImage}
                alt={log.title}
                width={1400}
                height={700}
                className="w-full object-cover"
                priority
              />
            </div>
            <figcaption className="text-xs text-neutral-500 italic">
              {log.title}
            </figcaption>
          </figure>
        )}

        {/* Sections */}
        {log.sections.map((section) => (
          <section key={section.id} className="flex flex-col gap-6">
            <Heading tag="h2" cn="text-2xl text-neutral-200">
              {section.subheading}
            </Heading>

            <div className="flex flex-col gap-5">
              {section.content.map((block, index) => {
                switch (block.type) {
                  case "text":
                    return (
                      <Paragraph
                        key={index}
                        cn="text-neutral-400 leading-relaxed"
                      >
                        {block.value}
                      </Paragraph>
                    );

                  case "image":
                    return (
                      <figure key={index} className="flex flex-col gap-2">
                        <div className="border border-neutral-800 overflow-hidden">
                          <Image
                            src={block.src!}
                            alt={block.alt || "Log image"}
                            width={1400}
                            height={700}
                            className="w-full object-cover"
                          />
                        </div>
                        {block.alt && (
                          <figcaption className="text-xs text-neutral-500 italic">
                            {block.alt}
                          </figcaption>
                        )}
                      </figure>
                    );

                  case "quote":
                    return (
                      <blockquote
                        key={index}
                        className="border-l-2 border-neutral-700 pl-4 italic text-neutral-400"
                      >
                        {block.value}
                      </blockquote>
                    );

                  case "callout":
                    return (
                      <div
                        key={index}
                        className="border border-neutral-700 bg-neutral-900/50 p-4 text-neutral-300"
                      >
                        {block.value}
                      </div>
                    );

                  case "code":
                    return (
                      <pre
                        key={index}
                        className="bg-neutral-900 border border-neutral-800 p-4 overflow-x-auto text-sm text-neutral-200"
                      >
                        <code>{block.value}</code>
                      </pre>
                    );

                  default:
                    return null;
                }
              })}
            </div>
          </section>
        ))}

        {/* Footer reflection */}
        <footer className="pt-10 border-t border-neutral-800 flex flex-col gap-3">
          <Paragraph cn="text-neutral-400 leading-relaxed">
            This log captures my current thinking not a final answer.
            Engineering evolves, and so will these notes.
          </Paragraph>

          <Paragraph cn="text-sm text-neutral-500 italic">
            Less polish. More honesty. Real progress.
          </Paragraph>
        </footer>
      </article>
    </Container>
  );
}

export default DetailedLog;
