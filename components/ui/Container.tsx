import React from "react";

interface ContainerProps {
  label?: string;
  cn?: string;
  children: React.ReactNode;
  tag?: string;
}

const Container: React.FC<ContainerProps> = ({
  label,
  children,
  cn,
  tag = "section",
}) => {
  return (
    <section
      className={`${cn}  mx-auto max-w-4xl w-full flex flex-col justify-center items-center px-6 sm:px-4 py-8 border-b-2 border-neutral-700`}
      aria-label={label}
    >
      {children}
    </section>
  );
};

export default Container;
