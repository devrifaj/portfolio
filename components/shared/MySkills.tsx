'use client'
import SectionHeading from "../ui/SectionHeading";
import RotateAnimation from "../ui/RotateAnimation";
import { mySkills } from "@/data";
import MySkillsSlide from "../ui/MySkillsSlide";
import { skillDisplayNames } from "@/constants";
import { useAppContext } from "@/lib/context/appContext";
import Skeleton from "react-loading-skeleton";

const MySkills = () => {
  const { skills } = useAppContext();

  // Filter out unnecessary keys
  const filteredSkills = Object.entries(skills || {}).filter(
    ([key]) => !["_id", "createdAt", "updatedAt", "__v"].includes(key)
  );

  return (
    <section id="skills" className="pb-[60px]">
      <div className="rounded-lg bg-bg-3 border border-border-1 relative overflow-hidden">
        <div className="relative z-40 py-[60px]">
          <div className="relative z-20">
            {/* Section Heading */}
            <SectionHeading
              sectionName="Projects"
              headings={[{ title: "My Skills" }]}
              center={true}
            />

            <div className="mt-16">
              <div className="lg:flex">
                {/* Left Side */}
                <div className="lg:w-1/2">
                  <MySkillsSlide />
                </div>

                {/* Right Side */}
                <div className="lg:w-1/2 md:border-l border-border-1 lg:mt-0 mt-8 md:pl-0 pl-8">
                  <div className="md:w-5/6 mx-auto">
                    {filteredSkills.length > 0 ? (
                      <ul className="pl-4 flex gap-4 flex-col justify-between h-full text-neutral-0">
                        {filteredSkills.map(([key, mySkills]) => (
                          <li
                            key={key}
                            className="before-item-dot my-skills-item-dot relative"
                          >
                            <div className="flex flex-col md:flex-row gap-2">
                              <p className="text-nowrap mb-0">
                                {skillDisplayNames[key] || key}:{" "}
                              </p>
                              <span className="text-neutral-300">
                                {Array.isArray(mySkills)
                                  ? mySkills.join(", ")
                                  : mySkills}
                              </span>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="w-4/5">
                        <Skeleton count={5} height={20} style={{marginBottom: 20}}/>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rotate Animation */}
        <RotateAnimation position="top" />
      </div>
    </section>
  );
};

export default MySkills;
