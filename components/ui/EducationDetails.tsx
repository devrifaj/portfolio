"use client";
import { useAppContext } from "@/lib/context/appContext";
import { RiBookMarkedLine } from "react-icons/ri";
import Skeleton from "react-loading-skeleton";

const EducationDetails = () => {
  const { educations } = useAppContext();

  return (
    <div className="bg-bg-3 rounded-lg border border-border-1 md:p-10 p-4 relative h-full overflow-hidden">
      {/* Heading */}
      <div className="flex items-center">
        <RiBookMarkedLine className="text-primary-2 text-[32px]" />
        <h2 className="ml-2 mb-0 text-[33px] md:text-[42px]">Education</h2>
      </div>

      {/* Content */}
      <div className="h-full relative mt-8">
        {educations.length > 0 ? (
          <>
            <ul className="pl-4">
              {educations.map(
                ({ _id, start_date, end_date, isPresent, institute, desc }) => {
                  const startDate = new Date(start_date);
                  const endDate = end_date ? new Date(end_date) : null;

                  return (
                    <li
                      key={_id}
                      className="relative z-10 mb-4 last:mb-0 before-item-dot education-before-item-dot"
                    >
                      <div className="flex flex-wrap md:flex-nowrap gap-2">
                        <p className="text-neutral-300 mb-0 text-[16px] whitespace-nowrap">
                          {startDate.getFullYear()} -{" "}
                          {isPresent
                            ? "Present"
                            : endDate
                            ? endDate.getFullYear()
                            : ""}
                          :
                        </p>
                        <div>
                          <span className="text-primary-2">{institute}</span>

                          <p className="text-neutral-0 mb-4">{desc}</p>
                        </div>
                      </div>
                    </li>
                  );
                }
              )}
            </ul>
            <div className="top-[10px] lg:top-[13px] h-[80%] left-[4.5px] lg:left-[5px] absolute border-l border-border-1 z-0"></div>
          </>
        ) : (
          <div>
            <Skeleton
              count={4}
              height={62}
              containerClassName="flex-1"
              style={{ marginBottom: "15px" }}
            />
          </div>
        )}
      </div>

      {/* Overly */}
      <div className="bg-overlay absolute bottom-0 left-0 z-10"></div>
    </div>
  );
};

export default EducationDetails;
