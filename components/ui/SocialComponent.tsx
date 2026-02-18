"use client";

import Link from "next/link";
import React from "react";
import { BsGithub, BsTwitterX } from "react-icons/bs";
import { FaDev, FaMedium } from "react-icons/fa";
import { FaHashnode } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import Tooltip from "../ui/Tooltip";

const SOCIALS = [
  {
    id: 1,
    name: "Twitter (X)",
    url: "https://twitter.com/va1bhavx",
    icon: <BsTwitterX size={20} />,
  },
  {
    id: 2,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/va1bhavx",
    icon: <LiaLinkedinIn size={20} />,
  },
  {
    id: 3,
    name: "GitHub",
    url: "https://github.com/va1bhavx",
    icon: <BsGithub size={20} />,
  },
  {
    id: 4,
    name: "Medium",
    url: "https://medium.com/@va1bhavx",
    icon: <FaMedium size={20} />,
  },
  {
    id: 5,
    name: "Hashnode",
    url: "https://va1bhavx.hashnode.dev/",
    icon: <FaHashnode size={20} />,
  },
  {
    id: 6,
    name: "Dev.to",
    url: "https://dev.to/va1bhavx",
    icon: <FaDev size={20} />,
  },
];

function SocialComponent() {
  return (
    <div className="flex items-center gap-4">
      {SOCIALS.map((social) => (
        <Tooltip key={social.id} label={social.name}>
          <Link
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Vaibhav Kumar on ${social.name}`}
            className="
              text-neutral-400 hover:text-emerald-500
              hover:scale-110 transition-all
            "
          >
            {social.icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
}

export default SocialComponent;
