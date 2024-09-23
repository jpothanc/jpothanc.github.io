import { Icon } from "@iconify/react/dist/iconify.js";
import AboutIconMenu from "../About/AboutIconMenu";
import { motion } from "framer-motion";
import { toolBarItems } from "./CodeEditorHelper";
import { useState, useEffect, useRef } from "react";
import FileMenu from "./FileMenu";

type MenuBarProps = {
  onClick: () => void;
  onResize: (type: string) => void;
};

const EditorToolBar = ({ onClick, onResize }: MenuBarProps) => {
  const [showFileMenu, setShowFileMenu] = useState(false);
  const fileMenuRef = useRef<HTMLDivElement>(null);

  const toggleFileMenu = () => setShowFileMenu(!showFileMenu);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        fileMenuRef.current &&
        !fileMenuRef.current.contains(event.target as Node)
      ) {
        setShowFileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className="flex flex-row bg-white/5 min-h-4 w-full justify-around  items-center gap-3 pr-1
                  text-white/70 border border-white/10"
      >
        {/* menu bar */}
        <div className="flex flex-row gap-1 items-center">
          <div className="p-1 ">
            <AboutIconMenu onClick={onClick} />
          </div>
          <div className="relative" ref={fileMenuRef}>
            <span
              className="text-zinc-300 text-xs hover:text-white p-1
                   hover:bg-white/20 cursor-pointer "
              onClick={toggleFileMenu}
            >
              File
            </span>
            {showFileMenu && <FileMenu />}
          </div>
          <div className="relative">
            <span
              className="text-zinc-300 text-xs hover:text-white cursor-pointer p-1
                 hover:bg-white/20"
              onClick={onClick}
            >
              About
            </span>
          </div>
        </div>
        {/* search bar */}
        <div
          className="border border-white/10 bg-white/10  rounded-md 
                    text-xs md:text-sm text-white/35 w-[60%]
                   hover:text-white/80 transition-all duration-300
                    flex  gap-1 items-center justify-center  "
        >
          <span className="px-1">
            <Icon icon="quill:search" style={{ fontSize: "1.1rem" }} />
          </span>
          portfolio
        </div>
        <div className="flex">
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
    </>
  );
};

export default EditorToolBar;
