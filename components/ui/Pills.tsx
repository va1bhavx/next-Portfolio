import React from "react";
import Paragraph from "./Paragraph";

interface PillsProps {
  cn?: string;
  children: React.ReactNode;
  label?: string;
  status?: "info" | "success" | "warning";
}

const statusClass = {
  info: `
    bg-neutral-800
    text-neutral-300
    border border-neutral-700
  `,
  success: `
    bg-green-900/30
    text-green-400
    border border-green-800
  `,
  warning: `
    bg-red-900/30
    text-red-400
    border border-red-800
  `,
};

const Pills: React.FC<PillsProps> = ({
  children,
  cn = "",
  label,
  status = "info",
}) => {
  return (
    <span aria-label={label}>
      <Paragraph
        cn={`
          px-2.5 py-1
          text-xs
          rounded-md
          leading-none
          ${statusClass[status]}
          ${cn}
        `}
      >
        {children}
      </Paragraph>
    </span>
  );
};

export default Pills;
