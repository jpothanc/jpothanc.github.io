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
import Counter from "../components/Counter";

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
                  className="mb-5
                border border-white/10  "
                >
                  <div
                    className="flex flex-row bg-white/5 min-h-4 w-full justify-between items-center pr-1
                  text-white/70 border border-white/10  "
                  >
                    <span className="pl-1">
                      <Icon
                        icon="material-symbols-light:terminal-sharp"
                        style={{ fontSize: "1.4rem" }}
                      />
                    </span>
                    <div
                      className="border border-white/10 bg-white/10 m-1 rounded-md 
                    text-xs md:text-sm text-white/35 w-[50%]
                    hover:bg-white/60 hover:text-black  transition-all duration-300
                    flex flex-row gap-2 items-center justify-center
                    
                    "
                    >
                      <span className="pX-1">
                        <Icon
                          icon="quill:search"
                          style={{ fontSize: "1.1rem" }}
                        />
                      </span>
                      portfolio
                    </div>

                    <span className="text-white/50 hover:text-white">x</span>
                  </div>
                  <div
                    className="flex justify-center items-center  border border-white/10
                 bg-white/5 pt-2"
                  >
                    <Menu color={ThemeConstants.aboutMenuColor} size="22px" />
                  </div>
                  <div className="py-5 md:py-10 px-8">
                    <div className="mb-2">
                      <span className="text-blue-700 text-xs md:text-md font-bold">
                        var
                      </span>
                      <span className="text-blue-500 text-xs md:text-md py-2">
                        {" "}
                        jessishPothancheri
                      </span>
                      <span className="text-white"> = </span>
                    </div>

                    <p className="text-center text-red-400 text-xs md:text-md ">
                      Dreams.Create( i =&gt; &#123;
                    </p>
                    <p className="text-center text-teal-400 text-xs md:text-md pt-2 pl-8 ">
                      i.Code().WithPrecision();
                    </p>
                    <p className="text-center text-blue-400 text-xs md:text-md pt-2 pl-8">
                      i.Inspire().WithPassion();
                    </p>
                    <p className="text-center text-orange-300 text-xs md:text-md pt-2 pl-8">
                      i.Innovate.WithPurpose();
                    </p>
                    <span className="text-center text-red-400 text-xs md:text-md">
                      &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &#125;)
                    </span>
                    <span className="text-white ">;</span>

                    <div className="flex justify-end items-center mt-5">
                      <Counter />
                    </div>
                  </div>
                  <div
                    className="flex justify-center items-center text-[10px]
                  text-zinc-400  border border-white/10 p-1 
                 hover:bg-white/70 hover:text-black hover-font-bold transition-all duration-300"
                  >
                    <p>
                      &copy; 2023 {config.portfolio.firstname}&nbsp;
                      {config.portfolio.secondname}. All Rights Reserved. |
                      Dream, Code, Inspire and Innovate.
                    </p>
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
