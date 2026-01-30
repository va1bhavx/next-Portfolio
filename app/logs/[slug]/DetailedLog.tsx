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
      <article className=" w-full flex flex-col gap-8">
        <BackButton url="/logs" title="Back to Logs" label="Back to logs" />

        <header className="flex flex-col gap-2">
          <Heading
            tag="h1"
            cn="text-3xl md:text-4xl text-neutral-100 leading-relaxed"
          >
            {log.title}
          </Heading>

          <div className="flex gap-4 text-sm text-neutral-400">
            <span>{log.author}</span>
            <span>•</span>
            <span>{log.date}</span>
            <span>•</span>
            <span>{log.tag}</span>
          </div>

          <Paragraph cn="text-lg text-neutral-400 leading-relaxed">
            {log.description}
          </Paragraph>
        </header>

        {log.coverImage && (
          <div className="overflow-hidden border border-neutral-800">
            <Image
              src={log.coverImage}
              alt={log.title}
              width={1400}
              height={700}
              className="w-full object-cover"
            />
          </div>
        )}

        {log.sections.map((section) => (
          <section key={section.id} className="flex flex-col gap-6">
            <Heading tag="h2" cn="text-2xl text-neutral-200">
              # {section.subheading}
            </Heading>

            <div className="flex flex-col gap-4">
              {section.content.map((block, index) => {
                if (block.type === "text") {
                  return (
                    <Paragraph
                      key={index}
                      cn="text-neutral-400 leading-relaxed"
                    >
                      {block.value}
                    </Paragraph>
                  );
                }

                // if (block.type === "image") {
                //   return (
                //     <div
                //       key={index}
                //       className="border border-neutral-800 overflow-hidden"
                //     >
                //       <Image
                //         src={block.src}
                //         alt={block.alt || "Log image"}
                //         width={1400}
                //         height={700}
                //         className="w-full object-cover"
                //       />
                //     </div>
                //   );
                // }

                return null;
              })}
            </div>
          </section>
        ))}
      </article>
    </Container>
  );
}

export default DetailedLog;
