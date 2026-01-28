import React from "react";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" mt-12  md:max-w-4xl w-full mx-auto">
      <div className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
        {/* Left Column - Newspaper style issue info */}
        <div className="text-sm flex flex-col gap-2">
          <Heading tag="h1" cn="title text-2xl md:text-4xl">
            Developer Times
          </Heading>

          <Paragraph cn="italic text-xs mt-1">
            Edition {new Date().getFullYear()} • Published by Vaibhav Kumar
          </Paragraph>
          <Paragraph cn="text-xs text-gray-600  text-balance">
            All articles & projects are personally hand-crafted with Next, & ☕.
          </Paragraph>
        </div>

        {/* Right Column - Social & Signature */}
        <div className="text-sm flex flex-col items-start md:items-end gap-3">
          <div className="flex gap-4 text-lg">
            <a
              href="https://github.com/PrgVaibhav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              aria-label="View Vaibhav Kumar's Github account"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/devxvaibhav"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              aria-label="View Vaibhav Kumar's LinkedIn account"
            >
              <Linkedin />
            </a>
            <a
              href="https://twitter.com/SyntaxError408"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black"
              aria-label="View Vaibhav Kumar's Twitter account"
            >
              <Twitter />
            </a>
          </div>
          <p className="italic text-xs text-gray-600">
            “Printed with passion & pixels”
          </p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-black text-center text-xs py-2 tracking-widest uppercase ">
        © {new Date().getFullYear()} Vaibhav Kumar
      </div>
    </footer>
  );
};

export default Footer;
