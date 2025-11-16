// app/RootLayoutClient.tsx
"use client";

import React, { useEffect, useState } from "react";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/web/Footer";
import LoadingScreen from "@/components/ui/LoadingScreen";
import Container from "@/components/ui/Container";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-9999 flex items-center justify-center bg-white transition-opacity duration-500">
          <LoadingScreen imageSrc="/loading.webp" />
        </div>
      )}

      <div
        className={`transition-opacity duration-300 ${
          loading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <header className="sticky top-0 z-50 bg-[#ebebeb] md:max-w-6xl w-full mx-auto pt-2">
          <Navbar />
        </header>
        <main className="min-h-screen">{children}</main>

        <Footer />
      </div>
    </>
  );
}
