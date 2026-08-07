import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Paragraph from "../../ui/Paragraph";
import { Layout, Blocks, Plug, Gauge } from "lucide-react";

const CAPABILITIES = [
  {
    title: "Frontend Engineering",
    desc: "Building clean, responsive, and accessible user interfaces using React and NextJS. Focused on clarity, usability, and long-term maintainability rather than quick hacks.",
    icon: Layout,
  },
  {
    title: "UI Architecture",
    desc: "Structuring frontend codebases with predictable state, reusable components, and clear separation of concerns so features are easy to extend over time.",
    icon: Blocks,
  },
  {
    title: "API Integration & Data Flow",
    desc: "Integrating frontend applications with APIs, handling async data, loading states, and edge cases in a way that keeps the UI stable and understandable.",
    icon: Plug,
  },
  {
    title: "Performance & Reliability",
    desc: "Optimizing render behavior, managing client-side performance, and writing defensive code that behaves well under real-world conditions.",
    icon: Gauge,
  },
];

const HowICanHelp = () => {
  return (
    <Container>
      <section className="flex flex-col gap-10 w-full">
        <Heading
          tag="h2"
          cn="text-lg uppercase tracking-widest text-neutral-400"
        >
          How I can help
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="
                  group relative flex flex-col gap-4
                  bg-neutral-900/70
                  border border-neutral-800
                  p-6 rounded-lg
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-neutral-600
                  hover:bg-neutral-900
                  hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
                "
              >
                <span
                  className="
                    inline-flex items-center justify-center
                    w-10 h-10 rounded-lg
                    bg-emerald-500/10 border border-emerald-500/20
                    text-emerald-500
                    transition-colors duration-300
                    group-hover:bg-emerald-500/15
                  "
                >
                  <Icon size={20} aria-hidden="true" />
                </span>

                <Heading
                  tag="h3"
                  cn="text-lg text-neutral-100 font-medium group-hover:text-white transition"
                >
                  {item.title}
                </Heading>

                <Paragraph cn="text-sm text-neutral-400 leading-relaxed">
                  {item.desc}
                </Paragraph>
              </div>
            );
          })}
        </div>
      </section>
    </Container>
  );
};

export default HowICanHelp;
