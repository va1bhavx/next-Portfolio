import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

interface LogsListingCardProps {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
}

function LogsListingCard({
  date,
  description,
  slug,
  title,
  author,
}: LogsListingCardProps) {
  return (
    <article className="w-full border-b border-neutral-800 pb-6 group">
      <div className="mb-3 flex flex-col gap-2">
        <Link href={`/logs/${slug}`}>
          <Heading
            tag="h2"
            cn="text-xl md:text-2xl font-semibold text-neutral-100 group-hover:text-white transition hover:underline"
          >
            {title}
          </Heading>
        </Link>

        <Paragraph cn="text-xs text-neutral-500">
          {date} • {author}
        </Paragraph>
      </div>

      <Paragraph cn="text-neutral-400 leading-relaxed max-w-2xl">
        {description}
      </Paragraph>

      <Link
        href={`/logs/${slug}`}
        className="inline-block mt-3 text-sm text-neutral-400 hover:text-white transition"
      >
        Read log →
      </Link>
    </article>
  );
}

export default LogsListingCard;
