import config from "../config/config.json";
import Badges from "../components/common/Badges";
import ListContent from "../components/Expertise";
import Experiance from "../components/Experiance";
import Intro from "../components/Intro";
import Links from "../components/common/Links";
import ProjectsWork from "../components/ProjectsWork";
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
import NavBar from "../components/NavBar";
import { ThemeConstants } from "../constants";
import { getThemeColor } from "../utils/helper";
import IconBadges from "../components/common/IconBadges";
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
      <motion.div
        className="flex justify-start md:justify-center w-full 
        mx-auto mt-5 
        xl:w-[40%] xl:min-w-[1200px]
        md:w-[90%]
        bg-theme-dark-primary/25
       "
      >
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

          <IconBadges
            title="Technology"
            content=""
            badges={config.portfolio.techSkills}
            icon={FaStackOverflow}
          ></IconBadges>

          <IconBadges
            title="Development Practices & Testing"
            content=""
            badges={config.portfolio.DevelopmentPractices}
            icon={FaHands}
          ></IconBadges>
          <IconBadges
            title="Skills & Achievements"
            content=""
            badges={config.portfolio.achievements}
            // color={getThemeColor(
            //   ThemeConstants.themeDark,
            //   ThemeConstants.badgeSkillsColor
            // )}
            icon={FaWrench}
          ></IconBadges>
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
          <ProjectsWork
            title="Roles & Projects"
            content=""
            items={config.portfolio.projects}
            icon={FaCity}
          ></ProjectsWork>

          <Experiance timeline={config.portfolio.experiance}></Experiance>
        </motion.main>
      </motion.div>
    </>
  );
};

export default Contents;
