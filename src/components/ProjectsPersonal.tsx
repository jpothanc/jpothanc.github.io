import { personalProject } from "../utils/helper";
import IconLink from "./common/IconLink";
import { WindowMd, WindowMdRef } from "react-jp-ui";
import { useRef } from "react";
import useFetchReadMe from "../hooks/useFetchReadMe";

type personalProjectsProps = {
  personalProject: personalProject[];
};

const ProjectsPersonal = ({ personalProject }: personalProjectsProps) => {
  const modalRef = useRef<WindowMdRef | null>(null);
  const { data, loading, fetchReadme } = useFetchReadMe("");

  const handleOpenModal = (readme: string) => {
    fetchReadme(readme);
    modalRef.current?.open();
  };

  return (
    <>
      <div
        className="flex flex-wrap gap-2 justify-center w-full  xl:w-[40%] xl:min-w-[1200px]
        md:w-[90%] mx-auto "
      >
        {personalProject.map((project, index) => {
          return (
            <div
              className="flex flex-col gap-1 border border-white/10  pl-1 pr-1 rounded-lg text-sm 
              w-[400px] hover:scale-105 hover:shadow-lg  hover:border-theme-dark-primary
               transition-all duration-300 shadow-sm shadow-theme-dark-primary 
               dark:bg-gradient-to-b from-black/100 to-theme-dark-contentbg
               "
              key={index}
            >
              {/*Header*/}
              <header className="flex flex-col gap-2 items-start border-white/10 mr-auto">
                <div className="flex gap-2 border-white/10 pl-2 items-center pt-2 ">
                  <IconLink
                    skill="github"
                    color="#f59e0b"
                    link={project.repo}
                  />
                  <IconLink skill="Link" color="#0ea5e9" link={project.link} />
                  <IconLink
                    skill="ReadMe"
                    color="#65a30d"
                    onClick={() => handleOpenModal(project.readme)}
                    customStyle="cursor-pointer"
                  />
                </div>
                <div className="pl-2 flex items-center gap-2 text-white/80">
                  {project.name}
                </div>
              </header>

              {/*Description*/}
              <div
                className="text-theme-dark-textcolor text-[12px] md:text-[13px] flex-grow overflow-y-auto 
              rounded-lg p-2"
              >
                {project.description}
              </div>
              {/*Tech Stack*/}
              <div className="flex flex-col gap-2 border-white/10   mt-auto ml-auto pr-2">
                <div className="flex justify-end text-blue-500 text-[12px]">
                  Technologies
                </div>
                <div className="flex gap-2 justify-end">
                  {project.tech?.map((tech) => {
                    return <IconLink skill={tech} />;
                  })}
                </div>
              </div>
            </div>
          );
        })}
        <WindowMd
          title=""
          content={loading ? "Loading readme from git..." : data}
          bgcolor="#01070f"
          ref={modalRef}
        />
      </div>
    </>
  );
};

export default ProjectsPersonal;
