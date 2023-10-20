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
            <h4 className="text">Jessish Pothancheri</h4>
            <p
              className="about__left__caption"
              style={{
                color: getThemeColor("dark", "aboutSubCaptionColor"),
                // fontStyle: "italic",
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
            <motion.img
              src="Art2.PNG"
              alt="logo"
              style={{
                borderRadius: "50%",
              }}
              whileHover={{ rotate: 20 }}
              initial={{ rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                duration: 1,
              }}
            ></motion.img>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default About;
