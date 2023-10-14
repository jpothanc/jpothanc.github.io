//import React from 'react'
import { motion } from "framer-motion";
import config from "../config.json";
import Badges from "./Badges";
import ListContent from "./ListContent";
import TimeLine from "./TimeLine";
import Intro from "./Intro";
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Contents = () => {
  return (
    <>
      <div className="content">
        <Intro text={config.portfolio.intro}></Intro>
        <TimeLine></TimeLine>

        <main className="main">
          <ListContent
            title="Expertise"
            list={config.portfolio.expertise}
          ></ListContent>

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
          <Badges
            title="Projects"
            content=""
            skills={config.portfolio.achievements}
          ></Badges>
          <Badges
            title="Articles"
            content=""
            skills={config.portfolio.achievements}
          ></Badges>
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
