import React from "react";

interface HeadingProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  cn?: string;
  label?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  tag = "h1",
  cn = "header",
  label,
  children,
}) => {
  const Tag = tag;

  return (
    <Tag className={`${cn && cn}  leading-none header`} aria-label={label}>
      {children}
    </Tag>
  );
};

export default Heading;
