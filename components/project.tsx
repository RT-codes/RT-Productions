"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionStyle } from "framer-motion";
import { FiArrowUpRight, FiCheck } from "react-icons/fi";
import { projectsData } from "@/lib/data";
import { usePrefersReducedMotion } from "@/lib/hooks";

type ProjectProps = (typeof projectsData)[number] & { index: number; total: number };

const pad = (n: number) => String(n).padStart(2, "0");

export default function Project({ title, description, summary, highlights, tags, imageUrl, url, linkLabel, index, total }: ProjectProps) {
  const panelRef = useRef<HTMLElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  // Even rows put the card on the right and the panel on the left (and vice versa).
  const isEven = index % 2 === 1;

  // The panel is uncovered from the card's edge as it scrolls into view: nothing moves, so it never bumps into the card.
  const { scrollYProgress } = useScroll({ target: panelRef, offset: ["start 95%", "start 50%"] });
  const reveal = useTransform(scrollYProgress, [0, 1], [reduceMotion ? 1 : 0, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [reduceMotion ? 1 : 0, 1]);
  const panelStyle = { "--reveal": reveal, opacity } as MotionStyle;

  return (
    <div className={`flex flex-col items-center gap-4 xl:flex-row xl:gap-0 ${isEven ? "xl:flex-row-reverse" : ""}`}>
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${title} (opens in a new tab)`}
        className={`group/card relative block w-full sm:h-[20rem] max-w-[42rem] shrink-0 overflow-hidden border border-gray-300 bg-gray-200 outline-none transition hover:bg-gray-300 focus-visible:ring-2 focus-visible:ring-gray-400 dark:border-white/10 dark:bg-white/10 dark:hover:bg-white/20 sm:pr-8 ${isEven ? "sm:pl-8" : ""}`}
      >
        <div className={`flex flex-col px-5 pt-5 sm:h-full sm:max-w-[50%] sm:pb-7 sm:pr-2 sm:pt-10 ${isEven ? "sm:ml-[18rem]" : ""}`}>
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">{description}</p>
          <ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
            {tags.map((tag) => (
              <li key={tag} className="rounded-full bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white dark:bg-white/10 dark:text-white/80">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt={`Screenshot of ${title}`}
          quality={95}
          className={`mx-auto mt-6 h-auto w-[calc(100%-2.5rem)] rounded-t-lg shadow-xl shadow-slate-600 transition motion-safe:group-hover/card:translate-y-2 motion-safe:group-hover/card:scale-[1.03] sm:absolute sm:top-8 sm:m-0 sm:w-[28.25rem] motion-safe:sm:group-hover/card:translate-y-3 motion-safe:sm:group-hover/card:scale-[1.04] ${
            isEven ? "sm:-left-40 motion-safe:sm:group-hover/card:translate-x-3 motion-safe:sm:group-hover/card:rotate-2" : "sm:-right-40 motion-safe:sm:group-hover/card:-translate-x-3 motion-safe:sm:group-hover/card:-rotate-2"
          }`}
        />
      </motion.a>

      <motion.aside
        ref={panelRef}
        style={panelStyle}
        className={`relative flex w-full max-w-[42rem] flex-col gap-4 border border-gray-300 bg-white/60 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.04] xl:max-w-none xl:flex-1 xl:self-stretch xl:justify-center xl:p-8 ${
          isEven ? "xl:border-r-0 xl:[clip-path:inset(0_0_0_calc(100%*(1-var(--reveal))))]" : "xl:border-l-0 xl:[clip-path:inset(0_calc(100%*(1-var(--reveal)))_0_0)]"
        } [clip-path:inset(0_0_calc(100%*(1-var(--reveal)))_0)] focus-within:!opacity-100 focus-within:![clip-path:none]`}
      >
        <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gray-900 dark:bg-white/70" />

        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 dark:text-white/50">
          Project {pad(index + 1)} <span className="opacity-60">/ {pad(total)}</span>
        </p>
        <p className="leading-relaxed text-gray-700 dark:text-white/70">{summary}</p>

        <ul className="flex flex-col gap-2">
          {highlights.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-gray-700 dark:text-white/80">
              <FiCheck aria-hidden className="mt-0.5 shrink-0 text-base text-gray-900 dark:text-white" />
              {item}
            </li>
          ))}
        </ul>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-1 inline-flex w-fit items-center gap-2 rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white outline-none transition hover:bg-gray-950 focus-visible:ring-2 focus-visible:ring-gray-400 dark:bg-white/10 dark:hover:bg-white/20"
        >
          {linkLabel}
          <FiArrowUpRight aria-hidden className="transition motion-safe:group-hover/link:-translate-y-0.5 motion-safe:group-hover/link:translate-x-0.5" />
        </a>
      </motion.aside>
    </div>
  );
}
