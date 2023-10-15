import { motion } from "framer-motion";
import { fmScale, experiencesData, fmAnimate1 } from "../constants";
import config from "../config.json";
import { FaReact } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import { useSectionInView } from "../hooks/useSectionInView";
import { useState } from "react";

const Experiance = () => {
  //const { ref } = useSectionInView("Experience");
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <motion.header
        className="careerContent"
        variants={fmScale}
        initial="initial"
        whileTap="animate"
      >
        <section className="intro">
          <FaCode size={48} color="red" />
          <motion.section
            id="experience"
            //ref={ref}
            className="text--exp"
            variants={fmAnimate1}
            whileInView="animate"
          >
            <VerticalTimeline lineColor="red">
              {experiencesData.map((item, index) => (
                <React.Fragment key={index}>
                  <VerticalTimelineElement
                    contentStyle={{
                      background:
                        theme === "light"
                          ? "#f3f4f6"
                          : "rgba(255, 255, 255, 0.05)",
                      boxShadow: "none",
                      border: "1px solid rgba(0, 0, 0, 0.05)",
                      textAlign: "left",
                      padding: "1.3rem 2rem",
                      fontSize: 10,
                    }}
                    contentArrowStyle={{
                      borderRight:
                        theme === "light"
                          ? "0.4rem solid #9ca3af"
                          : "0.4rem solid rgba(255, 255, 255, 0.5)",
                    }}
                    date={item.date}
                    icon={item.icon}
                    iconStyle={{
                      background:
                        theme === "light"
                          ? "white"
                          : "rgba(255, 255, 190, 0.15)",
                      fontSize: 10,
                    }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.location}</p>
                    <p style={{ fontSize: 12 }}>{item.description}</p>
                  </VerticalTimelineElement>
                </React.Fragment>
              ))}
            </VerticalTimeline>
          </motion.section>
        </section>
      </motion.header>
    </>
  );
};

export default Experiance;
