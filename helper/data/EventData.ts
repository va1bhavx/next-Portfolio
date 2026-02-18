export type EventType = "global" | "india" | "tech" | "personal";

export interface SiteEvent {
  id: string;
  name: string;
  type: EventType;
  message: string;

  // date logic
  month?: number; // 1–12
  day?: number; // 1–31
  range?: { from: number; to: number }; // day range
  rule?: "year-start" | "year-end" | "month-start";
}

export const EVENTS: SiteEvent[] = [
  // 🌍 Global
  {
    id: "new-year",
    name: "New Year",
    type: "global",
    rule: "year-start",
    message: "🎉 Happy New Year. Let’s build, learn, and improve.",
  },

  {
    id: "year-end",
    name: "Year End",
    type: "global",
    rule: "year-end",
    message: "✨ Wrapping up the year, reflecting and refining.",
  },

  {
    id: "valentines-day",
    name: "Valentine’s Day",
    type: "global",
    month: 2,
    range: { from: 1, to: 14 },

    message: "❤️ Building things with care and intention.",
  },

  {
    id: "halloween",
    name: "Halloween",
    type: "global",
    month: 10,
    day: 31,
    message: "🎃 Debugging the scary parts of code.",
  },

  // 🇮🇳 India
  {
    id: "republic-day",
    name: "Republic Day",
    type: "india",
    month: 1,
    range: { from: 26, to: 31 },

    message: "🇮🇳 Happy Republic Day. Building a better future.",
  },

  {
    id: "independence-day",
    name: "Independence Day",
    type: "india",
    month: 8,
    range: { from: 10, to: 15 },

    message: "🇮🇳 Freedom to think, build, and create.",
  },

  {
    id: "holi",
    name: "Holi",
    type: "india",
    month: 3,
    range: { from: 1, to: 31 },
    message: "🌈 Happy Holi. Adding color to ideas and code.",
  },

  {
    id: "diwali",
    name: "Diwali",
    type: "india",
    month: 11,
    range: { from: 1, to: 30 },
    message: "🪔 Diwali vibes, clarity, light, and clean builds.",
  },

  // 💻 Developer / Tech
  {
    id: "dev-day",
    name: "Developer Appreciation Day",
    type: "tech",
    month: 5,
    day: 17,
    message: "👨‍💻 Appreciating builders behind the scenes.",
  },

  {
    id: "js-day",
    name: "JavaScript Day",
    type: "tech",
    month: 12,
    day: 4,
    message: "⚡ JavaScript, powering the modern web.",
  },

  {
    id: "hacktoberfest",
    name: "Hacktoberfest",
    type: "tech",
    month: 10,
    range: { from: 1, to: 31 },
    message: "🎃 Shipping code and learning together.",
  },

  {
    id: "open-source-day",
    name: "Open Source Day",
    type: "tech",
    month: 8,
    day: 31,
    message: "🌍 Open source, built by many, for everyone.",
  },

  {
    id: "frontend-day",
    name: "Frontend Focus",
    type: "tech",
    month: 6,
    day: 1,
    message: "🎨 Clean UI. Thoughtful UX. Solid engineering.",
  },

  // 👨‍💻 Personal / Portfolio
  {
    id: "portfolio-anniversary",
    name: "Portfolio Anniversary",
    type: "personal",
    month: 1,
    day: 10,
    message: "🚀 Another year of building and learning.",
  },

  {
    id: "learning-season",
    name: "Learning Season",
    type: "personal",
    month: 7,
    range: { from: 1, to: 31 },
    message: "📚 Deep work, steady learning, real progress.",
  },
];
