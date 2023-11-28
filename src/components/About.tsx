import { motion } from "framer-motion";
import Menu from "./Menu";
import { ThemeConstants, fmScaleAboutText } from "../constants";
import { getThemeColor } from "../utils/helper";
import Footer from "./common/Footer";
import config from "../config/config.json";
import Avatar from "react-avatar";
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
      <div className="App">
        <div className="brand-logo">
          <Avatar
            name=" &lt; j p / &gt;"
            size="50"
            round={true}
            color="#004d40"
          />
        </div>
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
                <span className="about-first-name">
                  {config.portfolio.firstname}
                </span>
                <span className="about-second-name">
                  {config.portfolio.secondname}
                </span>
              </motion.h4>

              <div className="about__moto">
                <p className="u-white">&lt;</p>
                <p className="u-red">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Dreams.Create( i =&gt; &#123;
                </p>
                <p className="u-torquise">&nbsp; i.Code().WithPrecision();</p>
                <p className="u-blue">i.Inspire().WithPassion();</p>
                <p className="u-green">
                  i.Innovate.WithPurpose(); &nbsp;&nbsp;
                </p>
                <p className="u-bracket">&#125;)</p>
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
                src="coder3.PNG"
                alt="logo"
                className="about__logo"
                whileHover={{ rotate: -15 }}
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
        <Footer />
      </div>
    </>
  );
};

export default About;
