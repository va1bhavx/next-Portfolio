import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Pills from "@/components/ui/Pills";
import Button from "@/components/ui/Button";
import SocialComponent from "@/components/ui/SocialComponent";
import RotatingQuote from "@/components/web/About/RotatingQuote";
import TerminalIntro from "@/components/web/About/TerminalIntro";
import JourneyTimeline from "@/components/web/About/JourneyTimeline";
import QuirkCards from "@/components/web/About/QuirkCards";
import {
  EDUCATION,
  LOCATION,
  BEYOND_CODE,
  CURRENTLY_EXPLORING,
} from "@/helper/data/AboutData";
import { Scroll, MapPin, GraduationCap } from "lucide-react";

const RESUME_URL =
  "https://drive.google.com/file/d/1dPULV_REG7IS-1Ouensb18mnr-0WaEyH/view?usp=drive_link";

const SECTIONS = [
  { id: "story", label: "Story" },
  { id: "journey", label: "Journey" },
  { id: "beyond-the-code", label: "Beyond the Code" },
  { id: "quirks", label: "Quirks" },
  { id: "currently-exploring", label: "Currently Exploring" },
];

const AboutPage = () => {
  return (
    <Container cn="items-start pb-24">
      <article className="w-full flex flex-col gap-14">
        {/* Hero */}
        <header className="flex flex-col sm:flex-row gap-6 sm:items-center">
          <div className="w-24 h-24 sm:w-28 sm:h-28 shrink-0 rounded-2xl overflow-hidden border border-neutral-800">
            <Image
              src="/about-me-img.png"
              alt="Vaibhav Kumar"
              width={280}
              height={280}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-2">
            <Heading tag="h1" cn="text-3xl md:text-4xl text-neutral-100">
              Vaibhav Kumar
            </Heading>
            <Paragraph cn="text-neutral-400">
              Software Engineer, building things one commit at a time.
            </Paragraph>
            <RotatingQuote />
          </div>
        </header>

        {/* Terminal intro */}
        <TerminalIntro />

        {/* Sidebar + content */}
        <div className="flex flex-col lg:flex-row gap-10 w-full items-start">
          <aside className="w-full lg:w-[200px] lg:shrink-0 flex flex-col gap-6 lg:sticky lg:top-10 lg:self-start">
            <div className="flex flex-col gap-3">
              <span className="text-[11px] uppercase tracking-wide text-neutral-500">
                On this page
              </span>
              <ul className="flex flex-col gap-2.5">
                {SECTIONS.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="text-sm text-neutral-400 hover:text-neutral-100 transition-colors"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-neutral-800" />

            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-neutral-500">
                  <GraduationCap size={12} />
                  Education
                </span>
                <span className="text-sm text-neutral-300">
                  {EDUCATION.degree}
                </span>
                <span className="text-xs text-neutral-500">
                  {EDUCATION.institution} · {EDUCATION.duration}
                </span>
              </div>

              <div className="flex flex-col gap-1">
                <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-wide text-neutral-500">
                  <MapPin size={12} />
                  Location
                </span>
                <span className="text-sm text-neutral-300">
                  {LOCATION.current}
                </span>
                <span className="text-xs text-neutral-500">
                  Originally from {LOCATION.origin}
                </span>
              </div>
            </div>

            <div className="border-t border-neutral-800" />

            <Link href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button rightIcon={<Scroll size={14} />} size="sm" cn="w-full">
                Check Resume
              </Button>
            </Link>
          </aside>

          <div className="flex-1 min-w-0 flex flex-col gap-14">
            {/* Story */}
            <section id="story" className="flex flex-col gap-4 scroll-mt-24">
              <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                Story
              </Heading>
              <Paragraph cn="text-lg text-neutral-400 leading-relaxed">
                I didn&apos;t get into programming because I always dreamed of
                writing code I got into it because I enjoyed building things.
                During college, I started exploring web development and was
                fascinated by how a few lines of HTML, CSS, and JavaScript could
                turn ideas into something people could actually use. That
                curiosity quickly turned into an obsession with React, where I
                found the perfect mix of logic, creativity, and problem-solving.
                Since then, I&apos;ve been focused on creating products that
                solve real problems rather than just completing tutorials.
              </Paragraph>
            </section>

            {/* Journey */}
            <section id="journey" className="flex flex-col gap-6 scroll-mt-24">
              <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                Journey
              </Heading>
              <JourneyTimeline />
            </section>

            {/* Beyond the code */}
            <section
              id="beyond-the-code"
              className="flex flex-col gap-6 scroll-mt-24"
            >
              <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                Beyond the Code
              </Heading>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {BEYOND_CODE.map((item) => (
                  <div
                    key={item.label}
                    className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-neutral-900/50 border border-neutral-800 text-center"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <span className="text-xs text-neutral-300">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Quirks */}
            <section id="quirks" className="flex flex-col gap-6 scroll-mt-24">
              <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                Quirks
              </Heading>
              <Paragraph cn="text-sm text-neutral-500">
                Tap a card to see what it means.
              </Paragraph>
              <QuirkCards />
            </section>

            {/* Currently exploring */}
            <section
              id="currently-exploring"
              className="flex flex-col gap-4 scroll-mt-24"
            >
              <Heading tag="h2" cn="text-xl text-neutral-100 font-bold">
                Currently Exploring
              </Heading>
              <Paragraph cn="text-sm text-neutral-400">
                Frontend developer transitioning into full-stack engineering
                here&apos;s what&apos;s on the workbench right now.
              </Paragraph>
              <div className="flex flex-wrap gap-2">
                {CURRENTLY_EXPLORING.map((tag, i) => (
                  <Pills status="info" key={i}>
                    {tag}
                  </Pills>
                ))}
              </div>
            </section>

            {/* Closing CTA */}
            <section className="flex flex-col gap-4 pt-6 border-t border-neutral-800">
              <Paragraph cn="text-sm text-neutral-400">
                Always up for a conversation about products, frontend
                architecture, or the next side project.
              </Paragraph>
              <SocialComponent />
            </section>
          </div>
        </div>
      </article>
    </Container>
  );
};

export default AboutPage;
