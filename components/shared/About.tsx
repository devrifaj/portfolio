import Image from "next/image";
import React from "react";
import HeroCarouselScroll from "../ui/HeroCarouselScroll";
import Link from "next/link";
import { RiDownloadLine } from "react-icons/ri";
import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";

const About = () => {
  return (
    <section id="about" className="pb-4">
      <SectionAnimatedBorder>
        <div className="flex flex-wrap items-end py-[60px]">
          {/* Hero Left Start */}
          <div className="w-full lg:w-5/12 lg:pl-6 lg:pr-[12px] lg:text-start text-center">
            <div className="relative lg:mb-0 mb-8 flex-center md:flex-none">
              <Image
                src="/hero/people.png"
                className="w-[386px] h-[348px] md:w-[513px] md:h-[462px] lg:w-full lg:h-full"
                width={505}
                height={455}
                alt="rifajul"
              />

              <div className="absolute -bottom-[3.75rem] pb-[30px]">
                <Image
                  src="/hero/icon.svg"
                  width={81}
                  height={73}
                  alt="rifajul"
                />
              </div>
            </div>
          </div>
          {/* Hero Left End */}

          {/* Hero Right Start */}
          <div className="flex-none lg:w-1/2 lg:mx-auto w-full pl-[12px] pr-[12px]">
            <div className="lg:p-0 md:p-16 p-4">
              {/* Typewriter Start */}
              <div className="text-secondary-2 flex items-center">
                {"<span>"}
                <div className="text-neutral-0 !m-0 flex items-center">
                  <h1 className="overflow-hidden border-r-[0.15em] leading-[1.2] border-orange-300 whitespace-nowrap mt-0 mb-0 mr-auto tracking-[0.15em] animate-typing text-[16px] font-medium inline-block">
                    Hey, I&apos;m Rifajul
                  </h1>
                </div>
                {"</span>"}
              </div>
              {/* Typewriter End */}

              {/* Hero Heading Start */}
              <h1 className="text-[50px] font-medium my-4 leading-[1.2]">
                Senior{" "}
                <span className="text-linear-4">
                  {`{Full`}
                  <br />
                  {`Stack}`}
                </span>
                Web & App developer<span className="animate-flicker">_</span>
              </h1>
              {/* Hero Heading End */}

              {/* Hero Paragraph Start */}
              <p className="mb-10 text-secondary-2 text-[14px] md:text-base">
                {"<p>"}
                <span className="text-neutral-0">
                  With expertise in cutting-edge technologies such as
                </span>{" "}
                <span>NodeJS</span>, <span>React</span>, <span>Angular</span>,
                and <span>Laravel</span>
                <span className="text-neutral-0">
                  ... I deliver web solutions that are both innovative and
                  robust.
                </span>
                {"</p>"}
              </p>
              {/* Hero Paragraph End */}

              {/* Carousel Start */}
              <div className="flex gap-x-6">
                <div className="flex-none w-7/12 mt-10 lg:mt-0">
                  <HeroCarouselScroll />
                </div>

                <div className="flex-none w-5/12 flex items-end">
                  <span className="text-base font-normal text-neutral-300 mb-2">
                    ...and more
                  </span>
                </div>
              </div>
              {/* Carousel End */}

              {/* Resume Download Start */}
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 transition-all duration-300 ease-in-out mr-2 text-neutral-300 pl-0 px-6 py-[17px] !font-secondary text-[14px] font-bold mt-6"
                target="_blank"
              >
                <RiDownloadLine size={24} className="text-primary-2" />[
                Download my Resume ]
              </Link>
              {/* Resume Download End */}
            </div>
          </div>
          {/* Hero Right End */}
        </div>
      </SectionAnimatedBorder>
    </section>
  );
};

export default About;
