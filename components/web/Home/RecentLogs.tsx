import Container from "../../ui/Container";
import Heading from "../../ui/Heading";
import Link from "next/link";
import { Logs } from "@/helper/data/LogData";
import LogCard from "./component/LogCard";

const RecentLogs = () => {
  if (!Logs.length) return null;

  return (
    <Container cn="items-start">
      <section className="flex flex-col gap-10 w-full">
        {/* Section Header */}
        <div className="flex items-end justify-between w-full">
          <Heading
            tag="h2"
            cn="text-lg uppercase tracking-widest text-neutral-400"
          >
            Recent Logs
          </Heading>

          <Link
            href="/logs"
            aria-label="View all development logs by Vaibhav Kumar"
            className="text-sm text-neutral-400 hover:text-neutral-200 transition"
          >
            View all logs →
          </Link>
        </div>

        {/* Logs Grid */}
        <div className="grid md:grid-cols-2 gap-8 w-full">
          {Logs.slice(0, 2).map((log) => (
            <LogCard key={log.id} log={log} />
          ))}
        </div>
      </section>
    </Container>
  );
};

export default RecentLogs;
