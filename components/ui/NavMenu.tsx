import React from "react";
import { RiMenu2Fill } from "react-icons/ri";

interface NavMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavMenu: React.FC<NavMenuProps> = ({ setIsOpen }) => {
  return (
    <button
      className="bg-[#FFFFFF0D] p-6 h-20 w-[70px] lg:w-[76px] hidden md:flex items-center justify-center text-white"
      onClick={() => setIsOpen(true)}
    >
      <RiMenu2Fill size={24} className="leading-6" />
    </button>
  );
};

export default NavMenu;