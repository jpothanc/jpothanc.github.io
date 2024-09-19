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
    {[
      {
        color: "green",
        text: "This site was developed using React(TS), Tailwind, Framer motion and Azure.",
      },
      {
        color: "blue",
        text: "Remember: Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.",
      },
      { color: "purple", text: "Loading more comments...", animate: true },
    ].map((item, index) => (
      <p
        key={index}
        className={`text-${item.color}-400 ${
          item.animate ? "animate-pulse" : ""
        }`}
      >
        {item.text}
      </p>
    ))}
  </div>
);

export const renderOutputContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    {[
      { color: "yellow", text: "[INFO] Building project..." },
      { color: "blue", text: "[LOG] Optimizing assets" },
      { color: "green", text: "[SUCCESS] Build completed in 3.14159 seconds" },
      { color: "purple", text: "[FUN] Taking a coffee break..." },
      {
        color: "cyan",
        text: "[STATUS] System ready for awesome ideas",
        animate: true,
      },
    ].map((item, index) => (
      <p
        key={index}
        className={`text-${item.color}-400 ${
          item.animate ? "animate-pulse" : ""
        }`}
      >
        {item.text}
      </p>
    ))}
  </div>
);

export const renderDebugContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    {[
      { color: "yellow", text: "[DEBUG] Initializing debug mode..." },
      { color: "purple", text: "[WARN] Detected infinite loop of great ideas" },
      {
        color: "red",
        text: "[ERROR] Exception caught: TooMuchAwesomenessError",
      },
      { color: "orange", text: "[ASSERT] User's mind = blown" },
      {
        color: "green",
        text: "[STATUS] Debugging complete. Ready to code!",
        animate: true,
      },
    ].map((item, index) => (
      <p
        key={index}
        className={`text-${item.color}-400 ${
          item.animate ? "animate-pulse" : ""
        }`}
      >
        {item.text}
      </p>
    ))}
  </div>
);
