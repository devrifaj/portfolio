"use client";
import { useAppContext } from "@/lib/context/appContext";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";
import Skeleton from "react-loading-skeleton";

const MySkillsSlide = () => {
  const { technologies } = useAppContext();

  // Separate Brands by Position
  const topTechs = technologies.filter(
    (skill) => skill.skill_position === "Top"
  );
  const bottomTechs = technologies.filter(
    (skill) => skill.skill_position === "Bottom"
  );

  return (
    <div className="flex flex-col">
      <div className="lg:w-5/6 md:w-3/4 mx-4 md:mx-auto overflow-hidden">
        {/* Marquee For Left-direction Brands */}
        {technologies.length > 0 ? (
          <ul className="flex p-0 overflow-hidden">
            <Marquee pauseOnHover={true} speed={60} direction="right">
              {topTechs.map(
                ({ _id, tech_name, tech_img_url, tech_official_url }) => (
                  <li key={_id} className="mx-[15px] text-center float-right" title={tech_name}>
                    <Link
                      href={tech_official_url}
                      target="_blank"
                      className="bg-[#f8f8f8] dark:bg-neutral-800 border border-border-1 w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] leading-[70px] sm:leading-[80px] inline-flex items-center justify-center text-center align-middle rounded-lg hover:bg-[#242424] dark:hover:bg-[#242424] hover:border-none dark:hover:!border-0 hover:text-primary-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                    >
                      <img
                        src={tech_img_url}
                        alt={tech_name}
                        className="w-auto h-auto"
                      />
                    </Link>
                  </li>
                )
              )}
            </Marquee>
          </ul>
        ) : (
          <Skeleton height={80}/>
        )}
      </div>

      <div className="lg:w-8/12 md:w-7/12 w-5/6 mx-auto overflow-hidden mt-9">
        {/* Marquee For Right-direction Brands */}
        {technologies.length > 0 ? (
          <ul className="flex p-0 overflow-hidden">
            <Marquee pauseOnHover={true} speed={60} direction="left">
              {bottomTechs.map(
                ({ _id, tech_name, tech_img_url, tech_official_url }) => (
                  <li key={_id} className="mx-[15px] text-center float-left" title={tech_name}>
                    <Link
                      href={tech_official_url}
                      target="_blank"
                      className="bg-[#f8f8f8] dark:bg-neutral-800 border border-border-1 w-[70px] sm:w-[80px] h-[70px] sm:h-[80px] leading-[70px] sm:leading-[80px] inline-flex items-center justify-center text-center align-middle rounded-lg hover:bg-[#242424] dark:hover:bg-[#242424] hover:border-none dark:hover:!border-0 hover:text-primary-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                    >
                      <img
                        src={tech_img_url}
                        alt={tech_name}
                        className="w-auto h-auto"
                      />
                    </Link>
                  </li>
                )
              )}
            </Marquee>
          </ul>
        ) : (
          <Skeleton height={80}/>
        )}
      </div>
    </div>
  );
};

export default MySkillsSlide;
