import { motion } from "framer-motion";
import { ThemeConstants, fmScaleText } from "../constants";
import { getThemeColor } from "../utils/helper";

type Props = {
  text: string;
};

const Intro = ({ text }: Props) => {
  return (
    <>
      <header
        className="card"
        style={{
          background: getThemeColor(
            ThemeConstants.themeDark,
            "contentBackground"
          ),
        }}
      >
        <section
          className="basic-text px-4 xl:text-md"
          style={{
            color: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.contentTextColor
            ),
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
          <span className="basic_text">
          {text}
          </span>
        </section>
      </header>
    </>
  );
};

export default Intro;
