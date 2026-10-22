"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import Panel from "./panel";
import TypedText, { type Block } from "./typed-text";
import { useSectionInView } from "@/lib/hooks";

const body = "text-gray-700 dark:text-white/75";
const label = "-mb-3 text-sm font-semibold uppercase tracking-wider text-[#d97757]";
const rowLabel = "font-semibold text-gray-950 dark:text-white";

const aboutText: Block[] = [
  {
    className: "text-lg font-medium leading-8 text-gray-950 dark:text-white sm:text-xl sm:leading-9",
    segments: [{ text: "I'm a full-stack developer who started out in game design, and that background still shapes how I build: I care about how a thing feels to use, not just whether it works." }],
  },
  {
    className: "border-l-2 border-[#d97757] pl-5 italic text-gray-950 dark:text-white/90",
    segments: [{ text: "I like turning messy, complicated problems into something simple that people actually enjoy using." }],
  },
  {
    rule: true,
    className: label,
    segments: [{ text: "Background" }],
  },
  {
    className: body,
    segments: [{ text: "Over the past five years I've built web apps, webshops, internal tools and cloud data pipelines, working with Svelte, Next.js, TypeScript, Python and Azure. Before that I ran my own indie game studio, which taught me to wear every hat, from concept art to code, and to ship." }],
  },
  {
    className: body,
    segments: [{ text: "Games. ", className: rowLabel }, { text: "Studied game design and development, then ran Flow Studios, an indie studio nominated for best student learning company in the Netherlands." }],
  },
  {
    className: body,
    segments: [{ text: "Web. ", className: rowLabel }, { text: "Full-stack work on webshops, internal tools and data-driven apps, from storefront front ends to role-based access control." }],
  },
  {
    className: body,
    segments: [{ text: "Data. ", className: rowLabel }, { text: "Most recently cloud data automation on Azure: pipelines, data lakes, CI/CD and real-time dashboards." }],
  },
  {
    rule: true,
    className: label,
    segments: [{ text: "Workflow" }],
  },
  {
    className: body,
    segments: [{ text: "I like working across disciplines. Design, code, data and 3D all feed each other, and the most interesting ideas usually sit where they meet. AI agents fit that way of working well, so I've built them into how I work." }],
  },
  {
    className: body,
    segments: [{ text: "Agentic. ", className: rowLabel }, { text: "Claude Code and Codex are part of my daily workflow. I set the direction and they speed up the execution." }],
  },
  {
    className: body,
    segments: [{ text: "Tooling. ", className: rowLabel }, { text: "I build and use MCP tools to shape that workflow around how I think, instead of the other way around." }],
  },
  {
    className: body,
    segments: [{ text: "Method. ", className: rowLabel }, { text: "Think wide first, then narrow down. Small steps, tight feedback loops, and checking the output instead of trusting it." }],
  },
];

export default function About() {
  const { ref } = useSectionInView("About", 0.5);
  const [headingSettled, setHeadingSettled] = useState(false);

  return (
    <section ref={ref} className="w-full max-w-[56rem] scroll-mt-28 px-4 py-12 sm:px-8" id="about">
      <SectionHeading onSettled={() => setHeadingSettled(true)}>About</SectionHeading>
      <motion.div initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25 }}>
        <Panel className="flex flex-col gap-6 rounded-2xl p-7 leading-8 sm:p-10">
          <TypedText blocks={aboutText} start={headingSettled} />
        </Panel>
      </motion.div>
    </section>
  );
}
