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
          <span className="u-bold">
            I'm <span className="u-yellow">Jessish, </span>
          </span>
          {text}
          <span className="text--second"></span>
        </section>
      </motion.header>
    </>
  );
};

export default Intro;
