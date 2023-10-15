import { motion } from "framer-motion";
import { fmScale } from "../constants";
import {
  FaStackOverflow,
  FaWrench,
  FaPersonChalkboard,
  FaCity,
  FaHands,
} from "react-icons/fa6";
type Props = {
  title: string;
  content: string;
  items: string[];
  color: string;
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
  let size = 28;
  switch (title) {
    case "Technology":
      return <FaStackOverflow size={size} />;
    case "Development Practices & Testing":
      return <FaHands size={size} />;
    case "Skills & Achievements":
      return <FaWrench size={size} />;
    case "Projects":
      return <FaCity size={size} />;
    case "Articles":
      return <FaPersonChalkboard size={size} />;

    default:
      break;
  }
  return undefined;
}
[];
const Badges = ({ title, content, items: skills, color }: Props) => {
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
            {getIcon(title)} {title}
          </h3>
          <p className="text">{content}</p>
          {skills.map((skill, index) => {
            return (
              <motion.button
                className="skills--btn"
                style={{
                  background: getColor(false),
                  borderRadius: "400px",
                  fontWeight: 500,
                }}
                key={index}
                variants={variants}
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
