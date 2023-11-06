import { motion } from "framer-motion";
import { ThemeConstants, shakeVariants } from "../constants";
import { getIcon, getThemeColor, projects } from "../lib/helper";
import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  content: string;
  items: projects[];
};

const Projects = ({ title, content, icon, items }: Props) => {
  return (
    <>
      <div
        className="card"
        style={{
          background: getThemeColor(
            ThemeConstants.themeDark,
            ThemeConstants.contentBackground
          ),
        }}
      >
        <section
          className="intro"
          style={{
            color: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.contentTextColor
            ),
          }}
        >
          <motion.h3
            className="card__title"
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
            {getIcon(icon)}
            {title}
          </motion.h3>
          <p className="basic-text">{content}</p>
          {items.map((project) => {
            return (
              <div>
                <h4
                  style={{
                    paddingTop: "20px",
                  }}
                >
                  {project.name}
                </h4>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: getThemeColor(
                      ThemeConstants.themeDark,
                      "careerDate"
                    ),
                  }}
                >
                  {project.timeline}
                </p>
                <p style={{ fontSize: "13px", paddingTop: "10px" }}>
                  {project.description}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: getThemeColor(
                      ThemeConstants.themeDark,
                      ThemeConstants.badgeLinksColor
                    ),
                    paddingTop: "10px",
                  }}
                >
                  Technologies:{project.technology}
                </p>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default Projects;
