import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const fmScale = {
  initial: { scale: 1, border: "1px solid rgb(100, 97, 100)" },
  animate: {
    scale: 1.1,
    border: "1px solid #42A5F5",
    color: "#ff0000",
    transition: { duration: 0.5, ease: "easeIn", delay: 0.1 },
  },
  exit: {
    transition: { duration: 0.5, ease: "easeIn", delay: 0.1 },
  },
};

export const fmAnimate1 = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { type: "spring", duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
  exit: { opacity: 1 },
};

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

export type SectionName = (typeof links)[number]["name"];

export const experiencesData = [
  {
    title: "Graduated",
    location: "Armenia, Yerevan",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap, {
      size: 16,
    }),
    date: " 2019 ",
  },
  {
    title: "Software Developer",
    location: "Bangalore, India",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: " 2019 - 2021 ",
  },
  {
    title: "Software Developer",
    location: "Singapore",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: " 2021 - present ",
  },
] as const;
