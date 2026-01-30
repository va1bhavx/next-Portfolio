"use client";

import Paragraph from "@/components/ui/Paragraph";
import LogsListingCard from "./component/LogsListingCard";
import { useLogContext } from "@/context/LogContext";
import { FileSearch } from "lucide-react";

function LogsListing() {
  const { logs } = useLogContext();

  if (!logs.length) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-6">
        <div className=" max-w-md w-full">
          <FileSearch size={40} className="mx-auto mb-4 text-neutral-500" />

          <h2 className="text-xl font-semibold text-neutral-200 mb-2">
            No logs found
          </h2>

          <p className="text-neutral-500 text-sm leading-relaxed">
            We couldn’t find any logs matching your search. Try a different
            keyword or clear the search to see all logs.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col gap-12">
        {logs.map((log) => (
          <LogsListingCard
            key={log.id}
            date={log.date}
            description={log.snippet}
            slug={log.slug}
            author={log.author}
            title={log.title}
          />
        ))}

        <Paragraph cn="text-center text-xs text-balance text-neutral-600">
          You have reached the end of the list :)
        </Paragraph>
      </div>
    </div>
  );
}

export default LogsListing;
