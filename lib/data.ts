import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaCog, FaEnvelope, FaReact, FaStore } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import RTcodesImg from "@/public/RT-codes.png";
import LLDImg from "@/public/LLD.png";
import ApiImg from "@/public/Api.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "2007 - 2011 Grafisch Lyceum (Game Design)",
    location: "Utrecht - Netherlands",
    description:
      "Finished my Gamedesign and development study. Learned about 3D modeling, animation, game design, programming and more.",
    icon: React.createElement(LuGraduationCap),
    date: "2007 - 2011",
  },
  {
    title: "Flow Studios",
    location: "Dutch Game Garden -> Utrecht - Netherlands",
    description:
      "Ran a small indie game studio called Flow studios for about 5 years. Nominated for best student learning company in the Netherlands, worked for several clients and platforms. Started as Concept Artist and Manager and eventually fulfilled many roles like 3d modeling and Programming.",
    icon: React.createElement(CgWorkAlt),
    date: "2011 - 2017",
  },
  {
    title: "Several non-tech jobs",
    location: "Netherlands",
    description:
      "Had several non-tech related jobs like Catering, Caretaker and designer at t-shirt printing company. For more info check my resume.",
    icon: React.createElement(CgWorkAlt),
    date: "2017 - 2021", 
  },
  {
    title: "Full-stack/Lead Developer - LCB LED Europe",
    location: "Almere - Netherlands",
    description:
      "Worked as a full-stack developer on the company websites and stores (mainly runs on lightspeed). Worked on internal tools to upload and maintain product data and specifications to handle huge amounts of products per store. Took care of most api integrations, styles and front-end changes.",
    icon: React.createElement(FaCog),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "RT-codes webpage",
    description:
      "This website. Made to be responsive and fast. Using the latest Next.js features and deployed on Vercel.",
    tags: ["Next.js", "React", "Typescript", "Tailwind", "Framermotion", "Vercel"],
    imageUrl: RTcodesImg,
  },
  {
    title: "LCB LED Europe webshops",
    description:
      "Webshops for LCB LED Europe. Maintained and developed new website features. mostly front-end work.",
    tags: ["Lightspeed", "html", "css", "javascript"],
    imageUrl: LLDImg,
  },
  {
    title: "langcorn sheets gen",
    description:
      "A small ai driven test api project to chain together prompts and output to generate content",
    tags: ["Fastapi", "Python", "Langcorn", "Lanchain"],
    imageUrl: ApiImg,
  },

] as const;

export const contactData = [
  {
    email: "rowan.nicolay@gmail.com",
    tagline: "Website runs on Nextjs/React and ☕️ - Deployed on Vercel - Made by Rowan"
  }
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "Python",
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Git",
  "Tailwind",
  "C#",
  "Photoshop",
  "Illustrator",
  "Figma",
  "Flutter",
  "PostgreSQL",
  "Python",
  "Django",
  "Vim / Neovim",
  "Unity",
  "Blender",
  "ZBrush",
  "Cinema 4D",
  "Maya",
  "3DS Max",
  "Unreal Engine",
  "Debian",

] as const;