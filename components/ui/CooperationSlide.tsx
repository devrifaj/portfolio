import { cooperationBrands } from "@/data";
import React from "react";
import Marquee from "react-fast-marquee";

const CooperationSlide = () => {
  // Separate Brands by Direction
  const leftBrands = cooperationBrands.filter((brand) => brand.left);
  const rightBrands = cooperationBrands.filter((brand) => brand.right);

  return (
    <div>
      {/* Marquee For Left-direction Brands */}
      <ul className="flex my-[10px] p-0 overflow-hidden">
        <Marquee pauseOnHover={true} speed={35} direction="left">
          {leftBrands.map(({ id, name, brandLogo }) => (
            <li key={id} className="mx-[50px] float-left text-center">
              <img src={brandLogo} alt={name} />
            </li>
          ))}
        </Marquee>
      </ul>

      {/* Marquee For Right-direction Brands */}
      <ul className="flex my-[10px] p-0 overflow-hidden">
        <Marquee pauseOnHover={true} speed={35} direction="right">
          {rightBrands.map(({ id, name, brandLogo }) => (
            <li key={id} className="mx-[50px] float-left text-center">
              <img src={brandLogo} alt={name} />
            </li>
          ))}
        </Marquee>
      </ul>
    </div>
  );
};

export default CooperationSlide;
