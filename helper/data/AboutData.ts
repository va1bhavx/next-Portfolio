export interface Quirk {
  emoji: string;
  label: string;
  detail: string;
}

export interface BeyondCodeItem {
  emoji: string;
  label: string;
}

export interface EducationInfo {
  degree: string;
  institution: string;
  duration: string;
}

export interface LocationInfo {
  current: string;
  origin: string;
}

export const MOTTOS: string[] = [
  "Hope is the light that lifts us out of darkness.",
  "Dreams save us. Dreams lift us up and transform us.",
  "It's not who I am underneath, but what I do that defines me.",
  "Why do we fall? So we can learn to pick ourselves up.",
  "Endure. Master. Become.",
  "There are no secrets about the world. Only hidden truths.",
  "The important thing isn't certainty. It's the willingness to keep looking.",
  "You have to get what you want your own way.",
  "Ambition is the only thing that matters.",
  "Every setback is another lesson.",
  "Mankind was born on Earth. It was never meant to die here.",
  "It ain't about how hard you hit. It's about how hard you can get hit and keep moving forward.",
  "The night is darkest just before the dawn.",
];

export const QUIRKS: Quirk[] = [
  {
    emoji: "☕",
    label: "Team Chai",
    detail: "Always. No exceptions, no negotiations.",
  },
  {
    emoji: "🌙",
    label: "Night owl",
    detail: "More of a night owl than an early bird best ideas show up late.",
  },
  {
    emoji: "🎧",
    label: "Music on, always",
    detail: "Something is almost always playing while I'm coding.",
  },
  {
    emoji: "💡",
    label: "Idea hoarder",
    detail:
      "I constantly jot down product ideas, even if I don't have time to build them immediately.",
  },
];

export const BEYOND_CODE: BeyondCodeItem[] = [
  { emoji: "🏏", label: "Watching cricket" },
  { emoji: "🚴", label: "Riding my bike" },
  { emoji: "🎧", label: "Listening to music" },
  { emoji: "✏️", label: "Sketching UI & product ideas" },
];

export const CURRENTLY_EXPLORING: string[] = [
  "Node.js & Express",
  "PostgreSQL",
  "MongoDB",
  "REST API architecture",
  "Authentication & authorization",
  "System design fundamentals",
  "Docker",
  "AI-assisted developer tooling",
  "Production-ready SaaS with Next.js",
];

export const EDUCATION: EducationInfo = {
  degree: "BCA (Bachelor of Computer Applications)",
  institution: "Anugrah Narayan College",
  duration: "2020 – 2023",
};

export const LOCATION: LocationInfo = {
  current: "Hyderabad, India",
  origin: "Patna, Bihar",
};
