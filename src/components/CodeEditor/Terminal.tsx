import { Icon } from "@iconify/react/dist/iconify.js";
import Counter from "../Counter";
import { useEffect, useState } from "react";
import Cursor from "./Cursor";
import {
  commentsToolBarItems,
  debugToolBarItems,
  outputToolBarItems,
  terminalToolBarItems,
} from "./CodeEditorHelper";
const menuItems = ["OUTPUT", "TERMINAL", "COMMENTS", "DEBUG"];

const renderTerminalContent = () => (
  <div className="text-[12px] md:text-[14px]">
    <p>
      PS c:\projects\jpothanc &gt;{" "}
      <span className="text-yellow-400">visitor --count</span>
    </p>
    <p className="mt-2">
      <Counter />
    </p>
    <p className="text-zinc-400 pt-2">
      Thanks for visiting my profile. <Cursor />
    </p>
  </div>
);

const renderCommentsContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    <p className="text-green-500">
      This site was developed using React(TS), Tailwind, Framer motion and
      Azure.
    </p>
    <p className="text-blue-400">
      Remember: Always code as if the person who ends up maintaining your code
      is a violent psychopath who knows where you live.
    </p>
    <p className="animate-pulse text-teal-400">Loading more comments...</p>
  </div>
);

const renderOutputContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    <p className="text-yellow-400">[INFO] Building project...</p>
    <p className="text-blue-400">[LOG] Optimizing assets</p>
    <p className="text-green-400">
      [SUCCESS] Build completed in 3.14159 seconds
    </p>
    <p className="text-purple-400">
      [FUN] Taking a coffee break...
    </p>
    <p className="animate-pulse text-cyan-400">
      [STATUS] System ready for awesome ideas
    </p>
  </div>
);

const renderDebugContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    <p className="text-yellow-400">[DEBUG] Initializing debug mode...</p>
    <p className="text-purple-400">
      [WARN] Detected infinite loop of great ideas
    </p>
    <p className="text-red-400">
      [ERROR] Exception caught: TooMuchAwesomenessError
    </p>
    <p className="text-orange-400">[ASSERT] User's mind = blown</p>
    <p className="animate-pulse text-green-400">
      [STATUS] Debugging complete. Ready to code!
    </p>
  </div>
);

const filterInputs = {
  COMMENTS: "Filter (e.g, text,author)",
  DEBUG: "Filter (e.g, text,!exclude,\\escape)",
};

const Terminal = () => {
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
        <header className="flex h-[25px] justify-between">
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
                className="hidden md:block bg-white/10 h-[80%] rounded-sm pl-2 text-white text-[10px] 
              md:text-[12px] focus:outline-none focus:ring-1 focus:ring-blue-500
              placeholder-zinc-100
              font-thin
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
        <div className="h-full bg-black/50 text-white text-xs md:text-md text-zinc-400 pt-2 font-light">
          {activeMenu === "TERMINAL" && renderTerminalContent()}
          {activeMenu === "COMMENTS" && renderCommentsContent()}
          {activeMenu === "OUTPUT" && renderOutputContent()}
          {activeMenu === "DEBUG" && renderDebugContent()}
        </div>
      </div>
    </>
  );
};

export default Terminal;
