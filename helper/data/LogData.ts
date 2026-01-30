import { AUTHOR_NAME } from "./common";

export interface LogsDetail {
  id: number;
  title: string;
  description: string;
  snippet: string;
  slug: string;
  author: string;
  date: string;
  tag: string;
  coverImage?: string;
  sections: {
    id: number;
    subheading: string;
    content: {
      type: string;
      value: string;
    }[];
  }[];
}

export const Logs: LogsDetail[] = [
  {
    id: Math.floor(Math.random() * 9999),

    title: "Welcome, Why This Log Exists",

    description:
      "An introduction to my developer logs where I document real-world frontend engineering experiences, project learnings, architecture decisions, performance improvements, and product-building insights.",

    snippet:
      "A space where I document projects, engineering lessons, debugging stories, and real development experiences while building production applications.",

    slug: "welcome-to-logs",

    author: AUTHOR_NAME,

    date: "30 January 2026",

    tag: "Personal",

    coverImage: "/logs/cover/welcome-to-logs.webp",

    sections: [
      {
        id: Math.floor(Math.random() * 9999),

        subheading: "What is this space?",

        content: [
          {
            type: "text",
            value:
              "This portfolio showcases my work, but I also wanted a place to document my journey as a frontend developer beyond finished projects. These logs serve as a living record of what I’m building, learning, and experimenting with in real production environments.",
          },
          {
            type: "text",
            value:
              "Instead of publishing only polished case studies, this section focuses on real engineering experiences decisions made during development, performance challenges, architectural trade-offs, and lessons learned while shipping applications used by real users.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "What you’ll find here",

        content: [
          {
            type: "text",
            value:
              "Here, I’ll share development logs from real projects, breakdowns of complex features, performance optimization stories, UI and UX decisions, debugging journeys, and experiments with new tools or frameworks.",
          },
          {
            type: "text",
            value:
              "Some posts will dive deep into technical implementations, while others will capture quick learnings and observations gathered while building scalable applications.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Why I’m doing this",

        content: [
          {
            type: "text",
            value:
              "Writing helps me clarify ideas, document solutions, and build a knowledge base I can revisit later. At the same time, these notes might help developers facing similar challenges.",
          },
          {
            type: "text",
            value:
              "If you're building products, learning frontend engineering, or exploring real-world application development, these logs aim to provide practical and honest insights from ongoing work.",
          },
          {
            type: "text",
            value:
              "This space is less about perfection and more about continuous progress each log represents a small step forward in building better software.",
          },
        ],
      },
    ],
  },
];
