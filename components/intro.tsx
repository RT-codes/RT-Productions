"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import avatar from "@/public/avatar.png";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);

  return (
    <section ref={ref} className="mb-18 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]" id="home">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "tween", duration: 0.2 }}>
            <Image src={avatar} alt="Rowan portrait" width={192} height={192} quality={95} priority={true} className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl" />
          </motion.div>
          <motion.span className="text-2xl absolute bottom-0 right-0" initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 125, delay: 0.5, duration: 0.7 }}>
            👋
          </motion.span>
        </div>
      </div>

      {/* <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25 }}>
        <span className="font-bold">Hello, I&apos;m Rowan.</span> I&apos;m a <span className="font-bold">full-stack developer</span> with <span className="font-bold">5 years</span> of experience. I enjoy <span className="italic">web development &amp; software</span>.<br /> My focus is <span className="underline">React (Next.js), python and AI</span>.
      </motion.h1> */}
      <motion.h1 className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-2xl" initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25 }}>
        I&apos;m a <span className="font-bold">full-stack developer</span> and <span className="italic">creative product builder</span>
        <br />
        with<span className="font-bold"> 5+ years</span> of experience in building modern web applications and internal tools. I enjoy using modern developer tools, software, and <span className="italic">AI-driven solutions</span> that push the boundaries of what&apos;s possible.
      </motion.h1>

      <motion.div className=" flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-lg font-medium " initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", stiffness: 100, bounce: 0.25, delay: 0.1 }}>
        <Link href="#contact" className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition ">
          Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-2 group-hover:text-[1.35rem] transition" />
        </Link>
        <a className="group bg-white text-black px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110  active:scale-105 transition cursor-pointer border border-black/10" href="/CV-rowan.pdf" download>
          Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>
        <div className="flex gap-2 justify-center items-center p-6">
          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer border border-black/10" aria-label="link to LinkedIn page" href="https://www.linkedin.com/in/rowantijsterman/" target="_blank">
            <BsLinkedin />
          </a>
          <a className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950  active:scale-105 transition cursor-pointer border border-black/10" aria-label="link to Github page" href="https://github.com/RT-codes" target="_blank">
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
