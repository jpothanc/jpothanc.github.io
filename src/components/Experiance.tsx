import { motion } from "framer-motion";
import { shakeVariants, fmOpacity, ThemeConstants } from "../constants";
import { FaCode } from "react-icons/fa";
import { experiance, getIconByName, getThemeColor } from "../utils/helper";

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
        className="card flex flex-col md:flex-row"
        style={{
          background: getThemeColor(
            ThemeConstants.themeDark,
            "contentBackground"
          ),
        }}
      >
        <motion.h3
          className="flex flex-col gap-1 font-semibold xl:text-xl"
          style={{
            padding: "15px 40px",
            color: getThemeColor(ThemeConstants.themeDark, "cardTitleColor"),
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
              color: getThemeColor(
                ThemeConstants.themeDark,
                ThemeConstants.contentTextColor
              ),
            }}
          >
            <motion.section
              id="experience"
              className="basic-text xl:text-md"
              variants={fmOpacity}
              whileInView="animate"
            >
              <VerticalTimeline lineColor="#4dabf5">
                {timeline.map((item, index) => (
                  <React.Fragment key={index}>
                    <VerticalTimelineElement
                      contentStyle={{
                        background: getThemeColor(
                          ThemeConstants.themeDark,
                          ThemeConstants.careerContentBackground
                        ),
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        width: 350,

                        // color: "#64B5F6",
                      }}
                      contentArrowStyle={{
                        borderRight: "0.4rem solid #4dabf5",
                      }}
                      //date={item.date}
                      icon={getIconByName(item.icon)}
                      iconStyle={{
                        background: getThemeColor(
                          ThemeConstants.themeDark,
                          ThemeConstants.careerContentBackground
                        ),
                        fontSize: 10,
                        border: "none",
                      }}
                    >
                      <h3
                        style={{
                          fontSize: 16,
                          fontWeight: 500,
                          textRendering: "optimizeLegibility",
                          color: getThemeColor(
                            ThemeConstants.themeDark,
                            "careerHeader"
                          ),
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: 13 }}>{item.location}</p>
                      <p style={{ fontSize: 12 }}>{item.description}</p>
                      <p
                        style={{
                          fontSize: 12,
                          color: getThemeColor(
                            ThemeConstants.themeDark,
                            "careerDate"
                          ),
                        }}
                      >
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
