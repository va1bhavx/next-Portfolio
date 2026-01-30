export const Logs = [
  {
    id: Math.floor(Math.random() * 9999),
    title: "Welcome, Why This Log Exists",
    description:
      "An introduction to this space, what I’ll be documenting, and why these logs exist.",
    snippet:
      "This is where I document projects, learnings, and real engineering experiences.",
    slug: "welcome-to-logs",
    author: "Vaibhav Kumar",
    date: "30th January, 2026",
    tag: "Personal",
    sections: [
      {
        id: Math.floor(Math.random() * 9999),
        subheading: "What is this space?",
        content: [
          {
            type: "text",
            value:
              "This website is my personal portfolio, but I also wanted a place to document my journey as a developer beyond just showcasing projects. These logs serve as a living record of what I’m building, learning, and experimenting with over time.",
          },
          {
            type: "text",
            value:
              "Instead of posting polished case studies only, this section focuses on real experiences — things that worked, things that didn’t, architectural decisions, performance fixes, and lessons learned while working on production systems.",
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
              "I’ll be sharing development logs from real projects, breakdowns of complex features, performance improvements, UI decisions, debugging stories, and experiments with new tools or frameworks.",
          },
          {
            type: "text",
            value:
              "Some entries will be technical deep dives, while others will simply capture thoughts or learnings gathered while building real-world applications.",
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
              "Writing helps me clarify my thinking and document solutions for future reference. At the same time, it might help other developers who run into similar challenges.",
          },
          {
            type: "text",
            value:
              "If you're someone building products, learning frontend engineering, or exploring real-world application development, these logs might give you useful insights along the way.",
          },
          {
            type: "text",
            value:
              "This is less about perfection and more about progress. Each log captures a small step forward.",
          },
        ],
      },
    ],
  },
];
