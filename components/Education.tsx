import React from "react";
import SectionAnimatedBorder from "./ui/SectionAnimatedBorder";
import EducationDetails from "./ui/EducationDetails";
import { RiBookMarkedLine } from "react-icons/ri";
import { RiQrScan2Line } from "react-icons/ri";
import { educationData, researchData } from "@/data";

const Education = () => {
  return (
    <section id="resume" className="mb-8">
      <div className="lg:flex gap-6">
        {/* Left side */}
        <div className="lg:w-1/2 pt-4">
          <SectionAnimatedBorder className="md:p-10 p-4">
            <EducationDetails
              sectionTitle="Education"
              icon={<RiBookMarkedLine className="text-primary-2 text-[32px]" />}
              data={educationData}
            />
          </SectionAnimatedBorder>
        </div>

        {/* Right side */}
        <div className="lg:w-1/2 pt-4">
          <div className="bg-bg-3 rounded-lg border border-border-1 md:p-10 p-4 relative h-full overflow-hidden">
            <EducationDetails
              sectionTitle="Researched"
              icon={<RiQrScan2Line className="text-primary-2 text-[32px]" />}
              data={researchData}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
