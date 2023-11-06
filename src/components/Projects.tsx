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
                    paddingTop: "10px",
                  }}
                >
                  {project.name}
                </h4>
                <p style={{ fontSize: "12px", fontWeight: "500" }}>
                  {project.timeline}
                </p>
                <p style={{ fontSize: "12px", paddingTop: "5px" }}>
                  {project.description}
                </p>
                <p
                  style={{
                    fontSize: "12px",
                    color: "#64B5F6",
                    paddingTop: "10px",
                  }}
                >
                  Technology:{project.technology}
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
