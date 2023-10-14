import { motion } from "framer-motion";
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

const buttonStyle = {
  backgroundColor: "blue",
  color: "white",
  fontSize: "10px",
  border: "none",
  padding: "5px 20px", // Add padding
  cursor: "pointer", // Add a pointer cursor on hover
};

const Badges = ({ title, content, skills }: Props) => {
  return (
    <>
      <motion.div
        className="card"
        whileHover={{ scale: 1.2 }} // Animate the parent div when hovered
        //whileHover={{ scale: 1.4 }} // Scale up the inner div on mouse hover
        initial={{ scale: 1 }} // Initial scale
        animate={{
          x: 0, // Reset x position when not hovering
          y: 0, // Reset y position when not hovering
        }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
      >
        <section className="intro">
          {title}
          <p className="text">{content}</p>
          {skills.map((skill, index) => {
            return (
              <motion.button
                className="skills--btn"
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
