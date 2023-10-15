import config from "../config.json";
import Badges from "./Badges";
import ListContent from "./ListContent";
import Experiance from "./Experiance";
import Intro from "./Intro";
import Links from "./Links";
import { FaPersonChalkboard } from "react-icons/fa6";
const Contents = () => {
  return (
    <>
      <div className="content">
        <Intro text={config.portfolio.intro}></Intro>

        <main className="main">
          <ListContent
            title="Expertise"
            list={config.portfolio.expertise}
          ></ListContent>

          <Badges
            title="Technology"
            content=""
            items={config.portfolio.technology}
            color="#1DE9B6"
          ></Badges>

          <Badges
            title="Development Practices & Testing"
            content=""
            items={config.portfolio.DevelopmentPractices}
            color="#FFC107"
          ></Badges>
          <Badges
            title="Projects"
            content=""
            items={config.portfolio.achievements}
            color="#64B5F6"
          ></Badges>
          <Badges
            title="Skills & Achievements"
            content=""
            items={config.portfolio.achievements}
            color="#4DD0E1"
          ></Badges>
          <Links
            title="Education"
            content="BE, Computer Science from SEUA"
            icon={FaPersonChalkboard}
            links={[]}
          ></Links>
          <Links
            title="Git"
            content=""
            icon={FaPersonChalkboard}
            links={config.portfolio.git}
          ></Links>
          <Badges
            title="Personality"
            content=""
            items={config.portfolio.personality}
            color=""
          ></Badges>
          <Links
            title="Articles"
            content=""
            icon={FaPersonChalkboard}
            links={config.portfolio.articles}
          ></Links>

          <Experiance></Experiance>
        </main>
      </div>
    </>
  );
};

export default Contents;
