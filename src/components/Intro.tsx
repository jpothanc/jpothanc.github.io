import { motion } from "framer-motion";
import { fmScale } from "../constants";

type Props = {
  text: string;
};

const Intro = ({ text }: Props) => {
  return (
    <>
      <motion.header
        className="headerContent"
        variants={fmScale}
        initial="initial"
        whileHover="animate"
      >
        <section className="intro">
          <h1 className="first-heading">
            Hello <span className="emoji">👋</span>
          </h1>
          <p className="text">
            <span className="u-bold">
              I'm <span className="u-yellow">Jessish</span>
            </span>
            {text}
            <span className="text--second"></span>
          </p>
        </section>
      </motion.header>
    </>
  );
};

export default Intro;
