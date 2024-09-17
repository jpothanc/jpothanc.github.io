import { motion } from "framer-motion";
import { ThemeConstants, shakeVariants } from "../../constants";
import {
  badgeVariants,
  getIcon,
  getThemeColor,
  iconBadge,
} from "../../utils/helper";
import { IconType } from "react-icons";
import { Icon } from "@iconify/react";


type iconBadgeProps = {
  title: string;
  icon: IconType;
  content: string;
  badges: iconBadge[];
  badgeColor?: string;
};
const  defaultBadgeColor = "text-white/80"

const IconBadges = ({ title, icon, content, badges, badgeColor }: iconBadgeProps) => {
  return (
    <>
      <div className="card dark:bg-theme-dark-contentbg ">
        <section
          className="intro  xl:text-md"
          style={{
            color: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.contentTextColor
            ),
          }}
        >
          <motion.h3
            className="flex flex-col gap-1 "
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
            style={{
              color: getThemeColor(
                ThemeConstants.themeDark,
                ThemeConstants.cardTitleColor
              ),
            }}
          >
            {getIcon(icon)} {title}
          </motion.h3>
          <p className="basic-text">{content}</p>
          <div className="flex flex-row flex-wrap">
            {badges.map((skill, index) => {
              return (
                <motion.div
                  className={`xl:text-md rounded-md m-1 p-1
                  shadow-md hover:shadow-lg hover:shadow-theme-dark-primary transition-all duration-300
                  ${badgeColor ? badgeColor : defaultBadgeColor}`}
                  key={index}
                  variants={badgeVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  viewport={{
                    once: true,
                  }}
                >
                  <div className="flex flex-row gap-2">
                    {skill.icon && (
                      <Icon icon={skill.icon} style={{ fontSize: "1.5rem" }} />
                    )}

                    {skill.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default IconBadges;
