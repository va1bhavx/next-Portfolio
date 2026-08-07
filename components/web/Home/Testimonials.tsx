import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    appreciation:
      "Working with Vaibhav was seamless. He quickly understood requirements and delivered a scalable, clean frontend with great attention to detail.",
    user: {
      name: "Altaf Hassan",
      designation: "CEO",
      company: "Tricky World",
    },
    size: "lg",
  },
  {
    appreciation:
      "Vaibhav combines creativity and technical expertise. His reusable UI components saved our team significant development time.",
    user: {
      name: "Kulasekhar Reddy",
      designation: "Lead Designer",
      company: "BusyBrains",
    },
    size: "sm",
  },
  {
    appreciation:
      "Vaibhav's frontend code is genuinely easy to build on top of. Whenever I picked up a module he'd worked on, the structure just made sense.",
    user: {
      name: "Mohit Kuril",
      designation: "Frontend Developer",
      company: "PetEye",
    },
    size: "sm",
  },
  {
    appreciation:
      "Testing Vaibhav's features is refreshingly uneventful edge cases are handled before QA even gets to them. He treats a bug report as useful signal, not a critique.",
    user: {
      name: "Suraj Avadutha",
      designation: "QA Automation Engineer",
      company: "Aptagrim",
    },
    size: "sm",
  },
  {
    appreciation:
      "Vaibhav is the kind of engineer you can hand an ambiguous requirement to and trust he'll ask the right questions first. His ownership on SIGMA has directly sped up how fast we ship.",
    user: {
      name: "Rohith Baggam",
      designation: "Technical Lead",
      company: "Aptagrim",
    },
    size: "lg",
  },
  {
    appreciation:
      "We brought Vaibhav in expecting a developer and got someone who genuinely cared about the outcome. Deadlines were met without corners being cut.",
    user: {
      name: "Shaker Ali",
      designation: "CEO",
      company: "Desingerify",
    },
    size: "sm",
  },
];

const SIZE_CN: Record<string, string> = {
  lg: "sm:col-span-2 lg:col-span-2",
  sm: "",
};

export default function Testimonials() {
  return (
    <Container cn="items-start">
      <section className="flex flex-col gap-6 w-full">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 w-full auto-rows-fr [grid-auto-flow:dense]">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.user.name}
              className={`
                group flex flex-col gap-4
                bg-neutral-900/60
                border border-neutral-800
                rounded-lg
                transition-all duration-300
                hover:-translate-y-1
                hover:border-neutral-600
                hover:bg-neutral-900
                ${t.size === "lg" ? "p-7 justify-center" : "p-6"}
                ${SIZE_CN[t.size]}
              `}
            >
              <Quote
                size={t.size === "lg" ? 26 : 20}
                className="text-emerald-500/70 shrink-0"
                aria-hidden="true"
              />

              <Paragraph
                cn={`text-neutral-300 leading-relaxed text-balance ${
                  t.size === "lg" ? "text-base" : "text-sm"
                }`}
              >
                {t.appreciation}
              </Paragraph>

              <div className="flex items-center gap-3 pt-2 mt-auto">
                <span
                  aria-hidden="true"
                  className="flex items-center justify-center shrink-0 w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium"
                >
                  {t.user.name.charAt(0)}
                </span>

                <div>
                  <Paragraph cn="text-neutral-200 text-sm">
                    {t.user.name}
                  </Paragraph>
                  <Paragraph cn="text-neutral-400 text-xs">
                    {t.user.designation},{" "}
                    <span className="text-emerald-500">{t.user.company}</span>
                  </Paragraph>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
