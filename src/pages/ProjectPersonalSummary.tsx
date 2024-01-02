import NavBar from "../components/NavBar";
import ProjectsPersonal from "../components/ProjectsPersonal";
import config from "../config/config.json";

const ProjectPersonalSummary = () => {
  return (
    <>
      <NavBar pageInfo="<projects/>" />
      <div className="summary_container">
        <ProjectsPersonal personalProject={config.portfolio.personalProjects} />
      </div>
    </>
  );
};

export default ProjectPersonalSummary;
