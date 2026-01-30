import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Vaibhav Kumar",
  description:
    "The page you are looking for does not exist. Explore projects, experience, and development logs by Vaibhav Kumar.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <Container cn="items-start min-h-[60vh] justify-center">
      <section className="flex flex-col gap-6 max-w-xl">
        <Heading tag="h1" cn="text-4xl text-neutral-200">
          404 — Page Not Found
        </Heading>

        <Paragraph cn="text-neutral-400 leading-relaxed">
          Looks like this page doesn’t exist or may have been moved. You can
          return home or explore projects and experience instead.
        </Paragraph>

        <div className="flex gap-4 text-neutral-300">
          <Link href="/" className="hover:text-white underline">
            Go Home
          </Link>

          <Link href="/projects" className="hover:text-white underline">
            View Projects
          </Link>

          <Link href="/projects" className="hover:text-white underline">
            View Experience
          </Link>
          <Link href="/projects" className="hover:text-white underline">
            View Logs
          </Link>
        </div>
      </section>
    </Container>
  );
}
