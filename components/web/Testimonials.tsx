"use client";

import { useState } from "react";
import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    appreciation:
      "Working with Vaibhav was a seamless experience. He quickly understood our requirements and transformed them into a clean, scalable frontend. His attention to detail and problem-solving skills made the project smooth and enjoyable.",
    user: {
      id: 1,
      name: "Altaf Hassan",
      company: "Tricky World",
      designation: "CEO",
      //   imgSrc: "/testimonials/rohit.jpg",
    },
  },
  {
    id: 2,
    appreciation:
      "Vaibhav has that rare mix of creativity and technical expertise. The UI components he delivered were not only pixel perfect but also highly reusable, saving us a ton of development time.",
    user: {
      id: 2,
      name: "Kulasekhar Reddy",
      company: "BusyBrains",
      designation: "Lead Designer",
      //   imgSrc: "/testimonials/anjali.jpg",
    },
  },
  {
    id: 3,
    appreciation:
      "Reliable, proactive, and always open to feedback Vaibhav brought a lot of value to our team. His ability to break down complex tasks and deliver them efficiently was impressive.",
    user: {
      id: 3,
      name: "Mohit Kuril",
      company: "PetEye",
      designation: "Frontend Developer",
      //   imgSrc: "/testimonials/arjun.jpg",
    },
  },
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const handlePrev = () => {
    setActiveTestimonial((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveTestimonial((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1
    );
  };

  const currentTestimonial = TESTIMONIALS[activeTestimonial];

  return (
    <Container cn="items-start ">
      <div className="flex items-start justify-between  self-start mb-8">
        <Heading
          tag="h1"
          cn="text-3xl header bg-[#2f2f2f] px-2 text-white w-max break-words h-[40px] flex items-center"
        >
          Appreciations
        </Heading>
      </div>

      <div className="flex items-start flex-wrap justify-between w-full gap-4">
        <div className="max-w-md w-full flex flex-col gap-4">
          <Heading tag="h2" cn="text-xl header text-black w-max font-semibold">
            What people say
          </Heading>
          <Paragraph cn="text-sm text-gray-600 leading-relaxed">
            Real words from those who’ve worked with me their experiences,
            thoughts, and stories that reflect my work and dedication.
          </Paragraph>
        </div>

        <div className="max-w-lg w-full flex flex-col gap-4">
          <Paragraph cn="text-md text-gray-800 text-balance leading-relaxed body border-b border-black/20 pb-2">
            "{currentTestimonial.appreciation}"
          </Paragraph>

          <div className="flex gap-2 justify-between items-center">
            <div className="flex gap-2 items-center">
              <div>
                <Paragraph cn="text-sm text-gray-800 leading-relaxed">
                  {currentTestimonial.user.name}
                </Paragraph>
                <Paragraph cn="text-xs text-gray-600 leading-relaxed">
                  {currentTestimonial.user.designation},{" "}
                  {currentTestimonial.user.company}
                </Paragraph>
              </div>
            </div>

            <div className="flex gap-2">
              <div onClick={handlePrev}>
                <Button
                  variant="ghost"
                  disabled={activeTestimonial === 0}
                  cn={
                    activeTestimonial === 0
                      ? "opacity-40 cursor-not-allowed"
                      : ""
                  }
                >
                  <ChevronLeft />
                </Button>
              </div>

              <div onClick={handleNext}>
                <Button
                  variant="ghost"
                  disabled={activeTestimonial === TESTIMONIALS.length - 1}
                  cn={
                    activeTestimonial === TESTIMONIALS.length - 1
                      ? "opacity-40 cursor-not-allowed"
                      : ""
                  }
                >
                  <ChevronRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="relative bg-transparent border-2 border-black px-5 py-6 mt-12 w-full max-w-2xl mx-auto font-serif shadow-[4px_4px_0px_#000] hover:shadow-[6px_6px_0px_#000]">
        <div className="border-b border-black/40 pb-2 mb-4 flex items-center justify-between">
          <span className="uppercase text-xs tracking-widest text-gray-700">
            Classified
          </span>
          <span className="text-xs italic text-gray-600">Open Role Notice</span>
        </div>

        <Heading
          tag="h1"
          cn="text-xl md:text-2xl  font-bold text-center text-gray-900 mb-3"
        >
          Frontend Developer Available
        </Heading>

        <Paragraph cn="text-sm md:text-base text-gray-600 leading-relaxed text-balance text-center mb-4">
          ReactJS & NextJS developer. Experienced in building apps from scratch,
          now seeking a full-time role.
        </Paragraph>

        <div className="border-t border-dashed border-black/30 mb-4"></div>

        <div className="flex flex-wrap gap-3">
          <a
            href="mailto:vaibhav.pandey1508@gmail.com"
            className="flex-1 text-center px-4 py-2 bg-black text-white text-xs sm:text-sm tracking-wide uppercase rounded-none hover:bg-gray-800 transition "
            aria-label="Contact Vaibhav through his email"
          >
            Email Contact
          </a>
          <a
            href="https://www.linkedin.com/in/devxvaibhav"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 border border-black text-xs sm:text-sm tracking-wide uppercase rounded-none hover:bg-gray-100 transition"
            aria-label="Contact Vaibhav through LinkedIn"
          >
            LinkedIn
          </a>
        </div>
      </div> */}
    </Container>
  );
};

export default Testimonials;
