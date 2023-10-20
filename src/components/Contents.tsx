import config from "../config.json";
import Badges from "./Badges";
import ListContent from "./Expertise";
import Experiance from "./Experiance";
import Intro from "./Intro";
import Links from "./Links";
import Projects from "./Projects";
import {
  FaStackOverflow,
  FaWrench,
  FaPersonChalkboard,
  FaCity,
  FaHands,
  FaChildReaching,
  FaGithub,
  FaGraduationCap,
  FaHandshakeSimple,
} from "react-icons/fa6";
import { FaSkiing } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef } from "react";
import NavBar from "./NavBar";
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
      <NavBar />
      <motion.div className="content">
        <motion.main
          className="main"
          ref={ref}
          // style={{
          //   scale: scaleProgress,
          //   opacity: opacityProgress,
          // }}
        >
          <Intro text={config.portfolio.intro}></Intro>

          <ListContent
            title="Expertise"
            items={config.portfolio.expertise}
            icon={FaSkiing}
          ></ListContent>
          <Badges
            title="Technology"
            content=""
            items={config.portfolio.technology}
            color="#CE93D8"
            icon={FaStackOverflow}
          ></Badges>

          <Badges
            title="Development Practices & Testing"
            content=""
            items={config.portfolio.DevelopmentPractices}
            color="#FF9100"
            icon={FaHands}
          ></Badges>
          <Badges
            title="Skills & Achievements"
            content=""
            items={config.portfolio.achievements}
            color="#EF5350"
            icon={FaWrench}
          ></Badges>
          <Links
            title="Education"
            content="BE, Computer Science from SEUA"
            icon={FaGraduationCap}
            links={[]}
          ></Links>
          <ListContent
            title="Current Responsilities"
            items={config.portfolio.currentresponsiblities}
            icon={FaHandshakeSimple}
          ></ListContent>
          <Links
            title="Git"
            content=""
            icon={FaGithub}
            links={config.portfolio.git}
          ></Links>

          <Links
            title="Articles"
            content=""
            icon={FaPersonChalkboard}
            links={config.portfolio.articles}
          ></Links>
          <Badges
            title="Personality"
            content=""
            items={config.portfolio.personality}
            color="#E8EAF6"
            icon={FaChildReaching}
          ></Badges>
          <Projects
            title="Projects"
            content=""
            items={config.portfolio.projects}
            icon={FaCity}
          ></Projects>
          <Links
            title="Contact"
            content=""
            icon={FaPersonChalkboard}
            links={[]}
          ></Links>
          <Experiance timeline={config.portfolio.experiance}></Experiance>
        </motion.main>
      </motion.div>
    </>
  );
};

export default Contents;
