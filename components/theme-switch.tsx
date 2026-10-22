"use client";

import React from "react";
import { motion } from "framer-motion";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";
import { useTheme } from "@/lib/hooks";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      type="button"
      role="switch"
      aria-checked={theme === "dark"}
      aria-label="Dark mode"
      onClick={toggleTheme}
      className="fixed z-[999] top-2 right-2 h-8 w-14 sm:top-[5.25rem] sm:right-6 sm:h-[3.25rem] sm:w-[5.5rem] lg:top-6 rounded-full border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] outline-none focus-visible:ring-2 focus-visible:ring-gray-400 hover:scale-105 active:scale-95 transition dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, bounce: 0.25 }}
    >
      <span className="absolute left-1 top-1 bottom-1 aspect-square rounded-full bg-gray-200 dark:bg-gray-700 transition-transform duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] dark:translate-x-6 sm:dark:translate-x-9" aria-hidden="true"></span>
      <span className="absolute left-1 top-1 bottom-1 grid aspect-square place-items-center">
        <BsSunFill className="text-sm sm:text-lg text-gray-950 dark:text-gray-500 transition-colors" aria-hidden="true" />
      </span>
      <span className="absolute right-1 top-1 bottom-1 grid aspect-square place-items-center">
        <BsMoonStarsFill className="text-xs sm:text-base text-gray-500 dark:text-gray-50 transition-colors" aria-hidden="true" />
      </span>
    </motion.button>
  );
}
