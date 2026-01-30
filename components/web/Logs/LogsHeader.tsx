import { Search } from "lucide-react";

function LogsHeader() {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full ">
      <div className="relative w-full md:max-w-md">
        <Search
          size={16}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
        />

        <input
          placeholder="Search logs..."
          className="
            w-full
            bg-neutral-900
            border border-neutral-800
            text-neutral-300
            placeholder:text-neutral-600
            px-9 py-2.5
            outline-none
            transition
            focus:border-neutral-600
            rounded-lg
          "
        />
      </div>

      <div className="w-full md:w-auto">
        <select
          className="
            w-full md:w-56
            bg-neutral-900
            border border-neutral-800
            text-neutral-300
            px-3 py-2.5
            outline-none
            transition
            focus:border-neutral-600
            rounded-lg
          "
        >
          <option>All Topics</option>
          <option>React</option>
          <option>Next.js</option>
          <option>Frontend Architecture</option>
          <option>Performance</option>
          <option>Career Logs</option>
        </select>
      </div>
    </div>
  );
}

export default LogsHeader;
