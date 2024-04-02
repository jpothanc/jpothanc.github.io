import { motion } from "framer-motion";
import Menu from "../components/ToolBar";
import { ThemeConstants, fmScaleAboutText, primaryColor } from "../constants";
import { getThemeColor } from "../utils/helper";
import Footer from "../components/common/Footer";
import config from "../config/config.json";
import Avatar from "react-avatar";
import { CiMenuKebab } from "react-icons/ci";

import { useEffect, useRef, useState } from "react";
import { WindowMd, WindowMdRef } from "react-jp-ui";

// const motivation = () => {
//   return
//     "Pursuing his passion,Passionate programmer," +
//       "Persistently perfects his programming prowess," +
//       "Pushing past obstacles and pitfalls."

// };

// life.apply(motivation);

const About = () => {
  const [readmeContent, setReadmeContent] = useState("");
  const modalRef = useRef<WindowMdRef | null>(null);

  useEffect(() => {
    console.log("useEffect");
    const fetchReadme = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/jpothanc/jpothanc.github.io/readme"
        );
        const readmeData = await response.json();

        // Fetch raw content of README.md using download_url
        const readmeResponse = await fetch(readmeData.download_url);
        const text = await readmeResponse.text();
        console.log(text);
        setReadmeContent(text);
      } catch (error) {
        console.error("Error fetching README:", error);
      }
    };

    fetchReadme();

    return () => {};
  }, []);

  const handleOpenModal = () => {
    modalRef.current?.open();
  };

  return (
    <>
      <div className="App">
        <div className="brand-logo" onClick={handleOpenModal}>
          <div className="brand-logo__text">
            <CiMenuKebab size="24" />
          </div>
          <Avatar
            name=" &lt; j p / &gt;"
            size="50"
            round={true}
            color={primaryColor}
          />
        </div>
        <div className="about-container">
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
                  <span className="about__left_name__first-name">
                    {config.portfolio.firstname}
                  </span>
                  <span className="about_left_name__second-name">
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
                onClick={handleOpenModal}
              >
                <motion.img
                  src="jpothanc.PNG"
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
          <WindowMd
            title=""
            content={readmeContent}
            bgcolor="#212121"
            ref={modalRef}
          />
        </div>
      </div>
    </>
  );
};

export default About;
