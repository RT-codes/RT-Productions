"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  // The section is several screens tall, so a high threshold could never be reached.
  const { ref } = useSectionInView("Projects", 0.1);

  return (
    <section ref={ref} className="w-full max-w-[42rem] xl:max-w-[72rem] overflow-hidden px-4 py-8 sm:px-8 scroll-mt-28" id="projects">
      <SectionHeading>Projects</SectionHeading>
      <div className="flex flex-col gap-10 sm:gap-14 xl:gap-16">
        {projectsData.map((project, index) => (
          <Project key={project.title} {...project} index={index} total={projectsData.length} />
        ))}
      </div>
    </section>
  );
}
