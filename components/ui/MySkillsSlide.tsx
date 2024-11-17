import { mySkillsTechnologies } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const MySkillsSlide = () => {
  // Separate Brands by Direction
  const leftBrands = mySkillsTechnologies.filter((skill) => skill.up);
  const rightBrands = mySkillsTechnologies.filter((skill) => skill.down);

  return (
    <div className="flex flex-col">
      <div className="lg:w-5/6 md:w-3/4 mx-4 md:mx-auto overflow-hidden">
        {/* Marquee For Left-direction Brands */}
        <ul className="flex p-0 overflow-hidden">
          <Marquee pauseOnHover={true} speed={35} direction="right">
            {leftBrands.map(({ id, name, img, officialUrl }) => (
              <li key={id} className="mx-[15px] text-center float-right">
                <Link
                  href={officialUrl}
                  target="_blank"
                  className="bg-[#f8f8f8] dark:bg-neutral-800 border border-border-1 w-[80px] h-[80px] leading-[80px] inline-flex items-center justify-center text-center align-middle rounded-lg hover:bg-[#242424] dark:hover:bg-[#242424] hover:border-none dark:hover:!border-0 hover:text-primary-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                >
                  <Image
                    src={img}
                    alt={name}
                    width={0}
                    height={0}
                    className="w-auto h-auto"
                  />
                </Link>
              </li>
            ))}
          </Marquee>
        </ul>
      </div>

      <div className="lg:w-8/12 md:w-7/12 w-5/6 mx-auto overflow-hidden mt-9">
        {/* Marquee For Right-direction Brands */}
        <ul className="flex p-0 overflow-hidden">
          <Marquee pauseOnHover={true} speed={35} direction="left">
            {rightBrands.map(({ id, name, img, officialUrl }) => (
              <li
                key={id}
                className="mx-[15px] text-center float-left"
              >
                <Link
                  href={officialUrl}
                  target="_blank"
                  className="bg-[#f8f8f8] dark:bg-neutral-800 border border-border-1 w-[80px] h-[80px] leading-[80px] inline-flex items-center justify-center text-center align-middle rounded-lg hover:bg-[#242424] dark:hover:bg-[#242424] hover:border-none dark:hover:!border-0 hover:text-primary-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                >
                  <Image
                    src={img}
                    alt={name}
                    width={0}
                    height={0}
                    className="w-auto h-auto"
                  />
                </Link>
              </li>
            ))}
          </Marquee>
        </ul>
      </div>
    </div>
  );
};

export default MySkillsSlide;
