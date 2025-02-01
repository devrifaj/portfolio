"use client";
import { useAppContext } from "@/lib/context/appContext";
import SectionHeading from "./SectionHeading";
import Skeleton from "react-loading-skeleton";

const CooperationGitJournaling = () => {
  const { gits } = useAppContext();

  return (
    <div className="bg-bg-3 rounded-lg border border-border-1 md:p-10 p-4 relative h-full overflow-hidden">
      {/* Section Heading Start */}
      <SectionHeading sectionName="Git Journaling" />
      {/* Section Heading End */}

      {/* Git Lists Start */}
      <div className="h-full relative mt-6 mb-0">
        {gits.length > 0 ? (
          <>
            <ul className="pl-4">
              {gits.map(({ _id, date, title }) => {
                const gitDate = new Date(date);
                const formattedDate = gitDate.toLocaleDateString("en-US", {
                  day: "2-digit",
                  month: "long",
                });

                return (
                  <li
                    key={_id}
                    className="relative mb-4 last:mb-0 before-item-dot education-before-item-dot z-10"
                  >
                    <div className="flex xl:flex-nowrap flex-wrap gap-2">
                      <p className="text-neutral-300 whitespace-nowrap mb-0 text-[16px]">
                        {formattedDate}:
                      </p>
                      <p className="text-neutral-0 mb-4">{title}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="top-[12px] lg:top-[15px] h-[90%] left-[4.5px] lg:left-[5px] absolute border-l border-border-1 z-0"></div>
          </>
        ) : (
          <div>
            <Skeleton
              count={5}
              height={62}
              containerClassName="flex-1"
              style={{ marginBottom: "15px" }}
            />
          </div>
        )}
      </div>
      {/* Git Lists End */}

      <div className="bg-overlay absolute bottom-0 left-0 z-10"></div>
    </div>
  );
};

export default CooperationGitJournaling;
