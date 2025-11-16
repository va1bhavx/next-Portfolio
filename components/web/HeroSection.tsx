import Container from "../ui/Container";
import Heading from "../ui/Heading";
import Paragraph from "../ui/Paragraph";
import Image from "next/image";
import Button from "../ui/Button";
import { Scroll } from "lucide-react";
import Link from "next/link";

const SKILLS = [
  { id: 1, name: "HTML", img: "/skills/html.webp" },
  { id: 2, name: "CSS", img: "/skills/css.webp" },
  { id: 3, name: "JavaScript", img: "/skills/js.webp" },
  { id: 4, name: "ReactJS", img: "/skills/react.webp" },
  { id: 5, name: "NextJS", img: "/skills/next.webp" },
  { id: 6, name: "TypeScript", img: "/skills/ts.webp" },
  { id: 7, name: "TailwindCSS", img: "/skills/tailwindcss.webp" },
  { id: 8, name: "Axios", img: "/skills/axios.webp" },
  { id: 9, name: "Redux", img: "/skills/redux.webp" },
];

const HeroSection = () => {
  return (
    <Container>
      <div className="flex gap-10  flex-col md:flex-row">
        <div className="w-1/2 md:w-1/3 lg:w-1/4 max-w-sm mx-auto md:mx-0">
          <Image
            src="/hero-img.webp"
            alt="Hero image of Vaibhav Kumar"
            width={400} // maximum width you expect
            height={400} // adjust to maintain aspect ratio
            className="w-full h-auto object-cover grayscale-75 hover:grayscale-0 duration-300 transition-colors ring ring-[#2f2f2f] rounded-md"
            sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            priority
          />
        </div>

        <div className="flex flex-col gap-4 w-full md:w-[75%]">
          <div className="flex items-center justify-between">
            <span className="px-2 py-0.5 rounded-md text-xs font-medium bg-linear-to-r from-blue-100 to-blue-200 text-blue-800 ring ring-blue-300">
              Special Edition
            </span>

            <Paragraph cn="text-balance text-gray-600 text-sm self-end">
              Published: 16/11/2025
            </Paragraph>
          </div>

          <div className="flex flex-wrap flex-col gap-3">
            <Heading
              tag="h1"
              cn="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl header bg-[#2f2f2f] px-2 text-white w-max break-words"
            >
              React Developer in town!!
            </Heading>
          </div>

          <div className="flex flex-col gap-4  ">
            <Paragraph cn="text-balance text-gray-600">
              <span className="font-bold text-3xl title">H</span>i, I'm{" "}
              <span className="font-bold">Vaibhav</span>, what started as luck
              turned into a full-blown obsession I stumbled into frontend
              development and somehow ended up arguing (and making peace) with
              JavaScript.
            </Paragraph>
            <Paragraph cn="text-balance text-gray-600">
              With over a year of ReactJS experience, I’m now diving deeper into
              the MERN stack, building projects that keep me up at night,
              powered by caffeine and curiosity. It’s not just code anymore it’s
              my way of making life.
            </Paragraph>
          </div>

          <div>
            <Heading
              tag="h1"
              cn="text-3xl font-serif font-bold tracking-wide uppercase border-b-2 border-gray-800 inline-block pb-1"
            >
              Skills
            </Heading>

            <div className="flex flex-wrap items-stretch gap-4 mt-6">
              {SKILLS.map((skill) => (
                <div
                  key={skill.id}
                  className="flex items-center gap-3 px-4 py-1 bg-[#fcfcfa] border-2 border-dotted border-gray-700  transition-all duration-300 cursor-default"
                >
                  <Image
                    src={skill.img}
                    alt={skill.name + " icon"}
                    width={22}
                    height={22}
                    priority
                    className="group-hover:grayscale-0 transition duration-300"
                  />
                  <Paragraph cn="text-gray-700 font-serif text-xs font-medium tracking-tight">
                    {skill.name}
                  </Paragraph>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            <Link
              href={
                "https://drive.google.com/file/d/150koLzSA1XvwjKbDMNNTqypAGwS-f7to/view?usp=sharing"
              }
              target="_blank"
              aria-label="View Vaibhav Kumar's resume PDF on Google Drive"
            >
              <Button rightIcon={<Scroll size={14} />} size="md">
                Resume{" "}
              </Button>
            </Link>
            {/* <Link href={"/about-me"}>
                <Button variant="ghost" size="md">
                  Know the Author
                </Button>
              </Link> */}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
