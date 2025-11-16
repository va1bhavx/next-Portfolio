import Container from "../ui/Container";
import Heading from "../ui/Heading";
import { BrainCircuit, ChevronRight, Link2 } from "lucide-react";
import Paragraph from "../ui/Paragraph";
import Button from "../ui/Button";
import { ImageCarousel } from "../ui/ImageCarousel";
import Link from "next/link";
const IMAGES = [
  "/projects/busybrains/home.webp",
  "/projects/busybrains/login.webp",
  "/projects/busybrains/signup.webp",
  "/projects/busybrains/dashboard.webp",
  "/projects/busybrains/user-management.webp",
  "/projects/busybrains/work-page.webp",
];

const ExperienceSection = () => {
  return (
    <Container cn="items-start">
      <div className="flex items-start justify-start self-start mb-8">
        <Heading
          tag="h1"
          cn="text-2xl sm:text-3xl header bg-[#2f2f2f] px-2 text-white w-max break-words h-[40px] flex items-center"
        >
          Experience
        </Heading>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
        {/* Left Column - Company */}
        <div className="flex flex-col gap-4">
          <Heading
            tag="h1"
            cn="text-3xl header flex items-center gap-2 text-gray-900"
          >
            <BrainCircuit className="text-indigo-600" />
            BusyBrains.ai
          </Heading>

          <Heading
            tag="h2"
            cn="text-sm md:text-xl font-semibold bg-[#2f2f2f] text-white px-4 py-2 w-max"
          >
            React Developer – BusyBrains
          </Heading>

          <div>
            <ImageCarousel images={IMAGES} />
          </div>
        </div>

        {/* Right Column - Description */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <Paragraph cn="text-gray-600 leading-relaxed">
            In 2025, I joined BusyBrains as an Associate React Developer, where
            my role was to bring ideas to life using Next.js on the frontend. My
            very first assignment was a real estate web application, somewhat
            like “Naukri,” but designed for the property world known as
            'BitsndBricks'.
          </Paragraph>

          <Paragraph cn="text-gray-600 leading-relaxed">
            On this platform, real estate professionals whether companies or
            individuals could sign up, register their profiles, and start
            creating or applying for different works. From scratch, I built the
            entire frontend ecosystem:
          </Paragraph>

          {/* List with styled bullets */}
          <ul className=" body space-y-2 pl-5 list-disc text-gray-600">
            <li>Login and authentication flows</li>
            <li>Company registration and user onboarding</li>
            <li>Project creation, work management, and applications</li>
            <li>
              Three dedicated views — service view, client view, and landing
              page
            </li>
          </ul>

          <Paragraph cn="text-gray-600 leading-relaxed">
            This project gave me the chance to architect a complete frontend
            solution, turning complex workflows into a smooth user experience.
          </Paragraph>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={"https://bitsndbricks.com"}
              aria-label="View Vaibhav Kumar's BitsndBricks project live"
            >
              <Button size="sm" rightIcon={<Link2 size={16} />}>
                Live
              </Button>
            </a>
            <Link
              href="/experience/busybrains"
              aria-label="Read more about Vaibhav Kumar's BitsndBricks project"
            >
              <Button
                variant="ghost"
                size="sm"
                rightIcon={<ChevronRight size={16} />}
              >
                Read More about BitsndBricks
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ExperienceSection;
