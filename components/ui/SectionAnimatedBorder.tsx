import React, { ReactNode } from "react";

interface SectionAnimatedBorderProps {
  children: ReactNode;
  className?: string;
}

const SectionAnimatedBorder: React.FC<SectionAnimatedBorderProps> = ({
  children,
  className
}) => {
  return (
    <div className="border border-border-1 rounded-lg">
      <div
        className={`box-linear-animation relative z-40 ${className || ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionAnimatedBorder;
