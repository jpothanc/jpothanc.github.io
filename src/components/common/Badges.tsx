import { motion } from "framer-motion";
import { ThemeConstants, shakeVariants } from "../../constants";
import {
  ColorArray,
  badgeVariants,
  getIcon,
  getThemeColor,
} from "../../utils/helper";
import { IconType } from "react-icons";

type badgeProps = {
  title: string;
  icon: IconType;
  content: string;
  items: string[];
  color: string;
};

[];
const Badges = ({ title, icon, content, items: skills, color }: badgeProps) => {
  function getColor(random: boolean): string {
    if (random) {
      const randomIndex = Math.floor(Math.random() * ColorArray.length);
      const randomColor = ColorArray[randomIndex];
      return randomColor;
    }
    return color;
  }

  return (
    <>
      <div
        className="card "
        style={{
          background: getThemeColor(
            ThemeConstants.themeDark,
            ThemeConstants.contentBackground
          ),
        }}
      >
        <section
          className="intro  xl:text-lg"
          style={{
            color: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.contentTextColor
            ),
          }}
        >
          <motion.h3
            className="flex flex-col gap-1 font-semibold"
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
          {skills.map((skill, index) => {
            return (
              <motion.button
                className="skills-btn xl:text-md rounded-md m-1 p-1
                shadow-md hover:shadow-lg hover:shadow-theme-dark-primary transition-all duration-300
                hover:underline
                 "
                style={{
                  //borderRadius: "400px",
                
                  // fontWeight: 500,
                  color: getColor(false),
                }}
                key={index}
                variants={badgeVariants}
                initial="initial"
                whileInView="animate"
                custom={index}
                viewport={{
                  once: true,
                }}
              >
                {skill}
              </motion.button>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Badges;
