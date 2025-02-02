"use client";
import Image from "next/image";
import React from "react";
import HeroCarouselScroll from "../ui/HeroCarouselScroll";
import Link from "next/link";
import { RiDownloadLine } from "react-icons/ri";
import SectionAnimatedBorder from "../ui/SectionAnimatedBorder";
import { useAppContext } from "@/lib/context/appContext";
import Skeleton from "react-loading-skeleton";

const Hero = () => {
  const { hero } = useAppContext();

  const description = hero?.desc.replace(
    new RegExp(`(${hero?.desc_highlighted_text})`, "g"),
    '<span class="text-secondary-2">$1</span>'
  );

  return (
    <section id="about" className="pb-4">
      <SectionAnimatedBorder>
        <div className="flex flex-wrap py-[60px] items-start lg:items-center xl:items-start">
          {/* Hero Left Start */}
          <div className="w-full lg:w-1/2 xl:w-5/12 lg:pl-6 lg:pr-[12px] lg:text-start text-center">
            {hero ? (
              <div className="relative lg:mb-0 mb-8 flex-center md:flex-none">
                <Image
                  src={hero.hero_img_url}
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
            ) : (
              <div className="mx-4 lg:mx-0">
                <Skeleton
                  className="w-[300px] h-[370px] md:w-[513px] md:h-[462px]"
                  style={{ borderRadius: "10px" }}
                />
              </div>
            )}
          </div>
          {/* Hero Left End */}

          {/* Hero Right Start */}
          <div className="flex-none lg:w-1/2 lg:mx-auto w-full pl-[12px] pr-[12px]">
            <div className="lg:p-0 md:p-12 p-4">
              {/* Typewriter Start */}
              {hero ? (
                <div className="text-secondary-2 flex items-center">
                  {"<span>"}
                  <div className="text-neutral-0 !m-0 flex items-center">
                    <h1 className="overflow-hidden border-r-[0.15em] leading-[1.2] border-orange-300 whitespace-nowrap mt-0 mb-0 mr-auto tracking-[0.15em] animate-typing text-[16px] font-medium inline-block">
                      {hero.headline}
                    </h1>
                  </div>
                  {"</span>"}
                </div>
              ) : (
                <Skeleton height={30} style={{ marginBottom: 20 }} />
              )}
              {/* Typewriter End */}

              {/* Hero Title Start */}
              {hero ? (
                <h1 className="text-[50px] font-medium my-4 leading-[1.2]">
                  {hero.first_title}{" "}
                  <span className="text-linear-4">
                    {`{`}
                    {hero.middle_title}
                    {`}`}{" "}
                  </span>
                  {hero.last_title}
                  <span className="animate-flicker">_</span>
                </h1>
              ) : (
                <div className="mb-5">
                  <Skeleton count={2} height={40} style={{ marginBottom: 8 }} />
                </div>
              )}
              {/* Hero Title End */}

              {/* Hero Paragraph Start */}
              <>
                {hero ? (
                  <div className="mb-10 text-neutral-0 text-[14px] md:text-base">
                    <span className="text-secondary-2 inline-block">
                      {"<p>"}
                    </span>
                    <div
                      className="inline-block"
                      dangerouslySetInnerHTML={{ __html: description || "" }}
                    />
                    <span className="text-secondary-2 inline-block">
                      {"</p>"}
                    </span>
                  </div>
                ) : (
                  <div className="mb-6">
                    <Skeleton
                      count={5}
                      height={20}
                      style={{ marginBottom: 4, marginTop: 4 }}
                    />
                  </div>
                )}
              </>
              {/* Hero Paragraph End */}

              {/* Carousel Start */}
              <>
                {hero ? (
                  <HeroCarouselScroll />
                ) : (
                  <Skeleton height={60} style={{ marginBottom: 18 }} />
                )}
              </>
              {/* Carousel End */}

              {/* Resume Download Start */}
              <>
                {hero ? (
                  <Link
                    href={hero.hero_pdf_url}
                    className="inline-flex items-center gap-2 transition-all duration-300 ease-in-out mr-2 text-neutral-300 pl-0 px-6 py-[17px] !font-secondary text-[14px] font-bold mt-6"
                    download={true}
                    target="_blank"
                  >
                    <RiDownloadLine size={24} className="text-primary-2" />[
                    Download my Resume ]
                  </Link>
                ) : (
                  <Skeleton
                    height={40}
                    width={"50%"}
                    style={{ marginBottom: 4, marginTop: 20 }}
                  />
                )}
              </>

              {/* Resume Download End */}
            </div>
          </div>
          {/* Hero Right End */}
        </div>
      </SectionAnimatedBorder>
    </section>
  );
};

export default Hero;
