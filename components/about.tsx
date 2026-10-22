"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Panel from "./panel";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.5);

  return (
    <section ref={ref} className="w-full max-w-[50rem] scroll-mt-28 px-4 py-12 sm:px-8" id="about">
      <SectionHeading>About</SectionHeading>
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25 }}>
        <Panel className="relative overflow-hidden p-7 leading-8 sm:p-10">
          <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gray-900 dark:bg-white/70" />
          <p>
            I&apos;m a full-stack developer and creative product builder with a strong foundation in game design and a passion for crafting innovative digital experiences. With over 5 years of experience, I&apos;ve developed web applications, internal tools, and AI-driven solutions that enhance user engagement and streamline processes. I&apos;ve embraced modern frameworks like Svelte, Next.js, and worked with TypeScript, Python and many more to support these projects and continuously evolve my development approach.<span className="italic"> I thrive on solving complex problems and continuously seek opportunities to learn and grow. </span> Whether it&apos;s enhancing user interfaces, developing scalable backend systems, or exploring new AI capabilities, I&apos;m always looking for ways to improve the development process and create meaningful solutions that make a difference.
          </p>
        </Panel>
      </motion.div>
    </section>
  );
}
