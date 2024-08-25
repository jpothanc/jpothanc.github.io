import { motion } from "framer-motion";
import config from "../config/config.json";
import Menu from "./ToolBar";
import { ThemeConstants, fmScale } from "../constants";
import { getThemeColor } from "../utils/helper";

type Props = {
  pageInfo: string;
};
const NavBar = ({ pageInfo }: Props) => {
  return (
    <>
      <nav className="sticky top-0 z-50 initial border-spacing-4 ">
        <div
          className="w-full md:w-[70%] mx-auto"
          style={{
            background: getThemeColor(
              ThemeConstants.themeDark,
              ThemeConstants.logoBackground
            ),
          }}
        >
          <div className="flex justify-end text-xs hover:brightness-90 transition-all ease-in-out duration-100 bg-slate-700 text-white">
            {pageInfo}
          </div>

          <div className="flex justify-center gap-2 md:justify-between items-center flex-col md:flex-row ">
            <motion.a
              href="#"
              className="flex w-[70px] gap-1 items-center flex-col md:flex-row rounded-full border-transparent"
              variants={fmScale}
              initial="initial"
              whileHover="animate"
            >
              <img
                src="Jessish.jpg"
                alt="logo"
                className="bg-cover rounded-full"
              />
              <span className="text-black font-semibold text-sm self-center">
                {config.portfolio.firstname}&nbsp;{config.portfolio.secondname}
              </span>
            </motion.a>
            <span
              className="text-center md:text-start self-center px-2 py-2 text-black 
            font-semibold text-xs md:text-sm md:w-[400px]"
            >
              {config.portfolio.introBadge}
            </span>
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full z-9 md:w-[70%] border border-blue-400 mx-auto">
          <div className="flex justify-end items-center px-1 pt-1">
            <Menu color={ThemeConstants.barMenuColor} size="24px" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
