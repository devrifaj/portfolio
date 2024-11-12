import React from "react";

interface DataItem {
  id: number;
  date: string;
  institute?: string;
  title?: string;
  desc: string;
}

interface EducationDetailsProps {
  sectionTitle: string;
  icon: JSX.Element;
  data: DataItem[];
}

const EducationDetails: React.FC<EducationDetailsProps> = ({
  sectionTitle,
  icon,
  data,
}) => {
  return (
    <>
      {/* Heading */}
      <div className="flex items-center">
        {icon}
        <h2 className="ml-2 mb-0">{sectionTitle}</h2>
      </div>

      {/* Content */}
      <div className="flex flex-col h-full relative mt-8">
        <ul className="pl-4">
          {data.map((item) => (
            <li
              key={item.id}
              className="relative z-10 mb-4 before-item-dot education-before-item-dot"
            >
              <div className="flex gap-2">
                <p className="text-neutral-300 mb-0 text-[16px] whitespace-nowrap">
                  {item.date}:
                </p>
                <div>
                  {item.institute ? (
                    <span className="text-primary-2">{item.institute}</span>
                  ) : (
                    <span className="text-primary-2">{item.title}</span>
                  )}
                  <p className="text-neutral-0 mb-4">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="top-[10px] lg:top-[13px] h-[80%] left-[4.5px] lg:left-[5px] absolute border-l border-border-1 z-0"></div>
      </div>

      {/* Overly */}
      <div className="bg-overlay absolute bottom-0 left-0 z-10"></div>
    </>
  );
};

export default EducationDetails;
