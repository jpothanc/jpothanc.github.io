import { motion } from "framer-motion";
import { ThemeConstants, shakeVariants } from "../constants";
import { getIcon, getThemeColor, projects } from "../utils/helper";
import { IconType } from "react-icons";

type Props = {
  title: string;
  icon: IconType;
  content: string;
  items: projects[];
};

const ProjectsWork = ({ title, content, icon, items }: Props) => {
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
            {getIcon(icon)}
            {title}
          </motion.h3>
          <p className="basic-text">{content}</p>
          {items.map((project) => {
            return (
              <div>
                <h4
                  className="mt-5 mb-2 font-bold  text-white/80 
                hover:text-amber-500 transition-all duration-300"
                >
                  {project.name}
                </h4>
                <p
                  className="font-semibold"
                  style={{
                    color: getThemeColor(
                      ThemeConstants.themeDark,
                      "careerDate"
                    ),
                  }}
                >
                  {project.timeline}
                </p>
                <p className="basic-text pt-5">{project.description}</p>
                <p
                  style={{
                    fontSize: "12px",
                    fontWeight: "700",
                    color: getThemeColor(
                      ThemeConstants.themeDark,
                      ThemeConstants.badgeLinksColor
                    ),
                    paddingTop: "5px",
                  }}
                >
                  <br></br>
                  Technologies:{project.technology}
                </p>
                <br></br>
                <hr></hr>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default ProjectsWork;
