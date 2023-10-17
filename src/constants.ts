import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const fmScale = {
  initial: { scale: 1, border: "0px solid rgb(100, 97, 100)" },
  animate: {
    scale: 1.1,
    border: "1px solid rgba(227, 227, 227, 0.8)",
    color: "#ff0000",
    transition: { duration: 0.5, ease: "easeIn", delay: 0.1 },
  },
  exit: {
    transition: { duration: 0.5, ease: "easeIn", delay: 0.1 },
  },
};

export const shakeVariants = {
  initial: { opacity: 1 },
  animate: {
    x: [-2, 2, -2, -1, -1, 0], // Define the shaking animation (x-axis)
    opacity: [0.8, 0.7, 0.2, 0.6, 0.9, 1],
    color: "#69F0AE",
    transition: {
      type: "spring",
      stiffness: 500, // The stiffness of the spring (higher values make it stiffer)
    },
  },
  exit: { opacity: 1 },
};

export const fmScaleText = {
  animate: {
    fontSize: "15px",
    color: "#69F0AE",
    transition: {
      type: "spring",
      stiffness: 600, // The stiffness of the spring (higher values make it stiffer)
    },
  },
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
