import React from "react";

interface CooperationHeadingProps {
  text?: string;
  circleColor?: string;
}

const CooperationHeading: React.FC<CooperationHeadingProps> = ({ text }) => {
  return (
    <div className="flex items-center">
      <svg
        className="text-primary-2 mr-2"
        xmlns="http://www.w3.org/2000/svg"
        width="5"
        height="6"
        viewBox="0 0 5 6"
        fill="none"
      >
        <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
      </svg>
      <span className="text-linear-4 flex items-center">{text}</span>
    </div>
  );
};

export default CooperationHeading;
