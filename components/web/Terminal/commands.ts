import { PROJECTS } from "@/helper/data/ProjectData";
import { EXPERIENCE } from "@/helper/data/ExperienceData";
import { Logs } from "@/helper/data/LogData";
import { MOTTOS, CURRENTLY_EXPLORING } from "@/helper/data/AboutData";
import { SOCIALS } from "@/components/ui/SocialComponent";

export interface Router {
  push: (href: string) => void;
}

interface Command {
  name: string;
  description: string;
  run: (args: string[], router: Router) => string[];
}

const RESUME_URL =
  "https://drive.google.com/file/d/1dPULV_REG7IS-1Ouensb18mnr-0WaEyH/view?usp=drive_link";

const HIDDEN_INPUT = "why do we fall";
const HIDDEN_OUTPUT = [
  "So we can learn to pick ourselves up.",
  "",
  "— Bruce Wayne, Batman Begins",
];

const normalize = (str: string) => str.toLowerCase().trim().replace(/[^a-z0-9]+/g, "");

const SOCIAL_ALIASES: Record<string, string> = {
  twitter: "twitterx",
  x: "twitterx",
  linkedin: "linkedin",
  github: "github",
  medium: "medium",
  hashnode: "hashnode",
  devto: "devto",
};

const matchSocial = (query: string) => {
  const q = normalize(query);
  const aliased = SOCIAL_ALIASES[q];
  return SOCIALS.find(
    (s) => normalize(s.name) === (aliased ?? q) || normalize(s.name).includes(q),
  );
};

const matchProject = (query: string) => {
  const q = normalize(query);
  return PROJECTS.find(
    (p) => normalize(p.slug) === q || normalize(p.title).includes(q),
  );
};

const matchExperience = (query: string) => {
  const q = normalize(query);
  return EXPERIENCE.find(
    (e) => normalize(e.slug) === q || normalize(e.company).includes(q),
  );
};

const matchLog = (query: string) => {
  const q = normalize(query);
  return Logs.find(
    (l) => normalize(l.slug) === q || normalize(l.title).includes(q),
  );
};

const PAGES: Record<string, string> = {
  home: "/",
  about: "/about",
  projects: "/projects",
  experience: "/experience",
  logs: "/logs",
};

export const COMMANDS: Command[] = [
  {
    name: "help",
    description: "list all available commands",
    run: () => [
      "available commands:",
      ...COMMANDS.map((c) => `  ${c.name.padEnd(10)} — ${c.description}`),
    ],
  },
  {
    name: "whoami",
    description: "who is this, anyway",
    run: () => [
      "vaibhav-kumar — Software Engineer",
      "Building things one commit at a time. Type 'open about' for the full story.",
    ],
  },
  {
    name: "stack",
    description: "what I'm currently exploring",
    run: () => ["currently exploring:", ...CURRENTLY_EXPLORING.map((t) => `  • ${t}`)],
  },
  {
    name: "quote",
    description: "a random line I live by",
    run: () => [`"${MOTTOS[Math.floor(Math.random() * MOTTOS.length)]}"`],
  },
  {
    name: "projects",
    description: "list all projects",
    run: () => [
      "projects:",
      ...PROJECTS.map((p) => `  ${p.title} — open ${p.slug}`),
    ],
  },
  {
    name: "experience",
    description: "list work experience",
    run: () => [
      "experience:",
      ...EXPERIENCE.map((e) => `  ${e.role} @ ${e.company} — open ${e.slug}`),
    ],
  },
  {
    name: "logs",
    description: "list recent logs",
    run: () => [
      "logs:",
      ...Logs.slice(0, 5).map((l) => `  ${l.title} — open ${l.slug}`),
    ],
  },
  {
    name: "contact",
    description: "social links",
    run: () => ["find me here:", ...SOCIALS.map((s) => `  ${s.name}: ${s.url}`)],
  },
  {
    name: "socials",
    description: "alias for contact",
    run: () => ["find me here:", ...SOCIALS.map((s) => `  ${s.name}: ${s.url}`)],
  },
  {
    name: "resume",
    description: "open my resume",
    run: () => {
      if (typeof window !== "undefined")
        window.open(RESUME_URL, "_blank", "noopener,noreferrer");
      return ["opening resume…"];
    },
  },
  {
    name: "open",
    description: "open <page|project|company|log|social|resume>",
    run: (args, router) => {
      const query = args.join(" ").trim();
      if (!query) return ["usage: open <page|project|company|log|social|resume>"];

      const q = normalize(query);

      if (PAGES[q]) {
        router.push(PAGES[q]);
        return [`opening ${query}…`];
      }

      if (q === "resume") {
        if (typeof window !== "undefined")
          window.open(RESUME_URL, "_blank", "noopener,noreferrer");
        return ["opening resume…"];
      }

      const social = matchSocial(query);
      if (social) {
        if (typeof window !== "undefined")
          window.open(social.url, "_blank", "noopener,noreferrer");
        return [`opening ${social.name}…`];
      }

      const project = matchProject(query);
      if (project) {
        router.push(`/projects/${project.slug}`);
        return [`opening ${project.title}…`];
      }

      const exp = matchExperience(query);
      if (exp) {
        router.push(`/experience/${exp.slug}`);
        return [`opening ${exp.role} @ ${exp.company}…`];
      }

      const log = matchLog(query);
      if (log) {
        router.push(`/logs/${log.slug}`);
        return [`opening ${log.title}…`];
      }

      return [
        `no match for '${query}'`,
        "try 'projects', 'experience', 'logs', or 'open github'",
      ];
    },
  },
  {
    name: "sudo make chai",
    description: "don't try this",
    run: () => [
      "sudo: permission granted (obviously)",
      "☕ turning chai into React code…",
    ],
  },
];

export const runCommand = (input: string, router: Router): string[] => {
  const trimmed = input.trim();
  if (!trimmed) return [];

  if (normalize(trimmed) === normalize(HIDDEN_INPUT)) return HIDDEN_OUTPUT;

  const lower = trimmed.toLowerCase();
  const cmd = COMMANDS.find((c) => c.name === lower);
  if (cmd) return cmd.run([], router);

  const [first, ...rest] = trimmed.split(/\s+/);
  const named = COMMANDS.find((c) => c.name === first.toLowerCase());
  if (named) return named.run(rest, router);

  return [`command not found: ${trimmed}`, "type 'help' to see available commands"];
};
