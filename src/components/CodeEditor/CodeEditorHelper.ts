import config from "../../config/config.json";
export const codeContent = [
  {
    text: "Dreams.Create( i => {",
    color: "text-red-400",
    padding: "",
  },
  {
    text: "i.Code().WithPrecision();",
    color: "text-teal-600",
    padding: "pl-8",
  },
  {
    text: "i.Inspire().WithPassion();",
    color: "text-white/80",
    padding: "pl-8",
  },
  {
    text: "i.Innovate.WithPurpose();",
    color: "text-purple-400",
    padding: "pl-9",
  },
];
export const terminalToolBarItems = [
  {
    name: "terminal",
    icon: "flowbite:terminal-outline",
  },
  {
    name: "split",
    icon: "ph:square-split-horizontal-light",
  },
  {
    name: "delete",
    icon: "codicon:trash",
  },
  {
    name: "expand",
    icon: "ic:outline-expand-less",
  },
  {
    name: "close",
    icon: "mdi:close",
  },
];
export const outputToolBarItems = [
  {
    name: "clear",
    icon: "ic:round-clear-all",
  },
  {
    name: "lock",
    icon: "lets-icons:lock-alt-light",
  },
  {
    name: "close",
    icon: "mdi:close",
  },
];
export const commentsToolBarItems = [
  {
    name: "clear",
    icon: "ic:round-clear-all",
  },
  {
    name: "close",
    icon: "mdi:close",
  },
];
export const debugToolBarItems = [
  {
    name: "search",
    icon: "quill:search",
  },
  {
    name: "clear",
    icon: "ic:round-clear-all",
  },
  {
    name: "close",
    icon: "mdi:close",
  },
];

export const toolBarItems = [
  {
    name: "minimize",
    icon: "mdi:minimize",
  },
  {
    name: "maximize",
    icon: "mdi:maximize",
  },
  {
    name: "close",
    icon: "mdi:close",
  },
];

export const fileMenuItems = [
  {
    name: "Work Experience",
    page: "/contents",
  },
  {
    name: "Personal Projects",
    page: "/projects",
  },
  {
    name: "Developer Notes",
    page: "/devnotes",
  },
  {
    name: "Github",
    page: "",
    url: config.portfolio.github,
  },
  {
    name: "LinkedIn",
    page: "",
    url: config.portfolio.linkedin,
  },
  {
    name: "Resume",
    page: "",
    url: config.portfolio.resumeFileName,
  },
  {
    name: "Email",
    page: "",
    url: `mailto:${config.portfolio.email}`,
  },
];

export const codeEditorVariants = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: (index: number) => ({
    opacity: 10,
    y: 0,
    transition: {
      delay: 0.3 * index,
      duration: 0.3,
    },
  }),
  exit: { opacity: 0 },
};
