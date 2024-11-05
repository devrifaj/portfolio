import { technologies } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const HeroCarouselScroll = () => {
  return (
    <div>
      <ul className="flex my-[10px] p-0 overflow-hidden">
        <Marquee pauseOnHover={true} speed={35}>
          {technologies.map(({ id, name, img, officialUrl }) => (
            <li key={id} className="mx-[10px] text-center">
              <Link
                href={officialUrl}
                className="bg-[#f8f8f8] dark:bg-neutral-800 border border-border-1 w-[60px] h-[60px] leading-[60px] inline-flex items-center justify-center text-center align-middle rounded-lg hover:bg-[#242424] dark:hover:bg-[#242424] hover:border-none dark:hover:!border-0 hover:text-primary-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                target="_blank"
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
  );
};

export default HeroCarouselScroll;
