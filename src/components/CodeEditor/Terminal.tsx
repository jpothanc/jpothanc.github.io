import { Icon } from "@iconify/react/dist/iconify.js";
import Counter from "../Counter";
import { useState } from "react";
import Cursor from "./Cursor";
const menuItems = ["OUTPUT", "TERMINAL", "COMMENTS", "DEBUG CONSOLE"];

const toolBarItems = [
  {
    name: "terminal",
    icon: "octicon:terminal-16",
  },
  {
    name: "split",
    icon: "bi:layout-split",
  },
  {
    name: "delete",
    icon: "f7:trash",
  },
  {
    name: "close",
    icon: "mdi:close",
  },
];

const Terminal = () => {
  const [activeMenu, setActiveMenu] = useState(menuItems[1]);
  return (
    <>
      <div className="w-full border-t border-white/10 h-[140px]">
        <header className="flex h-[25px] justify-between">
          <div className="flex justify-start gap-1 items-center ">
            {menuItems.map((item, index) => (
              <span
                key={index}
                className="text-zinc-400 text-[12px] md:text-[11px] hover:text-white p-1 cursor-pointer"
                onClick={() => setActiveMenu(item)}
              >
                {activeMenu === item ? (
                  <span className="text-white underline">{item}</span>
                ) : (
                  <span className="text-zinc-400">{item}</span>
                )}
              </span>
            ))}
          </div>
          <div className="flex justify-end items-center gap-2 pr-2">
            {toolBarItems.map((item, index) => (
              <span
                key={index}
                className="text-zinc-300 text-sm hover:bg-white/20 p-1 cursor-pointer"
              >
                <Icon icon={item.icon} style={{ fontSize: "1.1rem" }} />
              </span>
            ))}
          </div>
        </header>
        {/* terminal content */}
        <div className=" h-fullbg-black/50 text-white text-xs md:text-md text-zinc-400 pt-1">
          {activeMenu === "TERMINAL" && (
            <>
              <p>
                PS c:\projects\passion\jpothanc &gt;{" "}
                <span className="text-yellow-400">vistor --count</span>
              </p>
              <p className="mt-2">
                <Counter />
              </p>
              <p className="text-zinc-400 text-sm md:text-md pt-2">
                Thanks for visiting my profile.
              </p>
            </>
          )}
          {activeMenu === "COMMENTS" && (
            <>
              <div className="text-sm md:text-md">
                <p className="text-green-500">
                  // This site was developed using React(TS), Tailwind, Framer
                  motion and Azure.
                </p>

                <p className="text-purple-400">
                  /* TODO: Impress visitors with awesome projects*/
                </p>
                <p className="text-blue-400">
                  // Remember: Always code as if the person who ends up
                  maintaining your code is a violent psychopath who knows where
                  you live.
                </p>
                <p className="animate-pulse text-teal-400">
                  // Loading more witty comments... <Cursor />
                </p>
              </div>
            </>
          )}
          {activeMenu === "OUTPUT" && (
            <>
              <div className="text-sm md:text-md">
                <p className="text-yellow-400">[INFO] Building project...</p>
                <p className="text-blue-400">[LOG] Optimizing assets</p>
                <p className="text-green-400">
                  [SUCCESS] Build completed in 3.14159 seconds
                </p>
                <p className="text-purple-400">
                  [FUN] Injecting caffeine into developer...
                </p>
                <p className="animate-pulse text-cyan-400">
                  [STATUS] System ready for awesome ideas
                </p>
              </div>
            </>
          )}
          {activeMenu === "DEBUG CONSOLE" && (
            <>
              <div className="text-sm md:text-md">
                <p className="text-yellow-400">
                  [DEBUG] Initializing debug mode...
                </p>
                <p className="text-purple-400">
                  [WARN] Detected infinite loop of great ideas
                </p>
                <p className="text-orange-400">[ASSERT] User's mind = blown</p>
                <p className="animate-pulse text-green-400">
                  [STATUS] Debugging complete. Ready to code!
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Terminal;
