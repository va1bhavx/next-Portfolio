"use client";

import React, { useEffect, useState } from "react";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Link from "next/link";
import { Github, Linkedin, Menu, Twitter, X } from "lucide-react";
import { usePathname } from "next/navigation";

const LINKS = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Projects", url: "/projects" },
  { id: 3, name: "Experience", url: "/experience" },
];

const SOCIALS = [
  {
    id: 1,
    name: "Twitter (X)",
    url: "https://twitter.com/va1bhavx",
    icon: <Twitter size={20} />,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/va1bhavx",
    icon: <Linkedin size={20} />,
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com/va1bhavx",
    icon: <Github size={20} />,
  },
];

const Navbar = () => {
  const [date, setDate] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-IN", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setDate(formattedDate);
  }, []);

  return (
    <nav
      aria-label="Primary navigation"
      className="px-4 w-full flex flex-col gap-4"
    >
      {/* Top Row */}
      <div className="flex items-end justify-between mt-4">
        <Heading tag="h1" cn=" font-extrabold title text-xl md:text-4xl">
          VK.
        </Heading>

        <Paragraph cn="italic text-xs sm:text-sm text-neutral-400">
          {date}
        </Paragraph>
      </div>

      {/* Navigation Bar */}
      <div className="flex items-center justify-between border-t-2 border-b-2 border-neutral-700 p-3">
        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-4">
          {LINKS.map((link) => {
            const isActive = pathname === link.url;

            return (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`body hover:underline transition-all duration-300  ${
                    isActive ? "font-bold text-neutral-300" : "text-neutral-500"
                  }`}
                  aria-label={`Navigate to ${link.name} page`}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          {SOCIALS.map((social) => (
            <Link
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Vaibhav Kumar on ${social.name}`}
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out border-b-2 border-neutral-700 ${
          isMenuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-start gap-3 p-3">
          {LINKS.map((link) => {
            const isActive = pathname === link.url;

            return (
              <li key={link.id}>
                <Link
                  href={link.url}
                  className={`body hover:underline transition-all duration-300 text-neutral-600 ${
                    isActive ? "font-bold " : ""
                  }`}
                  aria-label={`Navigate to ${link.name} page`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
