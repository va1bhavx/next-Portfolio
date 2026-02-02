import { AUTHOR_NAME } from "./common";

export interface LogsDetail {
  id: number;
  title: string;
  description: string[];
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
      type: "text" | "image" | "quote" | "callout" | "code";
      value?: string;
      src?: string;
      alt?: string;
    }[];
  }[];
}

export const Logs: LogsDetail[] = [
  {
    id: Math.floor(Math.random() * 9999),

    title: "SEO & Metadata for Developers",

    description: [
      "Search visibility is not just for marketing websites  it matters just as much for personal portfolios, blogs, and side projects. This log breaks down SEO, metadata, and indexing from a developer’s perspective, without buzzwords or gimmicks.",
      "Most developers either skip SEO entirely or treat it as something to be added later. This log explains why that approach limits your work’s visibility, what actually matters for search engines, and how to implement SEO correctly in modern web applications.",
      "We’ll walk through how search engines read your site, why metadata and structured data matter, and how you can make your portfolio or app discoverable using clean, maintainable techniques  especially with frameworks like Next.js.",
    ],

    snippet:
      "A developer-first guide to SEO, metadata, and indexing  focused on clarity, structure, and real-world implementation instead of hacks.",

    slug: "seo-metadata-for-developers",

    author: AUTHOR_NAME,

    date: "1 February, 2026",

    tag: "SEO",

    coverImage: "/logs/cover/seo_log.webp",

    sections: [
      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Why SEO matters even for personal projects",

        content: [
          {
            type: "text",
            value:
              "If you’ve ever built a portfolio, side project, or blog and wondered why it doesn’t show up on Google, the answer is usually not design or code quality  it’s discoverability.",
          },
          {
            type: "text",
            value:
              "Search engines don’t understand your UI the way humans do. They rely on structure, metadata, and signals to understand what a page is about. Without those signals, even great work can remain invisible.",
          },
          {
            type: "text",
            value:
              "SEO for developers is not about gaming algorithms. It’s about making your work understandable to machines so it can reach real people.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "What you’ll learn from this log",

        content: [
          {
            type: "text",
            value:
              "By the end of this log, you’ll understand what SEO actually means in practical terms for developers  beyond keywords and rankings.",
          },
          {
            type: "text",
            value:
              "You’ll learn how metadata works, how Open Graph and Twitter cards affect link previews, why sitemaps and robots.txt are important, and how structured data helps search engines understand your content.",
          },
          {
            type: "text",
            value:
              "Most importantly, you’ll learn how to approach SEO as part of your application architecture instead of an afterthought.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "How search engines actually read your site",

        content: [
          {
            type: "text",
            value:
              "Search engines don’t see animations, layouts, or components. They read HTML, metadata, links, and structured information.",
          },
          {
            type: "text",
            value:
              "Things like page titles, meta descriptions, canonical URLs, internal links, and structured data form the foundation of how a page is indexed and ranked.",
          },
          {
            type: "text",
            value:
              "Modern frameworks like Next.js make it easier to implement these correctly  but only if you intentionally design for them.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Metadata, Open Graph, and social previews",

        content: [
          {
            type: "text",
            value:
              "Metadata is more than just SEO. It controls how your site appears in browser tabs, bookmarks, and social media previews.",
          },
          {
            type: "text",
            value:
              "Open Graph and Twitter metadata define how your links look when shared on platforms like LinkedIn, WhatsApp, Slack, or Twitter. Without them, your links often look broken or incomplete.",
          },
          {
            type: "text",
            value:
              "A well-defined preview makes your work look intentional, professional, and trustworthy  especially important for portfolios.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Sitemaps, robots.txt, and indexing",

        content: [
          {
            type: "text",
            value:
              "A sitemap tells search engines which pages exist on your website, including dynamic routes that may not be discovered automatically.",
          },
          {
            type: "text",
            value:
              "The robots.txt file defines what search engines are allowed to crawl and points them to your sitemap.",
          },
          {
            type: "text",
            value:
              "Together, these files ensure your site is crawled efficiently and that important pages are indexed instead of being ignored.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Structured data and why it’s underrated",

        content: [
          {
            type: "text",
            value:
              "Structured data (Schema.org) allows you to explicitly tell search engines what your content represents  a person, a project, a blog post, or a portfolio.",
          },
          {
            type: "text",
            value:
              "This doesn’t guarantee rankings, but it significantly improves understanding, which is the foundation of discoverability.",
          },
          {
            type: "text",
            value:
              "For developers, structured data is one of the cleanest ways to communicate intent to search engines without hacks or tricks.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Why I’m documenting this publicly",

        content: [
          {
            type: "text",
            value:
              "Writing these logs helps me think clearly, document decisions, and build a personal knowledge base I can revisit later.",
          },
          {
            type: "text",
            value:
              "At the same time, these logs might help other developers who are building portfolios, learning frontend engineering, or working on real-world applications.",
          },
          {
            type: "text",
            value:
              "This space is less about perfection and more about progress  each log represents a step forward in building better, more thoughtful software.",
          },

          {
            type: "text",
            value:
              "There’s no code in this article by design. I want this to be a space for thinking and learning, not another copy-paste guide for readers and for myself.",
          },
        ],
      },
    ],
  },
  {
    id: Math.floor(Math.random() * 9999),

    title: "Welcome, Why This Log Exists",

    description: [
      "An introduction to my developer logs where I document real-world frontend engineering experiences, project learnings, architecture decisions, performance improvements, and product-building insights.",
    ],

    snippet:
      "A space where I document projects, engineering lessons, debugging stories, and real development experiences while building production applications.",

    slug: "welcome-to-logs",

    author: AUTHOR_NAME,

    date: "30 January, 2026",

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
