"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useInView } from "framer-motion";
import { useSectionInView, useTheme } from "@/lib/hooks";

export default function Experience() {
  // const { ref, inView } = useInView({
  //     triggerOnce: true,
  // });
  const { ref } = useSectionInView("Experience", 0.3);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section ref={ref} id="experience" className="scroll-mt-28 mb-28 sm:mb-8">
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: isDark ? "rgba(255, 255, 255, 0.05)" : "#f3f4f6",
                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.05)",
                border: isDark ? "1px solid rgba(255, 255, 255, 0.05)" : "1px solid rgba(0, 0, 0, 0.05)",
                color: isDark ? "rgba(255, 255, 255, 0.9)" : undefined,
                textAlign: "left",
                padding: "1.3rem 2rem",
                visibility: "visible",
                display: "block",
              }}
              contentArrowStyle={{
                borderRight: isDark ? "0.4rem solid rgba(255, 255, 255, 0.15)" : "0.4rem solid  #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                visibility: "visible",
                backgroundColor: isDark ? "#374151" : "white",
                color: isDark ? "#f9fafb" : undefined,
                boxShadow: isDark ? "0 0 0 4px #111827, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05)" : undefined,
                fontSize: "1.2rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.location}</p>
              <p className="!mt-1 !font-normal !text-gray-700 dark:!text-white/70">{item.description}</p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
