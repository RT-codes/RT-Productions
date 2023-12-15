"use client";

import { useEffect, useRef, useState } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useAnimation, useScroll } from "framer-motion";
import { useTransform } from "framer-motion";
import { off } from "process";

type ProjectProps = typeof projectsData[number] & { childCount: number };

export default function Project({ title, description, tags, imageUrl, childCount }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const controls = useAnimation();
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    // console.log(childCount);
    setOffset((childCount*childCount) / 20);
  }, [childCount]);

  //   useScroll({
  //     target: ref,
  //     offset: ["0 1", "1.33 1"],
  //   });
  //   let scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  //   let opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  useEffect(() => {
    controls.start({
      transition: { delay: offset },
    });
  }, [controls, offset]);

  console.log("offset", offset);

  let scaleProgress = useTransform(scrollYProgress, [0, 0.6 + (offset*2)], [0.6, 1]);
  let opacityProgress = useTransform(scrollYProgress, [0, 0.6 + offset], [0.4, 1]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="group mb-3 sm:mb-8 last:mb-0 "
    >
      <section className="bg-gray-200 max-w-[42rem] border border-gray-300 overflow-hidden sm:pr-8 relative sm:h-[20rem]  group-even:pl-8 hover:bg-gray-300 transition h-[20rem] ">
        <div className="pt-4 pb-7 px-5  sm:pr-2  sm:pt-10 sm:max-w-[50%] max-w-[80%] flex flex-col h-full sm:group-even:ml-[18rem] group-even:ml-[2rem] ">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 ">{description}</p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute top-8 -right-60 sm:-right-40 w-[28.25rem] rounded-t-lg shadow-xl shadow-slate-600 group-even:right-[initial] group-even:-left-60 group-even:sm:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04]  
      
      group-even:group-hover:translate-x-3
      group-even:group-hover:translate-y-3
      group-even:group-hover:rotate-2
      
      "
        />
      </section>
    </motion.div>
  );
}
