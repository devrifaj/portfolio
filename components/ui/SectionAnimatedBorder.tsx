import React, { ReactNode } from "react";

interface SectionAnimatedBorderProps {
  children: ReactNode;
}

const SectionAnimatedBorder: React.FC<SectionAnimatedBorderProps> = ({
  children,
}) => {
  return (
    <div className="border border-border-1 rounded-lg">
      <div
        className="box-linear-animation relative z-50"
      >
        {children}
      </div>
    </div>
  );
};

export default SectionAnimatedBorder;
