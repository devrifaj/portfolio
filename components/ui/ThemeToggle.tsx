'use client';
import React, { useEffect, useState } from 'react';
import { RiSunFill, RiContrast2Line } from "react-icons/ri";

const ThemeToggle = () => {
  const [mode, setMode] = useState('dark');

  useEffect(() => {
    // Check the user's saved theme on mount
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setMode(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  // Theme toggle function
  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark';
    setMode(newMode);
    localStorage.setItem('theme', newMode);
    document.documentElement.classList.toggle('dark', newMode === 'dark');
  };

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
