import { motion } from "framer-motion";
import Menu from "../components/ToolBar";
import { ThemeConstants, primaryColor, shakeVariants } from "../constants";

import Footer from "../components/common/Footer";
import config from "../config/config.json";
import Avatar from "react-avatar";
import { CiMenuKebab } from "react-icons/ci";

import { useEffect, useRef, useState } from "react";
import { WindowMd, WindowMdRef } from "react-jp-ui";
import { Icon } from "@iconify/react/dist/iconify.js";

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
      <div className="App ">
        <div
          className="brand-logo hover:brightness-90 transition-all duration-300 "
          onClick={handleOpenModal}
        >
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
        <div className="flex justify-center items-center mt-3 xl:mt-1 h-[85vh]">
          <div>
            <motion.div className="flex flex-col gap-2 md:gap-4 md:flex-row xl:gap-x-20">
              <motion.div
                className="flex flex-col rounded-lg"
                variants={shakeVariants}
                initial="initial"
                whileHover="animate"
              >
                <div
                  className="md:text-lg xl:text-xl mb-5
                border border-white/10  "
                >
                  <div
                    className="flex flex-row bg-white/5 min-h-4 w-full justify-between items-center pr-1
                  text-white/80 border border-white/10"
                  >
                    <span className="pl-1">
                      <Icon
                        icon="material-symbols:fiber-manual-record-outline"
                        style={{ fontSize: "1.1rem" }}
                      />
                    </span>
                    <div
                      className="border border-white/10 bg-white/10 m-1 rounded-md 
                    text-center
                    text-xs md:text-sm text-white/35 w-[50%]
                    hover:bg-white/60 hover:text-black  transition-all duration-300
                    "
                    >
                      portfolio
                    </div>

                    <span className="text-white/50 hover:text-white">x</span>
                  </div>
                  <div
                    className="flex justify-center items-center  border border-white/10
                 bg-white/5 pt-2"
                  >
                    <Menu color={ThemeConstants.aboutMenuColor} size="24px" />
                  </div>
                  <div className="py-5 md:py-10 px-8">
                    <div className="pl-2 mb-2">
                      <span className="text-blue-700 font-bold">var</span>
                      <span className="text-blue-500 py-2 font-semibold">
                        {" "}
                        jessishPothancheri
                      </span>
                      <span className="text-white"> = </span>
                    </div>

                    <p className="u-red">Dreams.Create( i =&gt; &#123;</p>
                    <p className="u-torquise">
                      &nbsp; i.Code().WithPrecision();
                    </p>
                    <p className="u-blue">i.Inspire().WithPassion();</p>
                    <p className="u-green">
                      i.Innovate.WithPurpose(); &nbsp;&nbsp;
                    </p>
                    <span className="u-bracket">&#125;)</span>
                    <span className="text-white ">;</span>
                  </div>
                </div>
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
                  className="h-[240px] w-[240px] md:h-[300px] md:w-[300px] rounded-full"
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
