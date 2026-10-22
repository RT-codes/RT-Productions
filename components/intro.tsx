"use client";

import React from "react";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import Panel from "./panel";

const iconButton = "flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-white text-xl text-gray-700 outline-none transition hover:scale-110 hover:text-gray-950 focus-visible:scale-110 active:scale-105 dark:border-white/10 dark:bg-white/10 dark:text-white/70 dark:hover:text-white";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} className="mb-18 w-full max-w-[56rem] scroll-mt-[100rem] px-4 sm:mb-0" id="home">
      <motion.div className="relative sm:pl-20" initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25 }}>
        <div className="relative z-10 mx-auto -mb-16 h-40 w-40 sm:absolute sm:left-0 sm:top-14 sm:mx-0 sm:mb-0 sm:h-48 sm:w-48">
          <div aria-hidden className="absolute -inset-2 rounded-full bg-gradient-to-br from-[#fbe2e3] via-[#dbd7fb] to-[#f0b9a0] opacity-70 blur-md dark:from-[#d97757] dark:via-[#7a3d14] dark:to-[#22a5b8]" />
          <Image src={avatar} alt="Rowan portrait" width={384} height={384} quality={95} priority className="relative h-full w-full rounded-full border-[0.4rem] border-white object-cover shadow-2xl dark:border-gray-700" />
          <motion.span className="absolute bottom-1 right-1 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl shadow-lg dark:bg-gray-700" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.5 }}>
            👋
          </motion.span>
        </div>

        <Panel className="overflow-hidden rounded-[2rem]">
          <div className="px-6 pb-8 pt-20 text-center sm:py-12 sm:pl-32 sm:pr-10 sm:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-black/10 bg-black/[0.04] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-gray-600 dark:border-white/10 dark:bg-white/[0.06] dark:text-white/80">
              <span aria-hidden className="h-2 w-2 rounded-full bg-emerald-500" />
              Full-stack developer
            </p>
            <h1 className="text-balance text-3xl font-bold !leading-tight sm:text-4xl">
              Hi, I&apos;m Rowan, a <span className="italic">creative product builder</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-white/85">
              With <span className="font-semibold text-gray-950 dark:text-white">5+ years</span> of experience in building modern web applications and internal tools. I enjoy using modern developer tools, software, and <span className="italic">AI-driven solutions</span> that push the boundaries of what&apos;s possible.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 border-t border-black/10 bg-black/[0.03] px-6 py-5 text-base font-medium dark:border-white/10 dark:bg-white/[0.04] sm:justify-start sm:pl-32 sm:pr-10">
            <Link href="#contact" className="group flex items-center gap-2 rounded-full bg-gray-900 px-6 py-2.5 text-white outline-none transition hover:scale-105 hover:bg-gray-950 focus-visible:scale-105 active:scale-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100">
              Contact me here <BsArrowRight className="opacity-70 transition group-hover:translate-x-1.5" />
            </Link>
            <a className="group flex cursor-pointer items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-2.5 text-black outline-none transition hover:scale-105 focus-visible:scale-105 active:scale-100 dark:border-white/10 dark:bg-white/10 dark:text-white/80" href="/CV-rowan.pdf" download>
              Download CV <HiDownload className="opacity-60 transition group-hover:translate-y-0.5" />
            </a>
            <div className="flex items-center gap-2 sm:ml-auto">
              <a className={iconButton} aria-label="link to LinkedIn page" href="https://www.linkedin.com/in/rowantijsterman/" target="_blank" rel="noopener noreferrer">
                <BsLinkedin />
              </a>
              <a className={iconButton} aria-label="link to Github page" href="https://github.com/RT-codes" target="_blank" rel="noopener noreferrer">
                <FaGithubSquare className="text-[1.6rem]" />
              </a>
            </div>
          </div>
        </Panel>
      </motion.div>
    </section>
  );
}
