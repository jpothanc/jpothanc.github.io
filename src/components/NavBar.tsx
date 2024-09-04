import { motion } from "framer-motion";
import config from "../config/config.json";
import Menu from "./ToolBar";
import { ThemeConstants, fmScale } from "../constants";

const NavBar = () => {
  return (
    <>
      <nav className="sticky top-0 z-50 initial border-spacing-4">
        <div className="w-full md:w-[90%] xl:w-[40%] xl:min-w-[1200px]  p-1 mx-auto opacity-95 bg-slate-100 hover:bg-white/80 transition-all duration-300">
          <div className="flex justify-center gap-1 md:justify-between items-center flex-col md:flex-row ">
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
              <span className="text-black font-semibold text-sm self-center xl:text-xl">
                {config.portfolio.firstname}&nbsp;{config.portfolio.secondname}
              </span>
            </motion.a>
            <span
              className="text-center md:text-start self-center px-1 py-1  
            font-semibold text-xs md:text-sm md:w-[400px] lg:text-sm xl:text-lg"
            >
              {config.portfolio.introBadge}
            </span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-[90%] xl:w-[40%] xl:min-w-[1200px] bg-black border border-theme-dark-primary mx-auto ">
          <div className="flex justify-end items-center px-1 pt-1">
            <Menu color={ThemeConstants.barMenuColor} size="24px" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
