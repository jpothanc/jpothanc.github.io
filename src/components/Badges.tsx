import { motion } from "framer-motion";
import { shakeVariants } from "../constants";
import { ColorArray, badgeVariants, getIcon } from "../lib/helper";
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
      <div className="card">
        <section className="intro">
          <motion.h3
            className="card-title"
            variants={shakeVariants}
            initial="initial"
            whileHover="animate"
          >
            {getIcon(icon)} {title}
          </motion.h3>
          <p className="text">{content}</p>
          {skills.map((skill, index) => {
            return (
              <motion.button
                className="skills--btn"
                style={{
                  background: "transparent",
                  //borderRadius: "400px",
                  border: "0px solid #FFEBEE",
                  // fontWeight: 500,
                  fontSize: "12px",
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
