import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

function LogsListingCard() {
  return (
    <article className="w-full border-b border-neutral-800 pb-6 group">
      <div className="mb-3 flex flex-col gap-1">
        <Link href="/logs/welcome">
          <Heading
            tag="h2"
            cn="text-xl md:text-2xl font-semibold text-neutral-100 group-hover:text-white transition"
          >
            Welcome — Why This Log Exists
          </Heading>
        </Link>

        <Paragraph cn="text-xs text-neutral-500">
          January 30, 2026 • 3 min read
        </Paragraph>
      </div>

      <Paragraph cn="text-neutral-400 leading-relaxed max-w-2xl">
        An introduction to this space what I’ll be documenting, the journey
        behind my projects, lessons learned while building products, and
        insights from real-world development.
      </Paragraph>

      <Link
        href="/logs/welcome"
        className="inline-block mt-3 text-sm text-neutral-400 hover:text-white transition"
      >
        Read log →
      </Link>
    </article>
  );
}

export default LogsListingCard;
