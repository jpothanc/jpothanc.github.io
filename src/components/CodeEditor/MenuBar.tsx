import { Icon } from "@iconify/react/dist/iconify.js";
import { ThemeConstants } from "../../constants";
import Menu from "../ToolBar";
import AboutIconMenu from "../About/AboutIconMenu";

type MenuBarProps = {
  onClick: () => void;
};

const MenuBar = ({ onClick }: MenuBarProps) => {
  return (
    <>
      <div
        className="flex flex-row bg-white/5 min-h-4 w-full  items-center pr-1
                  text-white/70 border border-white/10 "
      >
        {/* menu bar */}
        <div className="flex flex-row gap-1 items-center justify-start">
          <div className="p-1">
            <AboutIconMenu onClick={onClick} />
          </div>
          <span
            className="text-zinc-300 text-xs hover:text-white  p-1
                 hover:bg-white/20"
          >
            File
          </span>
          <span
            className="text-zinc-300 text-xs hover:text-white cursor-pointer p-1
                 hover:bg-white/20"
            onClick={onClick}
          >
            About
          </span>
        </div>
        {/* search bar */}
        <div
          className="border border-white/10 bg-white/10  rounded-md 
                    text-xs md:text-sm text-white/35 w-[60%]
                    hover:bg-white/60 hover:text-black  transition-all duration-300
                    flex flex-row gap-1 items-center justify-center align-middle ml-10 "
        >
          <span className="px-1">
            <Icon icon="quill:search" style={{ fontSize: "1.1rem" }} />
          </span>
          portfolio
        </div>
        <div className="pr-2 ml-auto flex ">
          <span className="text-zinc-300 text-sm hover:bg-white/20 p-2">
            <Icon icon="mdi:minimize" style={{ fontSize: "1.1rem" }} />
          </span>
          <span className="text-zinc-300 text-sm hover:bg-white/20 p-2">
            <Icon icon="mdi:maximize" style={{ fontSize: "1.1rem" }} />
          </span>
          <span className="text-zinc-300 text-sm hover:bg-red-800 p-2">
            <Icon icon="mdi:close" style={{ fontSize: "1.1rem" }} />
          </span>
        </div>
      </div>
      <div
        className="flex justify-center items-center  border border-white/10
                 bg-white/5 pt-2"
      >
        <Menu color={ThemeConstants.aboutMenuColor} size="22px" />
      </div>
    </>
  );
};

export default MenuBar;
