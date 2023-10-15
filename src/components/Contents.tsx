import config from "../config.json";
import Badges from "./Badges";
import ListContent from "./ListContent";
import Experiance from "./Experiance";
import Intro from "./Intro";

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
            skills={config.portfolio.technology}
          ></Badges>

          <Badges
            title="Development Practices & Testing"
            content=""
            skills={config.portfolio.DevelopmentPractices}
          ></Badges>
          <Badges
            title="Projects"
            content=""
            skills={config.portfolio.achievements}
          ></Badges>
          <Badges
            title="Articles"
            content=""
            skills={config.portfolio.articles}
          ></Badges>
          <Badges
            title="Skills & Achievements"
            content=""
            skills={config.portfolio.achievements}
          ></Badges>
        </main>
        <Experiance></Experiance>
      </div>
    </>
  );
};

export default Contents;
