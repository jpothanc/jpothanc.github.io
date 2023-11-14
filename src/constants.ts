export const fmScale = {
  initial: { scale: 1, border: "0px solid rgb(100, 97, 100)" },
  animate: {
    scale: 1.6,
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
export const fmScaleAboutText = {
  animate: {
    fontSize: "36px",
    filter: "saturate(200%)",

    //textDecoration: "underline",
    transition: {
      type: "spring",
      stiffness: 700, // The stiffness of the spring (higher values make it stiffer)
    },
  },
};
export const fmOpacity = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { type: "spring", duration: 0.5, ease: "easeOut", delay: 0.1 },
  },
  exit: { opacity: 1 },
};

export const fmOpacitySlow = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { type: "spring", duration: 1, ease: "easeOut", delay: 0.5 },
  },
  exit: { opacity: 1 },
};

export class ThemeConstants {
  static readonly themeDark: string = "dark";
  static readonly themeLight: string = "light";
  static readonly bodyBackground: string = "bodyBackground";
  static readonly logoBackground: string = "logoBackground";
  static readonly logoColor: string = "logoColor";
  static readonly logoDescColor: string = "logoDescColor";
  static readonly mainBackground: string = "mainBackground";
  static readonly contentBackground: string = "contentBackground";
  static readonly contentTextColor: string = "contentTextColor";
  static readonly cardTitleColor: string = "cardTitleColor";
  static readonly careerContentBackground: string = "careerContentBackground";
  static readonly careerHeader: string = "careerHeader";
  static readonly careerDate: string = "careerDate";
  static readonly aboutMenuColor: string = "aboutMenuColor";
  static readonly aboutCaptionColor: string = "aboutCaptionColor";
  static readonly aboutSubCaptionColor: string = "aboutSubCaptionColor";
  static readonly barMenuColor: string = "barMenuColor";
  static readonly badgeTechColor: string = "badgeTechColor";
  static readonly badgeDevPracticeColor: string = "badgeDevPracticeColor";
  static readonly badgeSkillsColor: string = "badgeSkillsColor";
  static readonly badgePersonalityColor: string = "badgePersonalityColor";
  static readonly badgeLinksColor: string = "badgeLinksColor";
}
