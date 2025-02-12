"use client";
import { useAppContext } from "@/lib/context/appContext";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import Skeleton from "react-loading-skeleton";

const HeroCarouselScroll = () => {
  const { technologies } = useAppContext();
  console.log(technologies);

  return (
    <>
      {technologies.length > 0 ? (
        <div className="flex gap-x-6">
          <div className="flex-none w-7/12 mt-4 lg:mt-0">
            <div>
              <ul className="flex my-[10px] p-0 overflow-hidden">
                <Marquee pauseOnHover={true} speed={75}>
                  {technologies
                    .filter(({ show_in_hero }) => show_in_hero)
                    .map(
                      ({ _id, tech_name, tech_img_url, tech_official_url }) => (
                        <li key={_id} className="mx-[10px] text-center">
                          <Link
                            href={tech_official_url}
                            className="bg-[#f8f8f8] dark:bg-neutral-800 border border-border-1 w-[60px] h-[60px] leading-[60px] inline-flex items-center justify-center text-center align-middle rounded-lg hover:bg-[#242424] dark:hover:bg-[#242424] hover:border-none dark:hover:!border-0 hover:text-primary-2 hover:transition-all hover:duration-300 hover:ease-in-out"
                            target="_blank"
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
            </div>
          </div>

          <div className="flex-none w-5/12 flex items-end">
            <span className="text-base font-normal text-neutral-300 mb-2">
              ...and more
            </span>
          </div>
        </div>
      ) : (
        <Skeleton height={60} style={{ marginBottom: 18 }} />
      )}
    </>
  );
};

export default HeroCarouselScroll;
