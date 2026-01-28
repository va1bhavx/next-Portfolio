import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";

// ✅ Import optimized Google Fonts
import { Inter, Roboto, Fleur_De_Leah } from "next/font/google";

// Example: configure fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vaibhav Kumar | ReactJS Developer",
  description:
    "Vaibhav Kumar is a ReactJS developer passionate about building innovative, scalable, and user friendly web applications. Focused on delivering clean, efficient, and modern front-end experiences.",
  keywords: [
    "Vaibhav Kumar",
    "ReactJS Developer",
    "Frontend Developer",
    "JavaScript",
    "Next.js",
    "Web Developer",
    "Frontend Engineer",
  ],
  authors: [{ name: "Vaibhav Kumar" }],
  creator: "Vaibhav Kumar",
  publisher: "Vaibhav Kumar",
  applicationName: "Portfolio - Vaibhav Kumar",

  openGraph: {
    title: "Vaibhav Kumar | ReactJS Developer",
    description:
      "ReactJS Developer with experience building modern, high-performance, and user-focused applications. Passionate about creating seamless front-end experiences.",
    url: "https://kumarvaibhav.xyz",
    siteName: "Vaibhav Kumar Portfolio",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // ✅ Twitter card
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Kumar | ReactJS Developer",
    description:
      "React.js Developer with experience building modern, high-performance, and user-focused applications.",
    creator: "@va1bhavx",
    images: ["/banner.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  metadataBase: new URL("https://kumarvaibhav.xyz"),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// ✅ Root layout with fonts applied
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
