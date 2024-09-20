import { motion } from "framer-motion";
import Counter from "../Counter";
import Cursor from "./Cursor";
import { codeEditorVariants } from "./CodeEditorHelper";

export const renderTerminalContent = () => (
  <div className="text-[12px] md:text-[14px]">
    {[
      <p key="command">
        PS c:\projects\jpothanc &gt;{" "}
        <span className="text-yellow-400">visitor --count</span>
      </p>,
      <p key="counter" className="mt-2">
        <Counter />
      </p>,
      <p key="thanks" className="text-zinc-400 pt-2">
        Thanks for visiting my profile. <Cursor />
      </p>,
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={codeEditorVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
        transition={{ duration: 5.5 }}
        viewport={{
          once: true,
        }}
      >
        {item}
      </motion.div>
    ))}
  </div>
);

export const renderCommentsContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    {[
      {
        text: "This site was developed using React(TS), Tailwind, Framer motion and Azure.",
        style: "text-green-400",
      },
      {
        text: "Remember: Always code as if the person who ends up maintaining your code is a violent psychopath who knows where you live.",
        style: "text-blue-400",
      },
      {
        text: "Loading more comments...",
        style: "text-purple-400 animate-pulse",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={codeEditorVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
        transition={{ duration: 5.5 }}
        viewport={{
          once: true,
        }}
      >
        <p className={`${item.style}`}>{item.text}</p>
      </motion.div>
    ))}

    {/* <p className="text-green-400">
      This site was developed using React(TS), Tailwind, Framer motion and
      Azure.
    </p>
    <p className="text-blue-400">
      Remember: Always code as if the person who ends up maintaining your code
      is a violent psychopath who knows where you live.
    </p>
    <p className="text-purple-400 animate-pulse">Loading more comments...</p> */}
  </div>
);

export const renderOutputContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    {[
      {
        text: "[INFO] Building project...",
        style: "text-yellow-400",
      },
      {
        text: "[LOG] Optimizing assets",
        style: "text-blue-400",
      },
      {
        text: "[SUCCESS] Build completed in 3.14159 seconds",
        style: "text-green-400",
      },
      {
        text: "[FUN] Taking a coffee break...",
        style: "text-purple-400",
      },
      {
        text: "[STATUS] System ready for awesome ideas",
        style: "text-cyan-400 animate-pulse",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={codeEditorVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
      >
        <p className={`${item.style}`}>{item.text}</p>
      </motion.div>
    ))}
  </div>
);

// <div className="text-[12px] md:text-[14px] leading-5">
//   <p className="text-yellow-400">[INFO] Building project...</p>
//   <p className="text-blue-400">[LOG] Optimizing assets</p>
//   <p className="text-green-400">
//     [SUCCESS] Build completed in 3.14159 seconds
//   </p>
//   <p className="text-purple-400">[FUN] Taking a coffee break...</p>
//   <p className="text-cyan-400 animate-pulse">
//     [STATUS] System ready for awesome ideas
//   </p>
// </div>

export const renderDebugContent = () => (
  <div className="text-[12px] md:text-[14px] leading-5">
    {[
      {
        text: "[DEBUG] Initializing debug mode...",
        style: "text-yellow-400",
      },
      {
        text: "[WARN] Detected infinite loop of great ideas",
        style: "text-purple-400",
      },
      {
        text: "[ERROR] Exception caught: TooMuchAwesomenessError",
        style: "text-red-400",
      },
      {
        text: "[ASSERT] User's mind = blown",
        style: "text-orange-400",
      },
      {
        text: "[STATUS] Debugging complete. Ready to code!",
        style: "text-green-400 animate-pulse",
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        variants={codeEditorVariants}
        initial="initial"
        whileInView="animate"
        custom={index}
        transition={{ duration: 0.5 }}
        viewport={{
          once: true,
        }}
      >
        <p className={`${item.style}`}>{item.text}</p>
      </motion.div>
    ))}
  </div>
);
//       [WARN] Detected infinite loop of great ideas
//     </p>
//     <p className="text-red-400">
//       [ERROR] Exception caught: TooMuchAwesomenessError
//     </p>
//     <p className="text-orange-400">[ASSERT] User's mind = blown</p>
//     <p className="text-green-400 animate-pulse">
//       [STATUS] Debugging complete. Ready to code!
//     </p>
