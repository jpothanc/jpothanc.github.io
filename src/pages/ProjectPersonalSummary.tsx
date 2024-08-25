import NavBar from "../components/NavBar";
import ProjectsPersonal from "../components/ProjectsPersonal";
import config from "../config/config.json";

const ProjectPersonalSummary = () => {
  return (
    <>
      <NavBar/>
      <div className="mx-auto mt-5">
        <ProjectsPersonal personalProject={config.portfolio.personalProjects} />
      </div>
    </>
  );
};

export default ProjectPersonalSummary;
