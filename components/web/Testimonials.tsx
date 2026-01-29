"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "../ui/Button";

const TESTIMONIALS = [
  {
    appreciation:
      "Working with Vaibhav was seamless. He quickly understood requirements and delivered a scalable, clean frontend with great attention to detail.",
    user: {
      name: "Altaf Hassan",
      designation: "CEO",
      company: "Tricky World",
    },
  },
  {
    appreciation:
      "Vaibhav combines creativity and technical expertise. His reusable UI components saved our team significant development time.",
    user: {
      name: "Kulasekhar Reddy",
      designation: "Lead Designer",
      company: "BusyBrains",
    },
  },
  {
    appreciation:
      "Reliable and proactive, Vaibhav consistently delivered complex features efficiently and improved overall team workflow.",
    user: {
      name: "Mohit Kuril",
      designation: "Frontend Developer",
      company: "PetEye",
    },
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const current = TESTIMONIALS[active];

  const prev = () =>
    setActive((i) => (i === 0 ? TESTIMONIALS.length - 1 : i - 1));

  const next = () =>
    setActive((i) => (i === TESTIMONIALS.length - 1 ? 0 : i + 1));

  return (
    <Container cn="items-start ">
      <section className="flex flex-col gap-6 w-full ">
        <Heading
          tag="h2"
          cn="text-lg uppercase tracking-widest text-neutral-400"
        >
          Testimonials
        </Heading>
        <Paragraph cn="text-neutral-300 leading-relaxed text-sm">
          Experiences shared by teammates and clients highlighting my approach
          to collaboration, ownership, and product quality.
        </Paragraph>

        <div className="border border-neutral-800 bg-neutral-900/60 p-6 flex flex-col gap-4 rounded-lg">
          <Paragraph cn="text-neutral-300 leading-relaxed text-balance">
            “{current.appreciation}”
          </Paragraph>

          <div className="flex items-center justify-between">
            <div>
              <Paragraph cn="text-neutral-200 text-sm">
                {current.user.name}
              </Paragraph>
              <Paragraph cn="text-neutral-400 text-xs">
                {current.user.designation}, {current.user.company}
              </Paragraph>
            </div>

            <div className="flex gap-3">
              <Button
                onClick={prev}
                className="text-neutral-400 hover:text-white transition"
                variant="ghost"
              >
                <ChevronLeft size={20} />
              </Button>

              <Button
                onClick={next}
                className="text-neutral-400 hover:text-white transition"
                variant="ghost"
              >
                <ChevronRight size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
