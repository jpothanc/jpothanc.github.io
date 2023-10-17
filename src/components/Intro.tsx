import { motion } from "framer-motion";
import { fmScaleText } from "../constants";

type Props = {
  text: string;
};

const Intro = ({ text }: Props) => {
  return (
    <>
      <header className="headerContent">
        <section className="intro">
          <span className="u-bold">
            I'm{" "}
            <motion.span
              className="u-yellow"
              variants={fmScaleText}
              initial="initial"
              whileHover="animate"
            >
              Jessish,{" "}
            </motion.span>
          </span>
          {text}
          <span className="text--second"></span>
        </section>
      </header>
    </>
  );
};

export default Intro;
