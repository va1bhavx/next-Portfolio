"use client";

import { useEffect } from "react";
import Container from "@/components/ui/Container";
import Heading from "@/components/ui/Heading";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container cn="items-start min-h-[60vh] justify-center">
      <section className="flex flex-col gap-6 max-w-xl">
        <Heading tag="h1" cn="text-4xl text-neutral-200">
          Something went wrong
        </Heading>

        <Paragraph cn="text-neutral-400 leading-relaxed">
          An unexpected error occurred while loading this page. You can try
          again or return home.
        </Paragraph>

        <div className="flex gap-4 text-neutral-300">
          <Button
            onClick={() => reset()}
            className="underline hover:text-white"
          >
            Try Again
          </Button>

          <Link href="/" className="underline hover:text-white">
            Go Home
          </Link>
        </div>
      </section>
    </Container>
  );
}
