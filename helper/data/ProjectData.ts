export interface ProjectData {
  id: number;
  cover: string;
  title: string;

  /** First-glance content */
  snippet: string; // fallback text
  tagline?: string; // sharper 1-liner
  highlight?: string; // key differentiator

  /** Classification */
  type?:
    | "Web App"
    | "CLI Tool"
    | "Library"
    | "Dashboard"
    | "Experiment"
    | "Desktop Application"
    | "Chrome Extension";
  primaryTech?: string; // e.g. "TypeScript", "React"
  techStack?: string[];

  /** Status & visibility */
  status?: string; // human-readable
  statusVariant?: string;
  lastUpdated?: string; // "2025-01"

  /** Card micro-details */
  quickStats?: string[]; // 1–3 short points

  /** Routing */
  slug: string;

  /** Deep-dive content */
  description?: string;
  role?: string;
  features?: string[];
  featureCategories?: {
    category: string;
    items: string[];
  }[];
  challenges?: string[];
  outcomes?: string[];

  /** Links & media */
  github?: string;
  liveDemo?: string;
  images: string[];
}

export const PROJECTS: ProjectData[] = [
  {
    id: 8,
    cover: "/logs/cover/continuo.webp",
    title: "Continuo",
    snippet:
      "Continuo is a focused Chrome extension that transforms the New Tab into a personal workspace for staying focused, tracking work sessions, and continuing where you left off.",

    tagline: "Open. Remember. Continue.",
    highlight:
      "A distraction-free New Tab built around focus, session tracking, and personal productivity",

    type: "Chrome Extension",
    primaryTech: "React",
    statusVariant: "Launched",
    quickStats: ["Focus sessions", "Local-first storage", "Custom New Tab"],
    lastUpdated: "2026-08",
    slug: "continuo",

    description:
      "Continuo is a focused Chrome extension that replaces the browser's default New Tab page with a quiet, personal workspace designed to help users stay connected to what they're working on. Users can set their current work intention, start and manage focus sessions, record accomplishments, review their work through searchable history and statistics, and build consistent focus habits through streaks and achievements. Continuo also includes quick links, tasks, daily scheduling, customizable wallpapers, and configurable New Tab preferences, while keeping user data stored locally in the browser.",

    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Chrome Extension APIs",
      "Chrome Storage API",
      "Lucide React",
      "@dnd-kit",
      "Vitest",
      "Happy DOM",
    ],

    role: "Product Designer & Frontend Developer",
    status: "Launched",

    features: [
      "Replace the browser's default New Tab with a focused personal workspace",
      "Set a current work intention and start a focus session",
      "Track focus time with pause, resume, complete, and stop controls",
      "Recover active sessions after browser reloads or restarts",
      "Synchronize active sessions and settings across multiple open tabs",
      "Record optional accomplishment notes when a session ends",
      "Search and filter focus history by status, timeframe, and duration",
      "View focus statistics including total focus time, success rate, and average duration",
      "Track 7-day focus trends with visualizations",
      "Unlock 50 local achievements based on focus and product usage",
      "Maintain daily focus streaks",
      "Create, edit, delete, and reorder Quick Links with drag-and-drop",
      "Manage lightweight work tasks through the Tasks drawer",
      "Create daily schedule blocks with browser notifications",
      "Customize the New Tab with wallpapers and custom background URLs",
      "Configure clock, timer, tab-title, and completion sound preferences",
      "Keep all user data stored locally without external network requests",
    ],

    featureCategories: [
      {
        category: "Focus & Sessions",
        items: [
          "Intention Setting — Set a current work intention and start focused sessions with one click",
          "Timer Controls — Full pause, resume, complete, and stop controls with audio feedback",
          "Session Recovery — Automatic session restoration across browser reloads, restarts, or crashes",
          "Multi-Tab Sync — Real-time state and timer synchronization across all open browser tabs",
          "Accomplishment Notes — Optional notes prompt when completing sessions to document wins",
        ],
      },
      {
        category: "Habits & Analytics",
        items: [
          "Focus History — Search, filter, and inspect past sessions by status, timeframe, and duration",
          "Performance Stats — Real-time metrics including total focus hours, completion rate, and average session time",
          "7-Day Trends — Interactive visual charts mapping weekly focus patterns and productivity peaks",
          "50 Achievements — Unlockable local badges celebrating consistency, milestones, and usage habits",
          "Daily Streaks — Automated streak tracking to build disciplined daily focus momentum",
        ],
      },
      {
        category: "Workspace & Tools",
        items: [
          "Distraction-Free New Tab — Replaces default browser tab with a serene personal workspace",
          "Drag-and-Drop Quick Links — Reorder, group, and manage shortcut links with smooth physics",
          "Tasks Drawer — Lightweight task manager for capturing action items during sessions",
          "Daily Schedule Blocks — Time-blocking planner integrated with native browser notifications",
          "Wallpaper Customizer — Curated background library with custom external image URL support",
          "Personalized Preferences — Granular controls for clock style, completion sounds, and tab titles",
        ],
      },
      {
        category: "Local-First & Privacy",
        items: [
          "100% Local Storage — All data persists securely in the browser with zero external network requests",
        ],
      },
    ],

    challenges: [
      "Distraction-Free UX — Designing a rich New Tab workspace without adding visual clutter or cognitive overhead",
      "Session Persistence & Recovery — Ensuring timers survive unexpected browser crashes, force-quits, and page reloads",
      "Multi-Tab State Synchronization — Broadcasting active timer ticks and setting updates across multiple simultaneous tabs without race conditions",
      "Local-First Architecture — Building a fast, zero-latency storage system that keeps 100% of user data strictly inside the browser",
      "Dynamic Wallpaper Contrast — Maintaining pristine text legibility and UI contrast across diverse user wallpapers and lighting conditions",
      "Chrome Extension Lifecycle — Architecting background workers and storage listeners around Chrome's manifest V3 constraints",
    ],

    outcomes: [
      "Full Product Delivery — Designed, engineered, and published a complete productivity extension from initial concept to V1",
      "Intention-Driven New Tab — Replaced browser blank tabs with an intentional workspace centered around focused work",
      "Bulletproof Session Recovery — Implemented crash-resilient session tracking with sub-second reload recovery",
      "Cross-Tab State Engine — Built real-time multi-tab state sync using Chrome Storage event streams",
      "Analytics & Habit System — Engineered an offline 7-day trend visualization and 50-badge achievement engine",
      "Zero-Telemetry Privacy — Established a privacy-first local architecture with 0 third-party trackers or external requests",
    ],

    github: "",
    liveDemo:
      "https://chromewebstore.google.com/detail/continuo/gdikbnakhneidanfgmkfgfddgdhnakcj",
    images: [
      "/projects/continuo/continuo-1.webp",
      "/projects/continuo/continuo-2.webp",
      "/projects/continuo/continuo-3.webp",
      "/projects/continuo/continuo-4.webp",
      "/projects/continuo/continuo-5.webp",
    ],
  },
  {
    id: 7,
    cover: "/projects/atomiq/atomiq-cover.webp",
    title: "Atomiq",
    snippet:
      "Atomiq is a modern desktop database client that unifies multiple databases into a single, intuitive workspace with secure connection management and a premium developer experience.",
    tagline: "One workspace for every database",
    highlight: "Unified multi-database management with a modern desktop UX",
    type: "Desktop Application",
    primaryTech: "Tauri",
    statusVariant: "In Development",
    quickStats: [
      "Multi-database support",
      "Secure connections",
      "Cross-platform",
    ],
    lastUpdated: "2026-08",
    slug: "atomiq",

    description:
      "Atomiq is a desktop database management application I'm building to simplify the way developers interact with databases. Instead of juggling multiple database clients, Atomiq provides a single workspace to connect, organize, and manage different database engines through a clean, modern interface. The focus is on speed, usability, and developer experience, with secure credential management, intelligent connection organization, and an extensible architecture for future AI-powered features.",

    techStack: [
      "Tauri",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "SQLite",
    ],

    role: "Co-Founder & Frontend Developer",
    status: "Active Development",

    features: [
      "Connect to multiple database engines from a single application",
      "Organize connections into workspaces and collections",
      "Secure credential storage using an encrypted local keychain",
      "Modern tab-based interface with light and dark themes",
      "Connection testing and health monitoring",
      "Quick search and filtering across saved connections",
      "Import and export database connection profiles",
      "Backup and restore connection configurations",
      "Responsive desktop-first UI with polished animations",
      "Designed for future AI-assisted database workflows",
    ],

    featureCategories: [
      {
        category: "Database & Workspaces",
        items: [
          "Multi-Engine Hub — Connect to PostgreSQL, MySQL, SQLite, and Redis from a unified interface",
          "Workspace Management — Organize database profiles into custom workspaces, environments, and tags",
          "Connection Diagnostics — Real-time ping testing, latency metrics, and health diagnostics",
          "Instant Search — Keyboard-first search across all saved connections, schemas, and queries",
        ],
      },
      {
        category: "Security & Management",
        items: [
          "Encrypted Keychain — Store credentials safely via OS-level hardware-accelerated keystores",
          "Profile Portability — Export and import connection configurations with password protection",
          "Automated Snapshots — Backup and restore complete workspace configurations reliably",
        ],
      },
      {
        category: "Desktop UX & AI",
        items: [
          "Native Tabbed UI — Polished multi-tab workspace designed specifically for desktop workflows",
          "Light & Dark Themes — Crafted interface with high-contrast syntax and smooth animations",
          "AI-Assisted Engine — Modular architecture built for natural-language queries and schema help",
        ],
      },
    ],

    challenges: [
      "Multi-Provider Driver Architecture — Designing a modular backend to connect with diverse database wire protocols without bloat",
      "Native Desktop Performance — Achieving instantaneous startup and low memory overhead using Tauri and Rust",
      "Zero-Leak Credential Security — Storing sensitive database credentials without ever writing plaintext keys to disk",
      "Interface Density vs Simplicity — Balancing deep developer controls with an uncluttered, modern workspace",
      "Plugin Extensibility — Planning a plugin system that allows community contributors to write custom drivers and analyzers",
    ],

    outcomes: [
      "End-to-End Product Architecture — Designed full brand identity, technical architecture, and desktop client from zero",
      "Modern Developer Interface — Built a desktop experience that matches modern standards set by Linear and Raycast",
      "Pluggable Engine Foundation — Established a unified driver interface capable of orchestrating multiple database engines",
      "AI-Ready Schema Pipeline — Defined structured context pipelines to power upcoming intelligent SQL generation",
      "Production MVP Roadmap — Completed technical validation and foundational architecture for public beta release",
    ],

    github: "",
    liveDemo: "https://atomiq-studio.vercel.app/",
    images: [
      "/projects/atomiq/atomiq-1.webp",
      "/projects/atomiq/atomiq-2.webp",
      "/projects/atomiq/atomiq-3.webp",
      "/projects/atomiq/atomiq-4.webp",
      "/projects/atomiq/atomiq-5.webp",
      "/projects/atomiq/atomiq-6.webp",
      "/projects/atomiq/atomiq-7.webp",
      "/projects/atomiq/atomiq-8.webp",
      "/projects/atomiq/atomiq-9.webp",
      "/projects/atomiq/atomiq-10.webp",
      "/projects/atomiq/atomiq-11.webp",
      "/projects/atomiq/atomiq-12.webp",
      "/projects/atomiq/atomiq-13.webp",
    ],
  },
  {
    id: 6,
    cover: "/projects/dep-peek/dep-peek-cover.webp",
    title: "dep-peek",
    snippet:
      "dep-peek is a lightweight CLI tool that helps developers safely identify unused dependencies in JavaScript and TypeScript projects using static analysis.",
    tagline: "Safely detect unused dependencies using static analysis",
    highlight: "AST-based analysis with zero side effects",
    type: "CLI Tool",
    primaryTech: "TypeScript",
    statusVariant: "Completed (v1)",
    quickStats: ["JS & TS support", "Read-only", "Safe analysis"],
    lastUpdated: "2025-02",
    slug: "dep-peek",

    description:
      "dep-peek is a developer-focused CLI tool I built to understand how static analysis and AST parsing can be used to solve real-world problems. It scans JavaScript and TypeScript projects, analyzes actual import usage, and compares it with package.json to report used and unused dependencies. The tool is intentionally read-only, focusing on clarity and safety rather than automatic cleanup.",

    techStack: [
      "TypeScript",
      "Node.js",
      "Babel Parser",
      "Babel Traverse",
      "fast-glob",
    ],

    role: "Developer Tooling Engineer",
    status: "",

    features: [
      "Detect unused dependencies using AST-based static analysis",
      "Supports JavaScript and TypeScript projects",
      "Handles both ES Modules (import) and CommonJS (require)",
      "Ignores relative imports and Node.js built-in modules",
      "Safe, read-only CLI that does not modify dependencies",
    ],

    challenges: [
      "Designing accurate dependency detection without false positives",
      "Handling both ESM and CommonJS import patterns",
      "Normalizing scoped packages and subpath imports correctly",
      "Dealing with real-world limitations like path aliases and framework-managed dependencies",
    ],

    outcomes: [
      "Built and published a real npm CLI package",
      "Gained hands-on experience with AST parsing and static analysis",
      "Learned how to design safe and predictable developer tools",
      "Identified clear roadmap items for future versions (v2)",
    ],

    github: "https://github.com/va1bhavx/dep-peek",
    liveDemo: "https://www.npmjs.com/package/dep-peek",
    images: [],
  },
  {
    id: 1,
    cover: "/projects/cover/bitsndbricks.webp",
    title: "BitsndBricks",
    snippet:
      "A platform where property professionals companies or individuals sign up, register, and start building or applying for work. My very first big project, crafted entirely from scratch, laying the foundation for scalable, user friendly real estate solutions.",
    tagline: "Role-based real estate platform for professionals",
    highlight: "Multi-role workflows built from scratch",
    type: "Web App",
    primaryTech: "Next.js",
    statusVariant: "completed",
    lastUpdated: "2024-09",
    quickStats: ["Role-based UI", "Real estate domain", "Production-scale"],
    slug: "bitsndbricks",

    description:
      "BitsndBricks is a real estate web application inspired by platforms like Naukri, but designed specifically for property professionals. It allows companies and individuals to register, create projects, manage work, and collaborate efficiently. As my first major assignment, I built the entire frontend ecosystem from scratch, focusing on clean UI, seamless onboarding, and multiple user perspectives.",

    techStack: [
      "NextJS",
      "TailwindCSS",
      "JavaScript",
      "REST APIs",
      "Axios",
      "TypeScript",
      "ShadCNui",
    ],

    role: "Frontend Developer",
    status: "Completed",

    features: [
      "Authentication flow with login and signup",
      "Company registration and user onboarding",
      "Project creation, work posting, and application system",
      "Dedicated views for service providers, clients, and landing page",
      "Responsive design with mobile-first approach",
    ],

    challenges: [
      "Designing a scalable frontend architecture without prior reference",
      "Implementing multiple role-based views within the same app",
      "Balancing between clean UI and feature-heavy workflows",
      "Learning to manage component-level state effectively",
    ],

    outcomes: [
      "Successfully delivered a fully functional real estate platform prototype",
      "Gained hands-on experience in building authentication and role-based flows",
      "Learned the importance of UI/UX in user onboarding",
      "Set a strong foundation for tackling larger, production-ready projects",
    ],

    github: "",
    liveDemo: "https://bitsndbricks.com",
    images: [
      "/projects/busybrains/dashboard.webp",
      "/projects/busybrains/home.webp",
      "/projects/busybrains/login.webp",
      "/projects/busybrains/signup.webp",
      "/projects/busybrains/user-management.webp",
      "/projects/busybrains/work-page.webp",
      "/projects/busybrains/work.webp",
      "/projects/busybrains/project.webp",
      "/projects/busybrains/work-detail.webp",
    ],
  },

  {
    id: 2,
    cover: "/projects/cover/cultui.webp",
    title: "CultUI",
    snippet:
      "CultUI is a modern, developer-friendly component library designed to streamline the UI development process. It offers a collection of high-quality, customizable, and accessible React components built with TailwindCSS.",
    tagline: "Reusable, accessible React components with Tailwind",
    highlight: "Developer-first component design system",
    type: "Library",
    primaryTech: "React",
    statusVariant: "wip",
    quickStats: ["Reusable components", "Accessible", "Tailwind-based"],
    lastUpdated: "2024-06",
    slug: "cultui",

    description:
      "CultUI is my personal UI library built to speed up React development. While working on multiple projects, I found myself reusing the same patterns and styles repeatedly. CultUI solves that by providing pre-built, customizable, and accessible components crafted with TailwindCSS. The library emphasizes developer experience, scalability, and clean code practices.",

    techStack: ["ReactJS", "TypeScript", "TailwindCSS", "Vite", "Axios"],

    role: "Frontend Developer & Library Creator",
    status: "In Progress",

    features: [
      "Reusable React components with TailwindCSS styling",
      "Customizable props for flexibility",
      "Focus on accessibility (ARIA roles, keyboard navigation)",
      "Built with Typescript for more type safety",
    ],

    challenges: [
      "Designing reusable components that balance flexibility with simplicity",
      "Maintaining a consistent design language across all components",
      "Ensuring accessibility without compromising styling",
      "Setting up proper documentation and versioning for the library",
    ],

    outcomes: [
      "Built a scalable UI library that can be reused across projects",
      "Enhanced my understanding of design systems and component driven development",
      "Improved development speed for future projects",
    ],

    github: "https://github.com/prgvaibhav/cultui", // placeholder if real repo exists
    liveDemo: "https://cultui.vercel.app", // if docs/preview site
    images: [
      "/projects/cultui/home.webp",
      "/projects/cultui/components.webp",
      "/projects/cultui/button-1.webp",
      "/projects/cultui/button-2.webp",
    ],
  },

  {
    id: 3,
    cover: "/projects/cover/peteye.webp",
    title: "PetEye",
    snippet:
      "PetEye is an all-in-one platform catering to pet owners, providing innovative solutions for pet data management, e-commerce, tracking, and community engagement.",
    tagline: "All-in-one platform for pet care & tracking",
    highlight: "Multi-module production application",
    type: "Web App",
    primaryTech: "React",
    statusVariant: "completed",
    quickStats: ["E-commerce", "GPS tracking", "Medical records"],
    lastUpdated: "2025-01",
    slug: "peteye",

    description:
      "PetEye was a project I worked on at PetEye, where I contributed as a React developer. The platform aimed to serve pet owners by offering a single solution for medical records, e-commerce (pet food & accessories), real-time GPS tracking, and informative blogs. My responsibility was to develop scalable and user-friendly interfaces that ensured smooth navigation across these diverse features.",

    techStack: [
      "ReactJS",
      "NextJS",
      "TypeScript",
      "TailwindCSS",
      "Redux Toolkit",
      "REST APIs",
      "ContextAPI",
      "Axios",
    ],

    role: "Frontend Developer",
    status: "Completed",

    features: [
      "User authentication and profile management",
      "Pet medical record storage and access",
      "E-commerce module for pet products",
      "GPS tracking and location visualization",
      "Community engagement with blogs and guides",
    ],

    challenges: [
      "Integrating multiple complex modules into one consistent UI",
      "Ensuring responsive design across data-heavy pages",
      "Managing API state efficiently with Redux Toolkit",
      "Balancing performance while rendering real-time tracking data",
      "Adding payment integration for e-commerce of pet store",
    ],

    outcomes: [
      "Gained practical experience working on a multi-feature production project",
      "Improved skills in API integration and modular UI design",
      "Learned to collaborate in a professional environment with backend teams",
      "Enhanced ability to manage large-scale state with Redux Toolkit",
    ],

    github: "", // client-owned, may not be public
    liveDemo: "https://peteye.pet", // internal project, no live site
    images: [],
  },

  {
    id: 4,
    cover: "/projects/cover/movie-gyaan.webp",
    title: "Movie Gyaan",
    snippet:
      "Movie Gyaan is a go to platform for movie enthusiasts, offering detailed insights into a wide range of films. From ratings to budgets, this site provides everything you need to explore the world of cinema.",
    tagline: "Explore movies with rich data & insights",
    highlight: "Clean UI over third-party movie APIs",
    type: "Web App",
    primaryTech: "React",
    statusVariant: "completed",
    quickStats: ["TMDB API", "Search-driven", "Data-rich UI"],
    lastUpdated: "2024-02",
    slug: "movie-gyaan",

    description:
      "Movie Gyaan was a personal project designed to strengthen my API handling and data visualization skills. It connects with third-party APIs to fetch detailed information about movies, including cast, ratings, reviews, and budgets. I focused on building an intuitive interface that makes movie discovery engaging and informative.",

    techStack: ["React", "TailwindCSS", "JavaScript", "TMDB API", "Axios"],

    role: "Frontend Developer",
    status: "Completed",

    features: [
      "Search and explore movies by title, genre, or release date",
      "Detailed movie pages with cast, reviews, and ratings",
      "Responsive and modern UI built with TailwindCSS",
      "Integration with TMDB API for up-to-date information",
    ],

    challenges: [
      "Efficiently handling API requests to avoid performance bottlenecks",
      "Presenting data-heavy content in a clean, readable manner",
      "Designing a search system with real-time feedback",
    ],

    outcomes: [
      "Improved API handling and frontend data visualization skills",
      "Delivered a functional movie discovery app with modern UI",
      "Enhanced my understanding of integrating third-party APIs",
    ],

    github: "https://github.com/PrgVaibhav/moviezone",
    liveDemo: "https://moviegyaaan.netlify.app/",
    images: [
      "/projects/movie/home.webp",
      "/projects/movie/popular.webp",
      "/projects/movie/search.webp",
    ],
  },

  {
    id: 5,
    cover: "/projects/cover/redditwrap.webp",
    title: "RedditWrap",
    snippet:
      "RedditWrap is your curated gateway to the best of Reddit for developers. No spam. No distractions. Just the most insightful discussions, tips, and resources tailored for the coding community.",
    tagline: "Noise-free Reddit feed for developers",
    highlight: "Curated content over raw Reddit feeds",
    type: "Web App",
    primaryTech: "React",
    statusVariant: "completed",
    quickStats: ["Content curation", "Minimal UI", "API-driven"],
    lastUpdated: "2025-08",
    slug: "redditwrap",

    description:
      "RedditWrap is a side project I built to practice API integration and content curation. The idea was to filter out noise from Reddit and display only developer-related threads and insights in a minimal UI. It focuses on helping developers stay informed without getting distracted by irrelevant content.",

    techStack: ["ReactJS", "TailwindCSS", "Reddit API", "Axios"],

    role: "Fullstack Developer",
    status: "Completed",

    features: [
      "Fetch and display curated Reddit posts from developer-related subreddits",
      "Filter by topics like JavaScript, React, Web Dev, etc.",
      "Responsive UI optimized for reading content quickly",
    ],

    challenges: [
      "Understanding Reddit’s API authentication and rate limits",
      "Filtering and cleaning raw API data into developer-friendly insights",
      "Balancing between minimal UI and showing enough context for posts",
    ],

    outcomes: [
      "Built a working prototype for developer-focused Reddit feed",
      "Improved skills in filtering and transforming API responses",
    ],

    github: "https://github.com/PrgVaibhav/RedditWrap",
    liveDemo: "https://redditwrap.vercel.app",
    images: [],
  },
];
