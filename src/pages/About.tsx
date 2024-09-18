import { motion } from "framer-motion";

import config from "../config/config.json";

import { useEffect, useRef, useState } from "react";
import { WindowMd, WindowMdRef } from "react-jp-ui";
import AboutCodeEditor from "../components/CodeEditor/CodeEditor";

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
      <div className="Appl">
        <div className="flex justify-center items-center mt-3 xl:mt-1 h-[85vh]">
          <motion.div
            className="flex flex-col gap-2 md:gap-4 md:flex-row xl:gap-x-20 
           justify-center items-center w-full h-full mx-auto"
          >
            <div className="w-full md:w-[600px] lg:w-[700px] xl:w-[800px]">
              <AboutCodeEditor onClick={handleOpenModal} />
            </div>
          </motion.div>
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
