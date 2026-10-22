"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

// The list triggers once and staggers its children, so the tiles come in one after another across rows instead of row by row.
const listVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.03 } },
};

const itemVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      bounce: 0.25,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section id="skills" ref={ref} className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-8">
      <SectionHeading>Skills</SectionHeading>
      <motion.ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800 dark:text-white/80 " variants={listVariants} initial="initial" whileInView="animate" viewport={{ once: true, amount: 0.15 }}>
        {skillsData.map((skill, index) => (
          <motion.li key={index} className="bg-white border border-black/[0.1] dark:bg-white/10 rounded-xl px-5 py-3 " variants={itemVariants}>
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
