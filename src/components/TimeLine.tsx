import React from "react";
import { motion } from "framer-motion";
import { fmScale } from "../constants";
const TimeLine = () => {
  return (
    <>
      <motion.header
        className="careerContent"
        variants={fmScale}
        initial="initial"
        whileHover="animate"
      >
        <section className="intro">
          <img
            src="https://images.unsplash.com/photo-1570211776091-c19f426d37af?auto=format&fit=crop&w=70&q=100"
            alt="logo"
            className="logo"
          />
          <p className="text">Career Path</p>
        </section>
      </motion.header>
    </>
  );
};

export default TimeLine;
