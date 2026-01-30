import type { Metadata } from "next";
import "./globals.css";
import RootLayoutClient from "./RootLayoutClient";
import ScrollToTop from "@/components/web/Home/ScrollToTop";

import { Inter, Roboto } from "next/font/google";

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
  title: "Vaibhav Kumar – React & NextJS Developer Portfolio",
  description:
    "Vaibhav Kumar is a React and NextJS developer building scalable, modern, and user-friendly web applications focused on performance and clean frontend architecture.",

  keywords: [
    "Vaibhav Kumar",
    "Vaibhav Kumar Developer",
    "React Developer India",
    "NextJS Developer",
    "Frontend Developer",
    "React NextJS Portfolio",
    "JavaScript Developer",
    "Full Stack Developer",
    "MERN Developer",
    "Frontend Engineer",
  ],

  authors: [{ name: "Vaibhav Kumar" }],
  creator: "Vaibhav Kumar",
  publisher: "Vaibhav Kumar",
  applicationName: "Vaibhav Kumar Portfolio",

  metadataBase: new URL("https://kumarvaibhav.xyz"),

  alternates: {
    canonical: "https://kumarvaibhav.xyz",
  },

  openGraph: {
    title: "Vaibhav Kumar – React & NextJS Developer",
    description:
      "Portfolio of Vaibhav Kumar showcasing modern web applications, frontend engineering, and production-grade projects.",
    url: "https://kumarvaibhav.xyz",
    siteName: "Vaibhav Kumar Portfolio",
    images: [
      {
        url: "https://kumarvaibhav.xyz/banner.png",
        width: 1200,
        height: 630,
        alt: "Vaibhav Kumar Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Kumar – React & NextJS Developer",
    description:
      "Frontend developer building scalable React & NextJS applications.",
    creator: "@va1bhavx",
    images: ["https://kumarvaibhav.xyz/banner.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${roboto.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Vaibhav Kumar",
              url: "https://kumarvaibhav.xyz",
              sameAs: [
                "https://github.com/va1bhavx",
                "https://twitter.com/va1bhavx",
                "https://www.linkedin.com/in/va1bhavx",
                "https://medium.com/@va1bhavx",
                "https://va1bhavx.hashnode.dev",
                "https://dev.to/va1bhavx",
              ],
              jobTitle: "Software Engineer",
              worksFor: {
                "@type": "Organization",
                name: "Aptagrim Limited",
              },
            }),
          }}
        />

        <RootLayoutClient>
          <ScrollToTop />
          {children}
        </RootLayoutClient>
      </body>
    </html>
  );
}
