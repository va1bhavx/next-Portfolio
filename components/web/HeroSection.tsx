import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { Scroll } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <Container>
      <section className="flex gap-12 flex-col w-full">
        {/* Identity */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <Heading tag="h1" cn="text-4xl text-neutral-200 text-balance">
            Hi, I’m Vaibhav Kumar
          </Heading>

          <Heading tag="h2" cn="text-lg text-neutral-400 font-normal">
            Software Engineer
          </Heading>

          <Paragraph cn="text-neutral-300 leading-relaxed">
            Focused on building modern web interfaces with React and NextJS,
            with a growing interest in full-stack development.
          </Paragraph>
        </div>

        {/* Depth / Narrative */}
        <div className="max-w-3xl flex flex-col gap-6">
          <Heading
            tag="h3"
            cn="text-sm uppercase tracking-widest text-neutral-400"
          >
            How I work
          </Heading>

          <Paragraph cn="text-neutral-300 leading-relaxed">
            I prefer working close to the fundamentals clear UI structure,
            predictable state, and code that is easy to reason about. I care
            more about maintainability and correctness than shipping flashy
            features quickly.
          </Paragraph>

          <Paragraph cn="text-neutral-300 leading-relaxed">
            Most of my time goes into understanding problems deeply before
            reaching for abstractions. I try to keep systems simple, readable,
            and easy to extend over time.
          </Paragraph>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Link
            href="https://drive.google.com/file/d/1dPULV_REG7IS-1Ouensb18mnr-0WaEyH/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Vaibhav Kumar's resume PDF"
          >
            <Button rightIcon={<Scroll size={14} />} size="md">
              Resume
            </Button>
          </Link>
        </div>
      </section>
    </Container>
  );
};

export default HeroSection;
