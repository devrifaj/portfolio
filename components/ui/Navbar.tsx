import React from "react";
import NavMenu from "./NavMenu";
import NavContainer from "./NavContainer";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

interface NavbarProps {
  setIsOffCanvasOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>; // Add mobile nav toggle prop
}

const Navbar: React.FC<NavbarProps> = ({ setIsOffCanvasOpen, setIsMobileNavOpen }) => {
  return (
    <nav className="rounded-lg border relative top-[22px] border-border-1 z-50 bg-[#333a32] dark:bg-bg-3">
      <div className="flex">
        {/* nav menu start */}
        <div className="hidden md:block">
          <NavMenu setIsOpen={setIsOffCanvasOpen} />
        </div>

        {/* navlinks start */}
        <div className="flex-1">
          <NavContainer />
        </div>

        {/* dark mode toggle */}
        <div>
          <ThemeToggle />
        </div>

        {/* mobile menu start */}
        <div className="block xl:hidden">
          <MobileMenu setIsMobileNavOpen={setIsMobileNavOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
