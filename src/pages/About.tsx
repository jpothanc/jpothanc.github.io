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

const About = () => {
  const [readmeContent, setReadmeContent] = useState("");
  const modalRef = useRef<WindowMdRef | null>(null);

  useEffect(() => {
    console.log("useEffect");
    const fetchReadme = async () => {
      try {
        const response = await fetch(config.portfolio.readmeUrl);
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
        <div className="brand-logo hover:brightness-90 transition-all duration-300" onClick={handleOpenModal}>
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
        <div className="flex justify-center items-center mt-3 md:mt-1 md:h-[85vh]">
          <div>
            <motion.div
              className="flex flex-col gap-6 md:gap-5 md:flex-row"
              style={{
                background: getThemeColor(
                  ThemeConstants.themeDark,
                  ThemeConstants.bodyBackground
                ),
              }}
            >
              <motion.div
                className="flex flex-col"
                variants={fmScaleAboutText}
                initial="initial"
                whileHover="animate"
              >
                <motion.div
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
                  <span
                    className="flex justify-center bg-white/80 text-black
                  text-2xl md:text-3xl p-1"
                  >
                    {config.portfolio.firstname}
                  </span>
                  <span className="flex justify-center bg-theme-dark-primary text-2xl md:text-3xl p-1">
                    {config.portfolio.secondname}
                  </span>
                </motion.div>

                <div className="about__moto text-xs md:text-lg mb-5 md:mb-2">
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
                className="flex justify-center items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleOpenModal}
              >
                <motion.img
                  src="jpothanc.PNG"
                  alt="logo"
                  className="h-[220px] w-[220px] md:h-[300px] md:w-[300px] rounded-full"
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
