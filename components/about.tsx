"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About", 0.9);

  return (
    <section ref={ref} className="p-12 max-w-[45rem] leading-8 scroll-mt-28" id="about">
      <SectionHeading>About</SectionHeading>
      <motion.p initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25, delay: 0.16 }}>
        I&apos;m a full-stack developer and creative product builder with a strong foundation in game design and a passion for crafting innovative digital experiences. With over 5 years of experience, I&apos;ve developed web applications, internal tools, and AI-driven solutions that enhance user engagement and streamline processes. I&apos;ve embraced modern frameworks like Svelte, Next.js, and worked with TypeScript, Python and many more to support these projects and continuously evolve my development approach.<span className="italic"> I thrive on solving complex problems and continuously seek opportunities to learn and grow. </span> Whether it&apos;s enhancing user interfaces, developing scalable backend systems, or exploring new AI capabilities, I&apos;m always looking for ways to improve the development process and create meaningful solutions that make a difference.
      </motion.p>
    </section>
  );
}
