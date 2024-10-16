import React from "react";

interface MobileMenuProps {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMobileNavOpen }) => {
  const handleMenuClick = () => {
    setIsMobileNavOpen((prev) => !prev); // Toggle mobile nav visibility
  };

  return (
    <div
      onClick={handleMenuClick}
      className="absolute w-[40px] h-[40px] cursor-pointer transition-all !duration-300 ease-custom-ease-2 top-[20px] right-[18px] z-50 bg-neutral-900 burger-icon-white border border-border-1 rounded-lg text-white"
    >
      <span className="block absolute left-[10px] w-[20px] h-[1px] top-[13px] bg-neutral-0"></span>
      <span className="block absolute left-[10px] w-[20px] h-[1px] top-[19px] bg-neutral-0"></span>
      <span className="block absolute left-[10px] w-[20px] h-[1px] bottom-[12px] bg-neutral-0"></span>
    </div>
  );
};

export default MobileMenu;
