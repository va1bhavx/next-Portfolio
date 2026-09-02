import { AUTHOR_NAME } from "./common";

export interface LogLink {
  title: string;
  url: string;
  description?: string;
}

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
  links?: LogLink[];
  sections: {
    id: number;
    subheading: string;
    links?: LogLink[];
    content: {
      type: "text" | "image" | "quote" | "callout" | "code" | "link";
      value?: string;
      src?: string;
      alt?: string;
      title?: string;
      url?: string;
      description?: string;
    }[];
  }[];
}

export const Logs: LogsDetail[] = [
  {
    id: Math.floor(Math.random() * 9999),

    title: "Building Continuo: A New Tab for Continuing Work",

    description: [
      "A new browser tab is usually treated as an empty starting point. But for me, opening a new tab often meant losing the reason I opened it in the first place. Continuo started with a simple question: what if your New Tab could remind you what you came here to do?",
      "Continuo is a focused Chrome extension that replaces the default New Tab with a quiet personal workspace built around intention, focus sessions, and reflection. Instead of adding another productivity system to manage, the goal is to keep the user's current work visible and make it easier to return to it.",
      "Building Continuo became an exercise in deciding what belongs in a productivity product and, perhaps more importantly, what doesn't. The result is a feature-rich but intentionally personal workspace with focus sessions, history, statistics, tasks, scheduling, quick links, achievements, streaks, and customization  while keeping user data entirely local to the browser.",
    ],

    snippet:
      "The story behind Continuo a focused Chrome New Tab built to keep your current work visible, preserve your progress, and make it easier to continue.",

    slug: "building-continuo-a-new-tab-for-continuing-work",

    author: AUTHOR_NAME,

    date: "02 September, 2026",

    tag: "Product",

    coverImage: "/logs/cover/continuo.webp",

    sections: [
      {
        id: Math.floor(Math.random() * 9999),

        subheading: "The problem started with a new tab",

        content: [
          {
            type: "text",
            value:
              "Opening a new tab sounds like a simple action. Most of the time, it means you already know what you want to do next. But browsers also make it incredibly easy to lose that intention.",
          },
          {
            type: "text",
            value:
              "You open a tab to look something up, notice something else, open another tab, and eventually find yourself doing something completely unrelated to what you originally intended.",
          },
          {
            type: "text",
            value:
              "That small loss of context is what made me think differently about the New Tab page. Instead of using it as another place to display content, what if it could simply remind you what you were already trying to accomplish?",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "What Continuo is actually trying to do",

        content: [
          {
            type: "text",
            value:
              "Continuo is a Chrome extension that replaces the browser's default New Tab page with a focused personal workspace. The core idea is intentionally simple: define what you're working on, focus on it, and keep a record of what you accomplished.",
          },
          {
            type: "text",
            value:
              "The name Continuo comes from the idea of continuing rather than constantly restarting. The product isn't meant to tell you what you should work on. It starts with something you already know you want to do and keeps that intention visible.",
          },
          {
            type: "image",
            value:
              "The guiding idea behind the product is simple: Open. Remember. Continue.",
            src: "/projects/continuo/continuo-1.webp",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Why I didn't want another productivity dashboard",

        content: [
          {
            type: "text",
            value:
              "There are countless productivity applications that can manage tasks, projects, calendars, habits, goals, and analytics. I didn't want Continuo to become another system that requires constant management before you can actually start working.",
          },
          {
            type: "text",
            value:
              "The product is designed around a much smaller interaction. You define your current intention, start a focus session, and work. When you're finished, you can record what you accomplished and move on.",
          },
          {
            type: "text",
            value:
              "That doesn't mean Continuo has to be empty or limited. It has tasks, scheduling, statistics, achievements, streaks, quick links, and customization. The important distinction is that these features support the focus experience rather than becoming the experience itself.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Designing a quiet workspace",

        content: [
          {
            type: "text",
            value:
              "The visual direction of Continuo was intentionally different from the typical productivity application. I wanted the interface to feel personal, calm, and slightly atmospheric rather than looking like a traditional dashboard.",
          },
          {
            type: "text",
            value:
              "Custom wallpapers provide most of the personality, while the interface sits on top of them with enough contrast to keep the actual work visible. The clock, focus timer, links, and supporting controls are designed to stay present without constantly demanding attention.",
          },
          {
            type: "text",
            value:
              "The challenge was finding the balance between making the New Tab feel good to use and making sure the visual design never became another distraction.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Building the focus session system",

        content: [
          {
            type: "text",
            value:
              "The central interaction in Continuo is the focus session. A user starts by defining an intention, then starts a stopwatch that tracks how long they remain focused on it.",
          },
          {
            type: "text",
            value:
              "The session can be paused, resumed, completed, or stopped. When it ends, Continuo gives the user the option to record what they accomplished before saving the session to History.",
          },
          {
            type: "text",
            value:
              "One of the more important engineering decisions was making sessions persistent. If the browser is reloaded or restarted while a session is active, Continuo can recover the session and calculate the elapsed time rather than simply losing the state.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Keeping the browser in sync",

        content: [
          {
            type: "text",
            value:
              "Because Continuo replaces the New Tab page, users can naturally have multiple instances of it open at the same time. That introduced an interesting requirement: an active focus session shouldn't exist independently in every tab.",
          },
          {
            type: "text",
            value:
              "Continuo uses Chrome's local storage and storage change events to synchronize active sessions, settings, and other persistent state between open New Tab instances.",
          },
          {
            type: "text",
            value:
              "This means starting or pausing a session in one tab can be reflected in another without requiring a backend or account system.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Local-first by design",

        content: [
          {
            type: "text",
            value:
              "Continuo currently keeps its data entirely inside the browser. Focus history, settings, quick links, tasks, schedules, achievements, wallpapers, and active sessions are persisted locally.",
          },
          {
            type: "text",
            value:
              "There is no account system and no external backend involved in the current version. The extension also makes no external network requests, with application assets such as fonts and wallpapers bundled locally.",
          },
          {
            type: "text",
            value:
              "This approach keeps the product simple and private, while also making the architecture more lightweight. The tradeoff is that the current version does not provide cross-device synchronization or cloud backups.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "From a timer to a record of work",

        content: [
          {
            type: "text",
            value:
              "A focus timer by itself is useful, but it doesn't tell you much about what you actually did. That's why Continuo records completed and stopped sessions in History along with their duration, timestamps, intention, and optional accomplishment notes.",
          },
          {
            type: "text",
            value:
              "History can be searched and filtered by status, timeframe, and duration. Statistics then turn that history into a simple view of total focus time, average session duration, completion rate, and recent focus trends.",
          },
          {
            type: "text",
            value:
              "The goal isn't to judge productivity with a single score. It's to make previous work visible so you can understand how you have been spending your time.",
          },

          {
            type: "image",
            value:
              "The goal isn't to judge productivity with a single score. It's to make previous work visible so you can understand how you have been spending your time.",
            src: "/projects/continuo/continuo-3.webp",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Why I added tasks, schedules, and achievements",

        content: [
          {
            type: "text",
            value:
              "As Continuo evolved, I wanted the New Tab to be useful beyond the active timer without turning it into a full task-management application. Tasks provide a lightweight checklist, while the daily schedule gives users a simple way to map out time blocks and receive reminders.",
          },
          {
            type: "text",
            value:
              "Achievements and streaks were added as optional layers of motivation. They are intentionally local and personal rather than competitive. There are no public leaderboards or social scores.",
          },
          {
            type: "text",
            value:
              "These features are there when someone wants them, but they shouldn't get in the way when someone simply wants to open a tab and start working.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "What building Continuo taught me",

        content: [
          {
            type: "text",
            value:
              "The biggest lesson from building Continuo has been that adding functionality is easy compared to deciding what functionality actually belongs in a product.",
          },
          {
            type: "text",
            value:
              "A feature can be useful on its own and still be wrong for the product. Every new idea has to be considered in the context of Continuo's central purpose: helping someone stay connected to the work they are already trying to do.",
          },
          {
            type: "text",
            value:
              "Building a Chrome extension also introduced a different set of engineering problems than a typical web application. Persistence, New Tab overrides, browser permissions, multi-tab synchronization, session recovery, and extension-specific behavior all became part of the product rather than separate technical concerns.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Where Continuo goes from here",

        content: [
          {
            type: "text",
            value:
              "V1 is intentionally a complete foundation rather than the final definition of Continuo. There are still limitations around areas such as cross-device synchronization, richer focus organization, and integrations.",
          },
          {
            type: "text",
            value:
              "But I don't want to solve those problems simply because they are technically possible. The next version should come from observing how people actually use Continuo and understanding where the current experience falls short.",
          },
          {
            type: "text",
            value:
              "For now, the goal is simple: build something that makes opening a new tab feel a little less like starting over.",
          },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),

        subheading: "Project Links",

        content: [
          {
            type: "link",
            title: "Chrome Web Store",
            url: "https://chromewebstore.google.com/detail/continuo/gdikbnakhneidanfgmkfgfddgdhnakcj",
            description:
              "Install Continuo directly from the official Chrome Web Store.",
          },
          {
            type: "link",
            title: "Continuo Website",
            url: "https://continuo-workspace.vercel.app/",
            description:
              "Explore the official live web application and workspace for Continuo.",
          },
        ],
      },
    ],
  },

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
