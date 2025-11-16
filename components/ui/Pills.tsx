import React from "react";
import Paragraph from "./Paragraph";

interface PillsProps {
  cn?: string;
  children: React.ReactNode;
  label?: string;
  status: "info" | "success" | "warning";
}

const statusClass = {
  info: `bg-linear-to-r from-gray-200 to-gray-100 text-neutral-800 ring ring-gray-200`,
  success: `text-green-700 bg-gradient-to-r from-green-100 to-emerald-100 ring ring-green-700`,
  warning: `text-red-700 bg-gradient-to-r from-red-50 to-red-100 ring ring-red-700`,
};

const Pills: React.FC<PillsProps> = ({
  children,
  cn,
  label,
  status = "info",
}) => {
  return (
    <div aria-label={label}>
      <Paragraph
        cn={`px-2 py-1 text-xs rounded-lg body ${statusClass[status]} ${cn}`}
      >
        {children}
      </Paragraph>
    </div>
  );
};

export default Pills;
