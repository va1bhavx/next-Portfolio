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
      <section className="flex flex-col gap-10">
        <Heading
          tag="h2"
          cn="text-sm uppercase tracking-widest text-neutral-400"
        >
          How I can help
        </Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {CAPABILITIES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div key={idx} className="flex flex-col gap-4">
                <Icon
                  size={20}
                  className="text-neutral-400"
                  aria-hidden="true"
                />

                <Heading tag="h3" cn="text-lg text-neutral-200 font-normal">
                  {item.title}
                </Heading>

                <Paragraph cn="text-neutral-400 leading-relaxed">
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
