import { cooperationGits } from "@/data";
import React from "react";
import CooperationHeading from "./CooperationHeading";

const CooperationGitJournaling = () => {
  return (
    <div className="bg-bg-3 rounded-lg border border-border-1 md:p-10 p-4 relative h-full overflow-hidden">
      {/* Cooperation Heading Start */}
      <CooperationHeading sectionName="Git Journaling" />
      {/* Cooperation Heading End */}

      {/* Git Lists Start */}
      <div className="h-full relative">
        <ul className="pl-4 flex flex-col gap-6 lg:gap-0 justify-around h-full relative">
          {cooperationGits.map(({ id, date, title }) => (
            <li key={id} className="relative z-1 git-item-dot z-10">
              <div className="flex items-center gap-2">
                <p className="text-neutral-300 whitespace-nowrap lg:-mt-5">
                  {date}:
                </p>
                <span className="text-neutral-0">{title}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="top-[10px] lg:top-[40px] h-[90%] left-[4.5px] lg:left-[5px] absolute border-l border-border-1 z-0"></div>
      </div>
      {/* Git Lists End */}

      <div className="bg-overlay absolute bottom-0 left-0 z-10"></div>
    </div>
  );
};

export default CooperationGitJournaling;
