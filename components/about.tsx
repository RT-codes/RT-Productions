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
        <span className="font-medium">I’m a developer with over 5 years of experience. During my time as a developer, I’ve worked on apps, games and web applications.</span>
        <span className="font-medium">With a background rooted in the game industry as an artist, I learned the latest tech and tools in the web industry to bring interactive visions to life.</span>
        <span className="italic"> I love data driven applications and automation so it might not come as a surprise I’m all over harnessing AI to achieve these goals when I get the chance.</span>
        <span className="font-medium"> With an insatiable hunger for developing myself as a more adept developer i love the feeling of figuring out a solution to a problem.</span>
      </motion.p>
    </section>
  );
}
