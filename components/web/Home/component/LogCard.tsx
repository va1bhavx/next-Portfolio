import Image from "next/image";
import Link from "next/link";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import { LogsDetail } from "@/helper/data/LogData";
import { Calendar, Clock } from "lucide-react";
import { getReadingTime } from "@/helper/utils/getReadingTime";

interface LogCardProps {
  log: LogsDetail;
}

const LogCard: React.FC<LogCardProps> = ({ log }) => {
  const { title, snippet, slug, date, tag, coverImage } = log;

  return (
    <article
      className="
        group relative flex flex-col gap-4
        bg-neutral-900/70
        border border-neutral-800
        p-5 rounded-lg
        transition-all duration-300
        hover:-translate-y-1
        hover:border-neutral-600
        hover:bg-neutral-900
        hover:shadow-[0_0_0_1px_rgba(255,255,255,0.04)]
        focus-within:border-neutral-600
      "
    >
      {/* Cover */}
      {coverImage && (
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src={coverImage}
            alt={title}
            width={500}
            height={250}
            className="
              object-cover w-full h-44
              transition-transform duration-500
              group-hover:scale-[1.03]
            "
          />

          {tag && (
            <span
              className="
                absolute top-3 left-3
                text-xs font-medium
                bg-neutral-900/80 backdrop-blur
                text-emerald-400
                px-2 py-1 rounded
                border border-neutral-700
                uppercase tracking-wide
              "
            >
              {tag}
            </span>
          )}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col gap-2">
        <Heading
          cn="text-lg text-neutral-100 font-medium group-hover:text-white transition"
          tag="h3"
        >
          {title}
        </Heading>

        <div className="flex items-center gap-3 text-xs text-neutral-400">
          <span className="flex items-center gap-1.5">
            <Calendar size={12} />
            {date}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Clock size={12} />
            {getReadingTime(log).text}
          </span>
          {!coverImage && tag && (
            <span className="uppercase tracking-wide text-emerald-500">
              {tag}
            </span>
          )}
        </div>
      </div>

      {/* Snippet */}
      <Paragraph cn="text-sm text-neutral-300 leading-relaxed">
        {snippet}
      </Paragraph>

      {/* CTA */}
      <div className="pt-2 mt-auto">
        <Link
          href={`/logs/${slug}`}
          className="
            inline-flex items-center gap-1
            text-sm text-neutral-400
            group-hover:text-emerald-500
            transition
            focus-visible:outline-none
            focus-visible:ring-2 focus-visible:ring-neutral-600
            rounded
          "
          aria-label={`Read log ${title}`}
        >
          Read log
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
};

export default LogCard;
