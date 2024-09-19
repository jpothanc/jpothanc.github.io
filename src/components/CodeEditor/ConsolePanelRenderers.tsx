import Counter from "../Counter";
import Cursor from "./Cursor";

export const renderTerminalContent = () => (
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

export const renderCommentsContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    <p className="text-green-400">
      This site was developed using React(TS), Tailwind, Framer motion and
      Azure.
    </p>
    <p className="text-blue-400">
      Remember: Always code as if the person who ends up maintaining your code
      is a violent psychopath who knows where you live.
    </p>
    <p className="text-purple-400 animate-pulse">Loading more comments...</p>
  </div>
);

export const renderOutputContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    <p className="text-yellow-400">[INFO] Building project...</p>
    <p className="text-blue-400">[LOG] Optimizing assets</p>
    <p className="text-green-400">
      [SUCCESS] Build completed in 3.14159 seconds
    </p>
    <p className="text-purple-400">[FUN] Taking a coffee break...</p>
    <p className="text-cyan-400 animate-pulse">
      [STATUS] System ready for awesome ideas
    </p>
  </div>
);

export const renderDebugContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    <p className="text-yellow-400">[DEBUG] Initializing debug mode...</p>
    <p className="text-purple-400">
      [WARN] Detected infinite loop of great ideas
    </p>
    <p className="text-red-400">
      [ERROR] Exception caught: TooMuchAwesomenessError
    </p>
    <p className="text-orange-400">[ASSERT] User's mind = blown</p>
    <p className="text-green-400 animate-pulse">
      [STATUS] Debugging complete. Ready to code!
    </p>
  </div>
);
