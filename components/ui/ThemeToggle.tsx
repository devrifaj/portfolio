'use client';

import React, { useEffect, useState } from 'react';
import { useThemeMode } from 'flowbite-react';
import { RiSunFill, RiContrast2Line } from "react-icons/ri";

const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeMode();
  const [mounted, setMounted] = useState(false);

  // Ensure the component only renders after the client has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Prevent rendering during SSR
    return null;
  }

  return (
    <button
      onClick={toggleMode}
      className="bg-none xl:bg-[#FFFFFF0D] dark:bg-none dark:xl:bg-[#FFFFFF0D] mr-14 xl:mr-0 p-6 h-20 w-[76px] flex-center xl:hover:bg-[#FFFFFF0D] rounded-none dark:xl:hover:bg-[#FFFFFF0D] focus:outline-none"
    >
      {mode === 'dark' ? (
        <RiSunFill size={24} color="#ffc107" />
      ) : (
        <RiContrast2Line size={24} color="#ffd45d" />
      )}
    </button>
  );
};

export default ThemeToggle;


//secondary code:
 
/* 'use client'
import React from 'react';
import { useThemeMode } from 'flowbite-react';
import { RiSunFill, RiContrast2Line } from "react-icons/ri";

const ThemeToggle = () => {
  const { mode, toggleMode } = useThemeMode();

  return (
    <button
      onClick={toggleMode}
      className="bg-[#FFFFFF0D] p-6 h-20 w-[76px] flex-center hover:bg-[#FFFFFF0D] rounded-none dark:hover:bg-[#FFFFFF0D] focus:outline-none"
    >
      {mode === 'dark' ? (
        // Dark mode active - show light mode icon with dark mode color
        <RiSunFill size={24} color="#ffc107" />
      ) : (
        // Light mode active - show dark mode icon with light mode color
        <RiContrast2Line size={24} color="#ffd45d" />
      )}
    </button>
  );
};

export default ThemeToggle;
 */