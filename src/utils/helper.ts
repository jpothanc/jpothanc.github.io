import React from "react";
import { IconType } from "react-icons";
import { FaGraduationCap, FaJava } from "react-icons/fa6";
import { CgWorkAlt } from "react-icons/cg";
import config from "../config/config.json";
import { ThemeConstants } from "../constants";

export const ColorArray = [
  "#F06292",
  "#E57373",
  "#f37735",
  "#BA68C8",
  "#29B6F6",
  "#4DD0E1",
  "#26A69A",
  "#64FFDA",
  "#18FFFF",
  "#40C4FF",
  "#DCE775",
  "#66BB6A",
  "#B2FF59",
  "#C6FF00",
  "#00E676",
  "#FF9800",
  "#FF6F00",
  "#FFD600",
  "#795548",
  "#616161",
  "#B3E5FC",
  "#F44336",
  "#EA80FC",
];

export const badgeVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
  exit: { opacity: 0 },
};

export function getIcon(icon: IconType): any | undefined {
  return React.createElement(icon, {
    style: {
      width: "28px",
      height: "28px",
    },
  });

  return undefined;
}
export function getIconByName(name: string): any | undefined {
  switch (name) {
    case "LuGraduationCap":
      return getIcon(FaGraduationCap);
      break;
    case "CgWorkAlt":
      return getIcon(CgWorkAlt);
      break;
    case "FaJava ":
      return getIcon(FaJava);
      break;

    default:
      break;
  }

  return FaGraduationCap;
}

export type experiance = {
  title: string;
  location: string;
  description: string;
  icon: string;
  date: string;
};

export type link = {
  name: string;
  description: string;
  url: string;
};

export type projects = {
  name: string;
  description: string;
  technology: string;
  timeline: string;
};

export type personalProject = {
  name: string;
  link: string;
  description: string;
  readme: string;
  repo: string;
  technology: string;
};

export type iconBadge = {
  name: string;
  icon: string;
};

export function getThemeColor(theme: string, component: string): string {
  if (theme == "dark") {
    switch (component) {
      case "primaryColor":
        return config.themes.dark.primaryColor;
      case "bodyBackground":
        return config.themes.dark.bodyBackground;
      case "logoBackground":
        return config.themes.dark.logoBackground;
      case "logoColor":
        return config.themes.dark.logoColor;
      case "logoDescColor":
        return config.themes.dark.logoDescColor;
      case "mainBackground":
        return config.themes.dark.mainBackground;
      case "contentBackground":
        return config.themes.dark.contentBackground;
      case "contentTextColor":
        return config.themes.dark.contentTextColor;
      case "cardTitleColor":
        return config.themes.dark.cardTitleColor;
      case "careerContentBackground":
        return config.themes.dark.careerContentBackground;
      case "careerHeader":
        return config.themes.dark.careerHeader;
      case "careerDate":
        return config.themes.dark.careerDate;
      case "aboutMenuColor":
        return config.themes.dark.aboutMenuColor;
      case "barMenuColor":
        return config.themes.dark.barMenuColor;
      case "aboutCaptionColor":
        return config.themes.dark.aboutCaptionColor;
      case "aboutSubCaptionColor":
        return config.themes.dark.aboutSubCaptionColor;

      case ThemeConstants.badgeTechColor:
        return config.themes.dark.badgeTechColor;
      case ThemeConstants.badgeDevPracticeColor:
        return config.themes.dark.badgeDevPracticeColor;
      case ThemeConstants.badgeSkillsColor:
        return config.themes.dark.badgeSkillsColor;
      case ThemeConstants.badgePersonalityColor:
        return config.themes.dark.badgePersonalityColor;
      case ThemeConstants.badgeLinksColor:
        return config.themes.dark.badgeLinksColor;

      default:
        return "";
    }
  }
  return "";
}

export async function fetchData(
  url: string,
  abortController: AbortController
): Promise<any> {
  const { signal } = abortController;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    if (signal.aborted) {
      console.log("Request was aborted.");
      return;
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
