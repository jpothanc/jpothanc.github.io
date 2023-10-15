import { motion } from "framer-motion";
import { fmScale } from "../constants";
import { FaStackOverflow, FaWrench, FaBullhorn } from "react-icons/fa";
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

function getIcon(
  title: string
): React.CElement<{}, React.Component<{}, any, any>> | undefined {
  switch (title) {
    case "Technology":
      return <FaStackOverflow size={32} />;
    case "Skills":
      return <FaWrench size={32} />;
    case "Achievements":
      return <FaBullhorn size={32} />;
    case "Projects":
      return <FaBullhorn size={32} />;

    default:
      break;
  }
  return undefined;
}
[];
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
        // whileHover="animate"
      >
        <section className="intro">
          {getIcon(title)}
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
