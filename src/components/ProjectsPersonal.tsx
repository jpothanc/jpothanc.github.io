import { SummaryCard } from "react-jp-ui";
import { personalProject } from "../utils/helper";

type personalProjectsProps = {
  personalProject: personalProject[];
};

const ProjectsPersonal = ({ personalProject }: personalProjectsProps) => {
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center w-full md:w-[70%] mx-auto ">
        {personalProject.map((project) => {
          return (
            <SummaryCard
              title={project.name}
              link={project.link}
              body={project.description}
              info={project.readme}
              repo={project.repo}
              tech={project.technology}
              height={500}
            />
          );
        })}
      </div>
    </>
  );
};

export default ProjectsPersonal;
