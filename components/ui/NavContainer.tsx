"use client";
import { navItems, navSocialItems } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const NavContainer = () => {
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();

  useEffect(() => {
    const handleHashChange = () => {
      if (pathname === "/") {
        setActiveHash("#about");
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
    <div className="flex-between h-full py-4 px-6">
      {/* Logo Start */}
      <div>
        <Link
          href="/"
          aria-label="Home"
          className="flex-center gap-2 text-white bg-transparent"
        >
          <Image src="/favicon.svg" width={36} height={36} alt="logo" />
          <span
            className="text-[23px] font-medium leading-normal"
            style={{
              background:
                "linear-gradient(270deg, rgba(255, 255, 255, 0.32) 0%, #fff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Rifajul.dev
          </span>
        </Link>
      </div>
      {/* Logo End */}

      {/* Nav Links Start */}
      <ul className="hidden xl:flex">
        {navItems.map(({ name, link }) => {
          const isActive = activeHash === link; // Compare the active hash with the link

          return (
            <li key={link}>
              <Link
                href={link}
                className={`text-base font-normal py-2 px-4 rounded hover:text-white transition-all !duration-300 ${
                  isActive ? "text-white" : "text-[#FFFFFF80]"
                }`}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
      {/* Nav Links End */}

      {/* Nav Social Links Start */}
      <ul className="hidden md:flex gap-4 text-white">
        {navSocialItems.map(({ link, icon: Icon }) => (
          <li key={link}>
            <Link
              href={link}
              className="flex items-center gap-2 hover:text-primary-2 transition"
            >
              {Icon && <Icon size={18} className="text-xl" />}
            </Link>
          </li>
        ))}
      </ul>
      {/* Nav Social Links End */}
    </div>
  );
};

export default NavContainer;