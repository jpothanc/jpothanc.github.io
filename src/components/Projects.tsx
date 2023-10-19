import { motion } from "framer-motion";
import { shakeVariants } from "../constants";
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
          background: getThemeColor("dark", "contentBackground"),
        }}
      >
        <section
          className="intro"
          style={{
            color: getThemeColor("dark", "contentTextColor"),
          }}
        >
          <motion.h3
            className="card-title"
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
            style={{
              color: getThemeColor("dark", "cardTitleColor"),
            }}
          >
            {getIcon(icon)}
            {title}
          </motion.h3>
          <p className="text">{content}</p>
          {items.map((project) => {
            return (
              <div>
                <h4
                  style={{
                    paddingTop: "5px",
                  }}
                >
                  {project.name}
                </h4>
                <p style={{ fontSize: "12px" }}>{project.description}</p>
                <p style={{ fontSize: "12px", color: "#64B5F6" }}>
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
