"use client";

import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { LogLink, Logs, LogsDetail } from "@/helper/data/LogData";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import BackButton from "@/components/ui/BackButton";
import { ExternalLink } from "lucide-react";
import { getReadingTime } from "@/helper/utils/getReadingTime";

interface LogLinkCardProps {
  link: LogLink;
}

function LogLinkCard({ link }: LogLinkCardProps) {
  const displayUrl = link.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group relative flex flex-col justify-between p-4 rounded-xl
        border border-neutral-800 bg-neutral-900/60
        hover:bg-neutral-900 hover:border-neutral-700
        hover:-translate-y-0.5
        transition-all duration-200
      "
    >
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm sm:text-base font-semibold text-neutral-200 group-hover:text-emerald-400 transition-colors">
            {link.title}
          </span>
          <ExternalLink
            size={14}
            className="text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
          />
        </div>
        {link.description && (
          <Paragraph cn="text-xs sm:text-sm text-neutral-400 leading-relaxed">
            {link.description}
          </Paragraph>
        )}
      </div>

      <span className="text-[11px] font-mono text-neutral-500 truncate mt-3 group-hover:text-neutral-400">
        {displayUrl}
      </span>
    </a>
  );
}

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

  // Collect all links associated with this log (from log.links, section.links, or section.content link blocks)
  const allLinks: LogLink[] = [
    ...(log.links || []),
    ...log.sections.flatMap((s) => s.links || []),
    ...log.sections.flatMap((s) =>
      s.content
        .filter((c) => c.type === "link")
        .map((c) => ({
          title: c.title || c.value || "",
          url: c.url || "",
          description: c.description,
        }))
    ),
  ].filter(
    // Deduplicate by URL
    (link, idx, arr) => arr.findIndex((l) => l.url === link.url) === idx
  );

  return (
    <Container cn="items-start pb-24">
      <article className="w-full  flex flex-col gap-10">
        {/* Back */}
        <BackButton url="/logs" title="Back to Logs" label="Back to logs" />

        {/* Header */}
        <header className="flex flex-col gap-4">
          <Heading
            tag="h1"
            cn="text-3xl md:text-4xl text-neutral-100 leading-snug font-extrabold text-balance"
          >
            {log.title}
          </Heading>

          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3 text-sm text-emerald-500">
              <span>{log.author}</span>
              <span>•</span>
              <span>{log.date}</span>
              <span>•</span>
              <span className="uppercase tracking-wide">{log.tag}</span>
              <span>•</span>
              <span>{getReadingTime(log).text}</span>
            </div>

            {allLinks.length > 0 && (
              <div className="flex flex-wrap items-center gap-2">
                {allLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium
                      bg-neutral-900/80 border border-neutral-800 text-neutral-300
                      hover:bg-neutral-800 hover:text-emerald-400 hover:border-neutral-700
                      transition-all duration-200
                    "
                  >
                    <span>{link.title}</span>
                    <ExternalLink
                      size={12}
                      className="text-neutral-500 group-hover:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>

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

          <div className="flex flex-col gap-3 pt-2">
            {log.description.map((d, i) => (
              <Paragraph key={i} cn="text-lg text-neutral-400 leading-relaxed">
                {d}
              </Paragraph>
            ))}
          </div>
        </header>

        {/* Sections */}
        {log.sections.map((section) => {
          const sectionLinks = section.links || [];

          // Group consecutive link blocks so they render nicely in a grid
          const contentGroups: Array<
            | { type: "block"; block: (typeof section.content)[0]; index: number }
            | { type: "links"; items: LogLink[]; index: number }
          > = [];

          section.content.forEach((block, index) => {
            if (block.type === "link") {
              const lastGroup = contentGroups[contentGroups.length - 1];
              const linkItem: LogLink = {
                title: block.title || block.value || "",
                url: block.url || "",
                description: block.description,
              };

              if (lastGroup && lastGroup.type === "links") {
                lastGroup.items.push(linkItem);
              } else {
                contentGroups.push({
                  type: "links",
                  items: [linkItem],
                  index,
                });
              }
            } else {
              contentGroups.push({
                type: "block",
                block,
                index,
              });
            }
          });

          return (
            <section key={section.id} className="flex flex-col gap-6">
              <Heading
                tag="h2"
                cn="text-xl text-neutral-200 font-medium text-balance leading-snug"
              >
                <span className="text-emerald-500">#</span> {section.subheading}
              </Heading>

              {sectionLinks.length > 0 && (
                <div
                  className={`grid grid-cols-1 ${
                    sectionLinks.length > 1 ? "sm:grid-cols-2" : ""
                  } gap-4`}
                >
                  {sectionLinks.map((link, idx) => (
                    <LogLinkCard key={idx} link={link} />
                  ))}
                </div>
              )}

              {contentGroups.length > 0 && (
                <div className="flex flex-col gap-5">
                  {contentGroups.map((group) => {
                    if (group.type === "links") {
                      return (
                        <div
                          key={`links-${group.index}`}
                          className={`grid grid-cols-1 ${
                            group.items.length > 1 ? "sm:grid-cols-2" : ""
                          } gap-4`}
                        >
                          {group.items.map((item, idx) => (
                            <LogLinkCard key={idx} link={item} />
                          ))}
                        </div>
                      );
                    }

                    const block = group.block;
                    switch (block.type) {
                      case "text":
                        return (
                          <Paragraph
                            key={group.index}
                            cn="text-neutral-400 leading-relaxed"
                          >
                            {block.value}
                          </Paragraph>
                        );

                      case "image":
                        return (
                          <figure
                            key={group.index}
                            className="flex flex-col gap-2"
                          >
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
                            key={group.index}
                            className="border-l-2 border-neutral-700 pl-4 italic text-neutral-400"
                          >
                            {block.value}
                          </blockquote>
                        );

                      case "callout":
                        return (
                          <div
                            key={group.index}
                            className="border border-neutral-700 bg-neutral-900/50 p-4 text-neutral-300"
                          >
                            {block.value}
                          </div>
                        );

                      case "code":
                        return (
                          <pre
                            key={group.index}
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
              )}
            </section>
          );
        })}

        {/* Top-level Links (if defined on log and not already inside sections) */}
        {log.links &&
          log.links.length > 0 &&
          !log.sections.some(
            (s) =>
              s.content.some((c) => c.type === "link") ||
              (s.links && s.links.length > 0)
          ) && (
            <section className="flex flex-col gap-6">
              <Heading
                tag="h2"
                cn="text-xl text-neutral-200 font-medium text-balance leading-snug"
              >
                <span className="text-emerald-500">#</span> Project Links
              </Heading>

              <div
                className={`grid grid-cols-1 ${
                  log.links.length > 1 ? "sm:grid-cols-2" : ""
                } gap-4`}
              >
                {log.links.map((link, idx) => (
                  <LogLinkCard key={idx} link={link} />
                ))}
              </div>
            </section>
          )}

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
