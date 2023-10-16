import { motion } from "framer-motion";
import { fmScale } from "../constants";

import { ColorArray, badgeVariants, getIcon } from "../lib/helper";
import { IconType } from "react-icons";
type Props = {
  title: string;
  icon: IconType;
  content: string;
  items: string[];
  color: string;
};

[];
const Badges = ({ title, icon, content, items: skills, color }: Props) => {
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
      <motion.div
        className="card"
        variants={fmScale}
        initial="initial"
        // whileHover="animate"
      >
        <section className="intro">
          <h3 className="card-title">
            {getIcon(icon)} {title}
          </h3>
          <p className="text">{content}</p>
          {skills.map((skill, index) => {
            return (
              <motion.button
                className="skills--btn"
                style={{
                  background: "transparent",
                  //borderRadius: "400px",
                  border: "0px solid #FFEBEE",
                  fontWeight: 500,
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
      </motion.div>
    </>
  );
};

export default Badges;
