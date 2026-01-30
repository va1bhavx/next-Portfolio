import React from "react";
import Heading from "../Heading";
import Paragraph from "../Paragraph";

interface HeaderProps {
  heading: string;
  description: string;
  label: string;
  headingCn?: string;
}

const Header: React.FC<HeaderProps> = ({
  heading,
  description,
  label,
  headingCn,
}) => {
  return (
    <div className=" flex flex-col gap-2" aria-label={label}>
      <Heading
        tag="h1"
        cn={`text-[36px] font-bold ${headingCn ? headingCn : ""}`}
      >
        {heading}
      </Heading>
      <Paragraph cn="text-gray-500 w-full text-md">{description}</Paragraph>
    </div>
  );
};

export default Header;
