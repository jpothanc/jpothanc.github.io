import { motion } from "framer-motion";
import { shakeVariants } from "../constants";
import { getIcon, projects } from "../lib/helper";
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
      <div className="card">
        <section className="intro">
          <motion.h3
            className="card-title"
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
          >
            {getIcon(icon)}
            {title}
          </motion.h3>
          <p className="text">{content}</p>
          <ul>
            {items.map((project, index) => {
              return (
                <li key={index}>
                  <p>{project.name}</p>
                  <p>{project.description}</p>
                  <p>{project.technology}</p>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
};

export default Projects;
