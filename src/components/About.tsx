import { motion } from "framer-motion";
import Menu from "./Menu";
import { fmScaleAboutText } from "../constants";
import { getThemeColor } from "../lib/helper";

const About = () => {
  return (
    <>
      <div>
        <motion.div
          className="about"
          style={{
            background: getThemeColor("dark", "bodyBackground"),
          }}
        >
          <motion.div
            className="about__left"
            variants={fmScaleAboutText}
            initial="initial"
            whileHover="animate"
          >
            <h3 className="text">Jessish Pothancheri</h3>
            <p
              className="about__left__caption"
              style={{
                color: getThemeColor("dark", "aboutSubCaptionColor"),
              }}
            >
              Pursuing his passion, the passionate programmer persistently
              perfects his programming prowess, pushing past obstacles and
              pitfalls.
            </p>
            <Menu color="aboutMenuColor" size="32px" />
          </motion.div>
          <motion.div
            className="about__right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <img src="about_right.PNG" alt="logo" />
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
