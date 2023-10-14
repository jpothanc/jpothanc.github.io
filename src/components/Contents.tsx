//import React from 'react'
import { motion } from "framer-motion";
import config from "../config.json";
import Badges from "./Badges";
import ListContent from "./ListContent";
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Contents = () => {
  return (
    <>
      <div className="content">
        <header className="headerContent">
          <section className="intro">
            <h1 className="first-heading">
              Hello <span className="emoji">👋</span>
            </h1>
            <p className="text">
              <span className="u-bold">
                I'm <span className="u-yellow">Jessish</span>
              </span>
              , Equities Front Office Solutions Technical and Delivery Lead with
              20+ years of experience in designing, implementing and optimizing
              technology solutions for an investment bank. My expertise lies in
              understanding the unique challenges of the equities front office
              environment and delivering innovative solutions that drive revenue
              generation, lead high-performing teams, optimise trading
              processes, reduce operational risk, and improve the overall client
              experience.
              <span className="text--second"></span>
            </p>
          </section>
        </header>
        <motion.header
          className="careerContent"
          whileHover={{ scale: 1.2 }} // Scale up the inner div on mouse hover
          whileTap={{ scale: 0.8 }} // Scale down the inner div when clicked
          initial={{ scale: 1 }} // Initial scale
          animate={{
            x: 0, // Reset x position when not hovering
            y: 0, // Reset y position when not hovering
          }}
        >
          <section className="intro">
            <p className="text">Career Path</p>
          </section>
        </motion.header>
        <main className="main">
          <ListContent list={config.portfolio.expertise}></ListContent>
          <Badges
            title="Technology"
            content=""
            skills={config.portfolio.technology}
          ></Badges>

          <Badges
            title="Skills"
            content=""
            skills={config.portfolio.skills}
          ></Badges>
          <div className="card">
            <section className="intro">
              Projects , Equities Front Office Solutions Technical and Delivery
              Lead with 20+ years of experience in designing, implementing and
              optimizing technology solutions for an investment bank. My
              expertise lies in understanding the unique challenges of the
              equities front office environment and delivering innovative
              solutions that drive revenue generation, lead high-performing
              teams, optimise trading processes, reduce operational risk, and
              improve the overall client experience.
            </section>
          </div>
          <div className="card">
            <section className="intro">git</section>
          </div>
          <Badges
            title="Achievements"
            content=""
            skills={config.portfolio.achievements}
          ></Badges>
        </main>
      </div>
    </>
  );
};

export default Contents;
