import { motion } from "framer-motion";
import { ThemeConstants, fmScaleText } from "../constants";
import { getThemeColor } from "../utils/helper";

type Props = {
  text: string;
};

const Intro = ({ text }: Props) => {
  return (
    <>
      <header className="card dark:bg-theme-dark-contentbg">
        <section
          className="basic-text leading-relaxed  px-4 xl:text-md"
          style={{
            color: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.contentTextColor
            ),
          }}
        >
          <span className="u-bold text-theme-dark-textcolor">
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
          <span className="basic_text text-theme-dark-textcolor">{text}</span>
        </section>
      </header>
    </>
  );
};

export default Intro;
