import React from "react";
import { useSwiper } from "swiper/react";
import { RiArrowLeftLine } from "react-icons/ri";
import { RiArrowRightLine } from "react-icons/ri";

const ProjectsSliderNavButton = () => {
  const swiper = useSwiper();
  return (
    <div className="absolute -bottom-4 right-0 gap-2 pb-12 pr-8 hidden md:flex z-40">
      {/* Prev Button */}
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-border-1 rounded-[30px] text-[24px] p-[10px] h-[50px] w-[50px] flex text-neutral-0 hover:text-primary-2 shadow-custom-shadow relative"
      >
        <RiArrowLeftLine size={30} />
      </button>

      {/* Next Button */}
      <button
        onClick={() => swiper.slideNext()}
        className="bg-border-1 rounded-[30px] text-[24px] p-[10px] h-[50px] w-[50px] flex text-neutral-0 hover:text-primary-2 shadow-custom-shadow relative"
      >
        <RiArrowRightLine size={30} />
      </button>
    </div>
  );
};

export default ProjectsSliderNavButton;
