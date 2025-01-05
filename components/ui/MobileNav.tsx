"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants";

interface MobileNavProps {
  setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNav: React.FC<MobileNavProps> = ({ setIsMobileNavOpen }) => {
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname(); // Get the current pathname

  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === "/") {
        setActiveHash(window.location.hash || "#about");
      } else {
        setActiveHash(window.location.hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [pathname]);

  return (
    <div
      className="transform translate-x-0 translate-y-0 fixed top-0 right-0 max-w-[380px] w-full min-h-screen transition-all !duration-500 ease-custom-ease-2 bg-neutral-1000 z-[1000]"
      style={{ boxShadow: "0 0 15px 0 rgba(0, 0, 0, 0.09)" }}
    >
      <div className="h-full overflow-x-hidden overflow-y-auto p-0 pb-[30px]">
        {/* Nav Heading Start */}
        <div className="border-b border-neutral-200 relative flex-between mb-[25px] py-5 px-6">
          {/* Mobile Nav Logo Start */}
          <Link href="/" className="items-center inline-flex">
            <Image src="/favicon.svg" width={36} height={36} alt="logo" />
            <span className="fs-4 ml-2 text-neutral-0 text-[23px]">
              Rifajul.dev
            </span>
          </Link>
          {/* Mobile Nav Logo End */}

          {/* Nav Close Icon Start */}
          <button
            className="inline-block relative h-10 w-10 bg-neutral-900 border border-[#495057] rounded-lg"
            onClick={() => setIsMobileNavOpen(false)}
          >
            <span className="absolute left-[10px] w-[20px] h-[1px] hidden"></span>
            <span className="block absolute left-[10px] w-[20px] h-[1px] rotate-45 top-[18px] bg-neutral-0"></span>
            <span className="block absolute left-[10px] w-[20px] h-[1px] -rotate-45 bottom-[19px] bg-neutral-0"></span>
          </button>
          {/* Nav Close Icon End */}
        </div>
        {/* Nav Heading End */}

        {/* Nav Body Start */}
        <div className="px-[30px]">
          <div className="border-b border-[#FFFFFF26]">
            {/* Mobile Nav Links Start */}
            <nav>
              <ul className="pl-0">
                {navItems.map(({ label, route }) => {
                  const isActive = activeHash === route;

                  return (
                    <li className="block relative p-0 mb-5" key={route}>
                      <Link
                        href={route}
                        className={`text-base leading-[26px] font-normal inline-block py-2 px-4 rounded transition-all !duration-300 ${
                          isActive
                            ? "text-primary-2"
                            : "text-neutral-0 hover:text-primary-2"
                        }`}
                        onClick={() => setIsMobileNavOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
            {/* Mobile Nav Links End */}
          </div>
        </div>
        {/* Nav Body End */}
      </div>
    </div>
  );
};

export default MobileNav;
