import { motion } from "framer-motion";
import { fmScaleText } from "../constants";
import { getThemeColor } from "../lib/helper";

type Props = {
  text: string;
};

const Intro = ({ text }: Props) => {
  return (
    <>
      <header
        className="card"
        style={{
          background: getThemeColor("dark", "contentBackground"),
        }}
      >
        <section
          className="intro"
          style={{
            color: getThemeColor("dark", "contentTextColor"),
          }}
        >
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
        </section>
      </header>
    </>
  );
};

export default Intro;
