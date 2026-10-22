"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Panel from "./panel";
import TypedText, { type Block } from "./typed-text";
import { useSectionInView } from "@/lib/hooks";

const body = "text-gray-700 dark:text-white/75";

const aboutText: Block[] = [
  {
    className: "text-lg font-medium leading-8 text-gray-950 dark:text-white sm:text-xl sm:leading-9",
    segments: [{ text: "I'm a full-stack developer and creative product builder with a strong foundation in game design and a passion for crafting innovative digital experiences." }],
  },
  {
    className: body,
    segments: [{ text: "With over 5 years of experience, I've developed web applications, internal tools, and AI-driven solutions that enhance user engagement and streamline processes. I've embraced modern frameworks like Svelte, Next.js, and worked with TypeScript, Python and many more to support these projects and continuously evolve my development approach." }],
  },
  {
    className: "border-l-2 border-[#d97757] pl-5 italic text-gray-950 dark:text-white/90",
    segments: [{ text: "I thrive on solving complex problems and continuously seek opportunities to learn and grow." }],
  },
  {
    className: body,
    segments: [{ text: "Whether it's enhancing user interfaces, developing scalable backend systems, or exploring new AI capabilities, I'm always looking for ways to improve the development process and create meaningful solutions that make a difference." }],
  },
];

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  const [headingSettled, setHeadingSettled] = useState(false);

  return (
    <section ref={ref} className="w-full max-w-[50rem] scroll-mt-28 px-4 py-12 sm:px-8" id="about">
      <SectionHeading onSettled={() => setHeadingSettled(true)}>About</SectionHeading>
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25 }}>
        <Panel className="flex flex-col gap-6 rounded-2xl p-7 leading-8 sm:p-10">
          <TypedText blocks={aboutText} start={headingSettled} />
        </Panel>
      </motion.div>
    </section>
  );
}
