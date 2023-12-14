"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeIAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      bounce: 0.25,
      delay: 0.5 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-8">
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 ">
        {skillsData.map((skill, index) => (
          <motion.li key={index} className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 " variants={fadeIAnimationVariants} initial="initial" whileInView="animate">
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
