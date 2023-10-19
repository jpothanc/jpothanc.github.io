import { motion } from "framer-motion";
import { shakeVariants, fmOpacity } from "../constants";
import { FaCode } from "react-icons/fa";
import { experiance, getIconByName, getThemeColor } from "../lib/helper";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

type timelineProps = {
  timeline: experiance[];
};

const Experiance = ({ timeline }: timelineProps) => {
  return (
    <>
      <div
        className="card"
        style={{
          background: getThemeColor("dark", "contentBackground"),
        }}
      >
        <motion.h3
          className="card-title"
          style={{
            padding: "15px 40px",
            color: getThemeColor("dark", "cardTitleColor"),
          }}
          variants={shakeVariants}
          initial="initial"
          whileHover="animate"
        >
          <FaCode size={28} />
          Experiance
        </motion.h3>
        <motion.header className="careerContent">
          <section
            className="intro"
            style={{
              color: getThemeColor("dark", "contentTextColor"),
            }}
          >
            <motion.section
              id="experience"
              className="text"
              variants={fmOpacity}
              whileInView="animate"
            >
              <VerticalTimeline lineColor="#FF1744">
                {timeline.map((item, index) => (
                  <React.Fragment key={index}>
                    <VerticalTimelineElement
                      contentStyle={{
                        background: getThemeColor(
                          "dark",
                          "careerContentBackground"
                        ),
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        width: 500,

                        // color: "#64B5F6",
                      }}
                      contentArrowStyle={{
                        borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                      }}
                      //date={item.date}
                      icon={getIconByName(item.icon)}
                      iconStyle={{
                        background: "rgba(100, 255, 100, 0.1)",
                        fontSize: 10,
                        border: "none",
                      }}
                    >
                      <h3 style={{ fontSize: 15, color: "#FF1744" }}>
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 13 }}>{item.location}</p>
                      <p style={{ fontSize: 12 }}>{item.description}</p>
                      <p style={{ fontSize: 12, color: "#64B5F6" }}>
                        {item.date}
                      </p>
                    </VerticalTimelineElement>
                  </React.Fragment>
                ))}
              </VerticalTimeline>
            </motion.section>
          </section>
        </motion.header>
      </div>
    </>
  );
};

export default Experiance;
