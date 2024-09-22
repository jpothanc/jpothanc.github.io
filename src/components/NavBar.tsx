import { motion } from "framer-motion";
import config from "../config/config.json";
import ToolBar from "./ToolBar";
import { ThemeConstants, fmScale } from "../constants";

const NavBar = () => {
  return (
    <>
      {/* small screens */}
      <nav
        className="md:hidden sticky top-0 z-50 initial border-spacing-4 dark:bg-gradient-to-r
       from-theme-dark-contentbg to-theme-dark-primary/60"
      >
        <div className="flex gap-2 w-full items-center justify-between rounded-full border-transparent p-1">
          <div className="flex items-center gap-2">
            <img
              src="Jessish.jpg"
              alt="logo"
              className="bg-cover rounded-full  w-[50px]"
            />
            {/* <span className="font-semibold text-xs text-white">
              {config.portfolio.firstname}&nbsp;{config.portfolio.secondname}
            </span> */}
          </div>

          <div className="justify-self-end   px-1 pt-1 ">
            <ToolBar color={ThemeConstants.barMenuColor} size="22px" />
          </div>
        </div>
      </nav>

      {/* medium, large screens */}

      <nav className="hidden md:block sticky top-0 z-50 initial border-spacing-4 text-black ">
        <div
          className="w-full md:w-[90%] xl:w-[40%] xl:min-w-[1200px] p-1 mx-auto opacity-95
          dark:bg-gradient-to-r from-theme-dark-contentbg to-theme-dark-primary/60
         dark:text-white"
        >
          <div className="flex justify-center gap-1 md:justify-between items-center  md:flex-row ">
            <motion.a
              href="#"
              className="flex w-[70px] gap-2 items-center flex-col md:flex-row rounded-full border-transparent"
              variants={fmScale}
              initial="initial"
              whileHover="animate"
            >
              <img
                src="Jessish.jpg"
                alt="logo"
                className="bg-cover rounded-full"
              />
              <span className="font-semibold text-sm self-center xl:text-lg">
                {config.portfolio.firstname}&nbsp;{config.portfolio.secondname}
              </span>
            </motion.a>

            <span
              className="flex flex-col gap-1 text-center md:text-start self-center px-2 py-1  
            font-semibold text-xs md:text-sm lg:text-sm xl:text-md
            hover:underline transition-all duration-300 justify-end
            "
            >
              <p>{config.portfolio.navBarTitle1}</p>
              <p>{config.portfolio.navBarTitle2}</p>
            </span>
          </div>
        </div>
        <div
          className="flex justify-center md:justify-end w-full md:w-[90%] xl:w-[40%] xl:min-w-[1200px]
         bg-theme-dark-contentbg border-b border-theme-dark-primary mx-auto"
        >
          <div className="flex justify-end items-center px-1 pt-1 ">
            <ToolBar color={ThemeConstants.barMenuColor} size="28px" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
