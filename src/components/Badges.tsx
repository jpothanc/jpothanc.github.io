import { motion } from "framer-motion";
import { fmScale } from "../constants";
type Props = {
  title: string;
  content: string;
  skills: string[];
};
const variants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
  exit: { opacity: 0 },
};
const ColorArray = [
  "#F06292",
  "#E57373",
  "#f37735",
  "#BA68C8",
  "#29B6F6",
  "#4DD0E1",
  "#26A69A",
  "#64FFDA",
  "#18FFFF",
  "#40C4FF",
  "#DCE775",
  "#66BB6A",
  "#B2FF59",
  "#C6FF00",
  "#00E676",
  "#FF9800",
  "#FF6F00",
  "#FFD600",
  "#795548",
  "#616161",
  "#B3E5FC",
  "#F44336",
  "#EA80FC",
];

const Badges = ({ title, content, skills }: Props) => {
  function getColor(): string {
    const randomIndex = Math.floor(Math.random() * ColorArray.length);
    const randomColor = ColorArray[randomIndex];
    return randomColor;
  }

  return (
    <>
      <motion.div
        className="card"
        variants={fmScale}
        initial="initial"
        whileHover="animate"
      >
        <section className="intro">
          <img
            src="https://images.unsplash.com/photo-1570211776091-c19f426d37af?auto=format&fit=crop&w=70&q=100"
            alt="logo"
            className="logo"
          />
          {title}
          <p className="text">{content}</p>
          {skills.map((skill, index) => {
            return (
              <motion.button
                className="skills--btn"
                style={{
                  background: getColor(),
                }}
                key={index}
                variants={variants}
                initial="initial"
                whileInView="animate"
                custom={index}
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
