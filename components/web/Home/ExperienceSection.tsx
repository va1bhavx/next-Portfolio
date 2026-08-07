import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import Button from "../../ui/Button";
import Pills from "../../ui/Pills";
import Link from "next/link";
import { ArrowUpRight, Calendar, Link2 } from "lucide-react";
import { ImageCarousel } from "../../ui/ImageCarousel";
import { EXPERIENCE } from "@/helper/data/ExperienceData";

const IMAGES = [
  "/company/aptagrim/aptagrim_1.webp",
  "/company/aptagrim/aptagrim_2.webp",
  "/company/aptagrim/aptagrim_3.webp",
  "/company/aptagrim/aptagrim_4.webp",
  "/company/aptagrim/aptagrim_5.webp",
  "/company/aptagrim/aptagrim_6.webp",
  "/company/aptagrim/aptagrim_7.webp",
];

const CURRENT_ROLE = EXPERIENCE[0];

const ExperienceSection = () => {
  return (
    <Container>
      <section className="flex flex-col gap-8 w-full">
        {/* Section Header */}
        <div className="flex items-end justify-between w-full">
          <Heading
            tag="h2"
            cn="text-lg uppercase tracking-widest text-neutral-400"
          >
            Experience
          </Heading>

          <Link
            href="/experience"
            aria-label="View full work experience"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition"
          >
            View all experience →
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center w-full">
          {/* Visual — kept modest, this is a teaser not a gallery */}
          <div className="relative w-full lg:w-[38%] shrink-0 rounded-lg overflow-hidden border border-neutral-800">
            <span className="absolute top-3 left-3 z-20 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wide bg-neutral-900/80 backdrop-blur text-emerald-400 px-2 py-1 rounded-full border border-emerald-500/30">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Current role
            </span>
            <ImageCarousel images={IMAGES} showPlayPause={false} />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-4">
            <span className="text-xs uppercase tracking-widest text-emerald-500 font-medium">
              Featured Case Study
            </span>

            <Heading tag="h3" cn="text-2xl text-neutral-100 font-semibold">
              {CURRENT_ROLE.role} at {CURRENT_ROLE.company}
            </Heading>

            <div className="flex items-center gap-1.5 text-sm text-neutral-400">
              <Calendar size={14} />
              {CURRENT_ROLE.duration}
            </div>

            <Paragraph cn="text-neutral-300 leading-relaxed">
              Shipping real-time dashboards, live video calls, and map-based
              field tracking for a loan recovery platform used daily by
              operations teams where every feature has to hold up under real,
              messy, real-time data.
            </Paragraph>

            <div className="flex flex-wrap gap-2">
              {CURRENT_ROLE.tech.slice(0, 5).map((t, i) => (
                <Pills status="info" key={i}>
                  {t}
                </Pills>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                href="/experience/aptagrim"
                aria-label="Read the full Aptagrim case study"
                className="group"
              >
                <Button
                  size="sm"
                  rightIcon={
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  }
                >
                  Explore the Case Study
                </Button>
              </Link>

              <a
                href="https://demo-synctech.aptagrim.co/auth/signin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live SIGMA project"
              >
                <Button
                  variant="outline"
                  size="sm"
                  rightIcon={<Link2 size={14} />}
                  className="text-white!"
                >
                  Live Project
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default ExperienceSection;
