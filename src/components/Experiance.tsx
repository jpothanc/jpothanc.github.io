import { motion } from "framer-motion";
import { fmScale, experiencesData, fmAnimate1 } from "../constants";
import { FaCode } from "react-icons/fa";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
//import { useSectionInView } from "../hooks/useSectionInView";

const Experiance = () => {
  return (
    <>
      <div className="card">
        <motion.header
          className="careerContent"
          variants={fmScale}
          initial="initial"
          whileTap="animate"
        >
          <section className="intro">
            <h3 className="card-title">
              <FaCode size={28} />
              Experiance
            </h3>

            <motion.section
              id="experience"
              //ref={ref}
              className="text"
              variants={fmAnimate1}
              whileInView="animate"
            >
              <VerticalTimeline lineColor="red">
                {experiencesData.map((item, index) => (
                  <React.Fragment key={index}>
                    <VerticalTimelineElement
                      contentStyle={{
                        background: "rgba(100, 255, 100, 0.05)",
                        boxShadow: "none",
                        border: "1px solid rgba(0, 0, 0, 0.05)",
                        textAlign: "left",
                        padding: "1.3rem 2rem",
                        // color: "#64B5F6",
                      }}
                      contentArrowStyle={{
                        borderRight: "0.4rem solid rgba(255, 255, 255, 0.5)",
                      }}
                      //date={item.date}
                      icon={item.icon}
                      iconStyle={{
                        background: "rgba(100, 255, 100, 0.1)",
                        fontSize: 10,
                        border: "none",
                      }}
                    >
                      <h3>{item.title}</h3>
                      <h3>{item.location}</h3>
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
