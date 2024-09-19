import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from "react";
import {
  commentsToolBarItems,
  debugToolBarItems,
  outputToolBarItems,
  terminalToolBarItems,
} from "./CodeEditorHelper";
import {
  renderCommentsContent,
  renderDebugContent,
  renderOutputContent,
  renderTerminalContent,
} from "./ConsolePanelRenderers";
const menuItems = ["OUTPUT", "TERMINAL", "COMMENTS", "DEBUG"];

const filterInputs = {
  COMMENTS: "Filter (e.g, text,author)",
  DEBUG: "Filter (e.g, text,!exclude,\\escape)",
};

const ConsolePanel = () => {
  const [activeMenu, setActiveMenu] = useState(menuItems[1]);
  const [toolBarItems, setToolBarItems] = useState(terminalToolBarItems);

  useEffect(() => {
    if (activeMenu === "TERMINAL") setToolBarItems(terminalToolBarItems);
    else if (activeMenu === "OUTPUT") setToolBarItems(outputToolBarItems);
    else if (activeMenu === "COMMENTS") setToolBarItems(commentsToolBarItems);
    else if (activeMenu === "DEBUG") setToolBarItems(debugToolBarItems);
  }, [activeMenu]);
  return (
    <>
      <div className="w-full border-t border-white/10 h-[140px]">
        {/* toolbar menu */}
        <header className="flex h-[30px] justify-between flex-wrap gap-1 md:gap-0">
          <div className="flex justify-start gap-1 items-center ">
            {menuItems.map((item, index) => (
              <span
                key={index}
                className="text-zinc-400 text-[10px] md:text-[12px] hover:text-white p-1 cursor-pointer"
                onClick={() => setActiveMenu(item)}
              >
                {activeMenu === item ? (
                  <span className="text-white border-b border-white">
                    {item}
                  </span>
                ) : (
                  <span className="text-zinc-400">{item}</span>
                )}
              </span>
            ))}
          </div>

          {/* tool bar items */}
          <div className="flex justify-end items-center gap-1 pr-1">
            {(activeMenu === "COMMENTS" || activeMenu === "DEBUG") && (
              <input
                type="text"
                placeholder={filterInputs[activeMenu]}
                className="hidden md:block bg-white/10 h-[80%] rounded-sm pl-2 text-white text-[12px] 
               w-52 pr-2 focus:outline-none focus:ring-1 focus:ring-blue-500
              placeholder-zinc-400
             font-extralight
              "
              />
            )}
            {toolBarItems.map((item, index) => (
              <span
                key={index}
                className="text-zinc-300 text-xs hover:bg-white/20 p-1 cursor-pointer"
              >
                <Icon icon={item.icon} style={{ fontSize: "1.1rem" }} />
              </span>
            ))}
          </div>
        </header>
        {/* terminal content */}
        <div className="h-full bg-black/50 text-white text-xs md:text-md text-zinc-400 pt-3 md:pt-2 font-light pl-2">
          {activeMenu === "TERMINAL" && renderTerminalContent()}
          {activeMenu === "COMMENTS" && renderCommentsContent()}
          {activeMenu === "OUTPUT" && renderOutputContent()}
          {activeMenu === "DEBUG" && renderDebugContent()}
        </div>
      </div>
    </>
  );
};

export default ConsolePanel;
