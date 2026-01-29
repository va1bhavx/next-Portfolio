import React from "react";
import Paragraph from "../ui/Paragraph";
import Heading from "../ui/Heading";
import SocialComponent from "../ui/SocialComponent";

const Footer = () => {
  return (
    <footer className="mt-4 sm:mt-8 max-w-4xl mx-auto">
      <div className=" px-6 sm:px-0 py-5 flex flex-col gap-8 text-neutral-400">
        {/* Identity */}
        <div className="flex flex-col gap-2">
          <Heading tag="h2" cn="text-neutral-200 text-lg font-medium">
            Vaibhav Kumar — Software Engineer
          </Heading>

          <Paragraph cn="text-sm leading-relaxed max-w-xl">
            Building modern, reliable web applications using React and NextJS.
            Sharing projects, development learnings, and frontend engineering
            insights through this portfolio.
          </Paragraph>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          <Paragraph cn="text-xs uppercase tracking-widest text-neutral-500">
            Connect
          </Paragraph>
          <SocialComponent />
        </div>

        {/* Bottom strip */}
        <div className="flex flex-col md:flex-row md:justify-between gap-2 text-xs text-neutral-500 pt-6 border-t border-neutral-800">
          <p>
            © {new Date().getFullYear()} Vaibhav Kumar. All rights reserved.
          </p>

          <p>
            Also known online as{" "}
            <span className="text-neutral-400">va1bhavx</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
