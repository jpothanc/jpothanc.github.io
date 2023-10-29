import { motion } from "framer-motion";
import Menu from "./Menu";
import { ThemeConstants, fmScaleAboutText } from "../constants";
import { getThemeColor } from "../lib/helper";

// const motivation = () => {
//   return
//     "Pursuing his passion,Passionate programmer," +
//       "Persistently perfects his programming prowess," +
//       "Pushing past obstacles and pitfalls."

// };

// life.apply(motivation);

const About = () => {
  return (
    <>
      <div>
        <motion.div
          className="about"
          style={{
            background: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.bodyBackground
            ),
          }}
        >
          <motion.div
            className="about__left"
            variants={fmScaleAboutText}
            initial="initial"
            whileHover="animate"
          >
            <motion.h4
              className="about__left__caption"
              variants={fmScaleAboutText}
              initial="initial"
              whileHover="animate"
              style={{
                color: getThemeColor(
                  ThemeConstants.themeDark,
                  ThemeConstants.aboutCaptionColor
                ),
              }}
            >
              Jessish Pothancheri
            </motion.h4>

            <div className="about__moto">
              <p className="u-white">&lt;</p>
              <p className="u-red">&nbsp; Pursuing his passion,&nbsp;&nbsp; </p>
              <p className="u-orange"> Passionate programmer,&nbsp;&nbsp;</p>
              <p className="u-blue">
                Persistently perfects his programming prowess,
              </p>
              <p className="u-green">
                &nbsp;&nbsp;Pushing past obstacles and pitfalls
              </p>
              <p className="u-white">&nbsp;/&gt;</p>
            </div>

            <Menu color={ThemeConstants.aboutMenuColor} size="32px" />
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
              whileHover={{ rotate: 30 }}
              initial={{ rotate: 0 }}
              transition={{
                type: "spring",
                stiffness: 200,
                // damping: 120,
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
