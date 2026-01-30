import React from "react";

interface ParagraphProps {
  cn?: string;
  label?: string;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({
  cn = "text-neutral-300 text-md",
  label,
  children,
}) => {
  return (
    <p
      className={`${cn} transition-all duration-200  body `}
      aria-label={label}
    >
      {children}
    </p>
  );
};

export default Paragraph;
