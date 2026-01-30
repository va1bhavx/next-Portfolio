export const Logs = [
  {
    id: Math.floor(Math.random() * 9999),
    title: "Building Sigma Dashboard",
    description: "How we improved internal operations...",
    snippet: "Lessons from building real-time dashboards.",
    slug: "sigma-dashboard",
    author: "Vaibhav Kumar",
    date: "2026-01-20",

    sections: [
      {
        id: Math.floor(Math.random() * 9999),
        subheading: "Problem Statement",
        content: [
          { type: "text", value: "We needed a dashboard..." },
          { type: "text", value: "Performance was critical..." },

          {
            type: "image",
            src: "/logs/sigma/dashboard.png",
            alt: "Sigma dashboard overview",
          },

          { type: "text", value: "After redesigning..." },
        ],
      },

      {
        id: Math.floor(Math.random() * 9999),
        subheading: "Implementation",
        content: [
          { type: "text", value: "We used TanStack Query..." },

          {
            type: "image",
            src: "/logs/sigma/workflow.png",
            alt: "Workflow diagram",
          },

          { type: "text", value: "Caching improved speed..." },
        ],
      },
    ],
  },
];
