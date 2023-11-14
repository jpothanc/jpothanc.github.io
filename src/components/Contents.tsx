import config from "../config/config.json";
import Badges from "./common/Badges";
import ListContent from "./Expertise";
import Experiance from "./Experiance";
import Intro from "./Intro";
import Links from "./common/Links";
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
import { ThemeConstants } from "../constants";
import { getThemeColor } from "../utils/helper";
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
            color={getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.badgeTechColor
            )}
            icon={FaStackOverflow}
          ></Badges>

          <Badges
            title="Development Practices & Testing"
            content=""
            items={config.portfolio.DevelopmentPractices}
            color={getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.badgeDevPracticeColor
            )}
            icon={FaHands}
          ></Badges>
          <Badges
            title="Skills & Achievements"
            content=""
            items={config.portfolio.achievements}
            color={getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.badgeSkillsColor
            )}
            icon={FaWrench}
          ></Badges>
          <Links
            title="Education"
            content="Completed BE in CS from SEUA [Armenia - Yerevan (2000)]"
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
            color={getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.badgePersonalityColor
            )}
            icon={FaChildReaching}
          ></Badges>
          <Projects
            title="Projects"
            content=""
            items={config.portfolio.projects}
            icon={FaCity}
          ></Projects>

          <Experiance timeline={config.portfolio.experiance}></Experiance>
        </motion.main>
      </motion.div>
    </>
  );
};

export default Contents;
