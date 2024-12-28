"use client";
import { useEffect, useState } from "react";
import { RiArrowUpLine } from "react-icons/ri";

const ScrollProgressButton = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress = (scrollTop / windowHeight) * 100;

    setScrollProgress(progress);
    setShowButton(scrollTop > 0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-8 w-12 h-12 rounded-[10px] flex-center cursor-pointer bg-bg-3 z-40 ${
        showButton
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible translate-y-3"
      }`}
      onClick={scrollToTop}
      style={{
        background: `conic-gradient(
          var(--theme-primary-2) ${scrollProgress}%, 
          var(--bg-3) ${scrollProgress}%
        )`,
        boxShadow: "inset 0 0 0 0.1rem rgba(227, 229, 233, 0.25)",
        transition: "all 0.2s linear, margin-right 0s",
      }}
    >
      <div className="w-11 h-11 rounded-[10px] bg-bg-3 flex-center text-primary-2">
        <RiArrowUpLine size={24} />
      </div>
    </div>
  );
};

export default ScrollProgressButton;
