import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const BackButton = ({
  title,
  url,
  label,
}: {
  title: string;
  url: string;
  label?: string;
}) => {
  return (
    <div className="mb-4 max-w-6xl mx-auto w-full">
      <Link
        href={url}
        className="inline-flex items-center gap-2   transition-all text-neutral-300 body"
        aria-label={label}
      >
        <ArrowLeft className="w-4 h-4" />
        {title}
      </Link>
    </div>
  );
};

export default BackButton;
