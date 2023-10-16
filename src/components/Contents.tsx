import config from "../config.json";
import Badges from "./Badges";
import ListContent from "./ListContent";
import Experiance from "./Experiance";
import Intro from "./Intro";
import Links from "./Links";
import {
  FaStackOverflow,
  FaWrench,
  FaPersonChalkboard,
  FaCity,
  FaHands,
  FaChildReaching,
  FaGithub,
  FaGraduationCap,
} from "react-icons/fa6";
import { motion } from "framer-motion";
import { useRef } from "react";

const Contents = () => {
  const ref = useRef<HTMLDivElement>(null);
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["0 1", "1.9 1"],
  // });
  // const scaleProgress = useTransform(scrollYProgress, [0, 1], [1, 0.6]);
  // const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <>
      <motion.div className="content">
        <Intro text={config.portfolio.intro}></Intro>
        <motion.main
          className="main"
          ref={ref}
          // style={{
          //   scale: scaleProgress,
          //   opacity: opacityProgress,
          // }}
        >
          <ListContent
            title="Expertise"
            list={config.portfolio.expertise}
          ></ListContent>

          <Badges
            title="Technology"
            content=""
            items={config.portfolio.technology}
            color="#1DE9B6"
            icon={FaStackOverflow}
          ></Badges>

          <Badges
            title="Development Practices & Testing"
            content=""
            items={config.portfolio.DevelopmentPractices}
            color="#FFC107"
            icon={FaHands}
          ></Badges>
          <Badges
            title="Projects"
            content=""
            items={config.portfolio.achievements}
            color="#64B5F6"
            icon={FaCity}
          ></Badges>
          <Badges
            title="Skills & Achievements"
            content=""
            items={config.portfolio.achievements}
            color="#4DD0E1"
            icon={FaWrench}
          ></Badges>
          <Links
            title="Education"
            content="BE, Computer Science from SEUA"
            icon={FaGraduationCap}
            links={[]}
          ></Links>
          <Links
            title="Git"
            content=""
            icon={FaGithub}
            links={config.portfolio.git}
          ></Links>
          <Badges
            title="Personality"
            content=""
            items={config.portfolio.personality}
            color="#E8EAF6"
            icon={FaChildReaching}
          ></Badges>
          <Links
            title="Articles"
            content=""
            icon={FaPersonChalkboard}
            links={config.portfolio.articles}
          ></Links>

          <Experiance></Experiance>
        </motion.main>
      </motion.div>
    </>
  );
};

export default Contents;
