import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import Link from "next/link";
import { BrainCircuit, ChevronRight, Link2 } from "lucide-react";
import { ImageCarousel } from "../ui/ImageCarousel";

const IMAGES = [
  "/company/aptagrim/aptagrim_1.webp",
  "/company/aptagrim/aptagrim_2.webp",
  "/company/aptagrim/aptagrim_3.webp",
  "/company/aptagrim/aptagrim_4.webp",
  "/company/aptagrim/aptagrim_5.webp",
  "/company/aptagrim/aptagrim_6.webp",
  "/company/aptagrim/aptagrim_7.webp",
];

const ExperienceSection = () => {
  return (
    <Container>
      <section className="flex flex-col gap-12 w-full">
        {/* Section Heading */}
        <Heading
          tag="h2"
          cn="text-sm uppercase tracking-widest text-neutral-400"
        >
          Experience
        </Heading>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div className="flex flex-col gap-4">
            <Heading
              tag="h3"
              cn="text-xl text-neutral-200 font-normal flex items-center gap-2"
            >
              <BrainCircuit size={18} className="text-neutral-400" />
              Aptagrim Limited
            </Heading>

            <Paragraph cn="text-sm text-neutral-400">
              NextJS Developer · 2025 — Present
            </Paragraph>
            <div>
              <ImageCarousel images={IMAGES} />
            </div>
          </div>

          {/* Role Description */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <Paragraph cn="text-neutral-400 leading-relaxed">
              At Aptagrim, I work as a Next.js developer building scalable,
              user-focused web applications. My role involves translating
              product requirements into reliable, production-ready features
              using modern frontend engineering practices.
            </Paragraph>

            <ul className="space-y-2 body text-neutral-400 text-sm list-disc pl-5">
              <li>
                <Paragraph cn="text-neutral-400 leading-relaxed">
                  Built responsive and modular UI using Next.js and Tailwind CSS
                </Paragraph>
              </li>
              <li>
                <Paragraph cn="text-neutral-400 leading-relaxed">
                  Developed reusable component systems and internal frontend
                  tools
                </Paragraph>
              </li>
              <li>
                <Paragraph cn="text-neutral-400 leading-relaxed">
                  Integrated APIs, managed async data flows, and improved
                  performance
                </Paragraph>
              </li>

              <li>
                <Paragraph cn="text-neutral-400 leading-relaxed">
                  Collaborated on frontend architecture and design systems
                </Paragraph>
              </li>
            </ul>

            <Paragraph cn="text-neutral-400 leading-relaxed">
              This role strengthened my understanding of production-grade
              frontend systems and reinforced the importance of maintainable,
              well-structured codebases.
            </Paragraph>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://bitsndbricks.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View BitsndBricks live project"
              >
                <Button size="sm" rightIcon={<Link2 size={14} />}>
                  Live Project
                </Button>
              </a>

              <Link
                href="/experience/aptagrim"
                aria-label="Read more about BitsndBricks project"
              >
                <Button
                  variant="ghost"
                  size="sm"
                  rightIcon={<ChevronRight size={14} />}
                >
                  Case Study
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ExperienceSection;
