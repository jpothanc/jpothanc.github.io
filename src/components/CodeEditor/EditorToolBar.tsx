import { Icon } from "@iconify/react/dist/iconify.js";
import { ThemeConstants } from "../../constants";
import Menu from "../ToolBar";
import AboutIconMenu from "../About/AboutIconMenu";
import { motion } from "framer-motion";
import { toolBarItems } from "./CodeEditorHelper";

type MenuBarProps = {
  onClick: () => void;
  onResize: (type: string) => void;
};

const EditorToolBar = ({ onClick, onResize }: MenuBarProps) => {
  return (
    <>
      <div
        className="flex flex-row bg-white/5 min-h-4 w-full  items-center pr-1
                  text-white/70 border border-white/10"
      >
        {/* menu bar */}
        <div className="flex flex-row gap-1 items-center justify-start">
          <div className="p-1 ">
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
                    flex flex-r2ow gap-1 items-center justify-center align-middle ml-10 animate-pulse"
        >
          <span className="px-1">
            <Icon icon="quill:search" style={{ fontSize: "1.1rem" }} />
          </span>
          portfolio
        </div>
        <div className="pr-2 ml-auto flex ">
          {toolBarItems.map((item, index) => (
            <motion.span
              key={index}
              whileTap={{ scale: 1.5 }}
              className={`text-zinc-300 text-sm  p-2 ${
                item.name === "close" ? "hover:bg-red-600" : "hover:bg-white/20"
              }`}
              onClick={() => onResize(item.name)}
            >
              <Icon icon={item.icon} style={{ fontSize: "1.1rem" }} />
            </motion.span>
          ))}
        </div>
      </div>
      <div
        className="flex justify-center items-center  border border-white/10
                 bg-white/5 pt-2"
      >
        <Menu color={ThemeConstants.aboutMenuColor} size="24px" />
      </div>
    </>
  );
};

export default EditorToolBar;
