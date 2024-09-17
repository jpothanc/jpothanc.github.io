import { motion } from "framer-motion";
import Counter from "../Counter";
import { shakeVariants, ThemeConstants } from "../../constants";
import { Icon } from "@iconify/react/dist/iconify.js";
import Menu from "../ToolBar";
import AboutIconMenu from "./AboutIconMenu";

type AboutCodeEditorProps = {
  onClick: () => void;
};

const AboutCodeEditor = ({ onClick }: AboutCodeEditorProps) => {
  return (
    <>
      <div>
        <motion.div
          className="flex flex-col rounded-lg"
          variants={shakeVariants}
          initial="initial"
          whileHover="animate"
        >
          <div className="mb-5 border border-white/10">
            <div
              className="flex flex-row bg-white/5 min-h-4 w-full  items-center pr-1
                  text-white/70 border border-white/10 w-[480px] lg:w-[600px] "
            >
              <div className="flex flex-row gap-1 items-center  justify-start ">
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
              <div
                className="border border-white/10 bg-white/10  rounded-md 
                    text-xs md:text-sm text-white/35 w-[70%]
                    hover:bg-white/60 hover:text-black  transition-all duration-300
                    flex flex-row gap-1 items-center justify-center align-middle ml-2 "
              >
                <span className="px-1">
                  <Icon icon="quill:search" style={{ fontSize: "1.1rem" }} />
                </span>
                portfolio
              </div>

              <span className="text-zinc-300 text-xshover:bg-red-800 pr-2 ml-auto  pr-1 pl-2">
                x
              </span>
            </div>
            <div
              className="flex justify-center items-center  border border-white/10
                 bg-white/5 pt-2"
            >
              <Menu color={ThemeConstants.aboutMenuColor} size="22px" />
            </div>
            <div className="py-5 md:py-10 px-8">
              <div className="mb-2">
                <span className="text-blue-700 text-xs md:text-lg font-bold">
                  var
                </span>
                <span className="text-blue-400 text-xs md:text-lg py-2">
                  {" "}
                  jessishPothancheri
                </span>
                <span className="text-white"> = </span>
              </div>

              <p className="text-center text-red-400 text-xs md:text-lg ">
                Dreams.Create( i =&gt; &#123;
              </p>
              <p className="text-center text-teal-400 text-xs md:text-lg pt-2 pl-8 ">
                i.Code().WithPrecision();
              </p>
              <p className="text-center text-purple-400 text-xs md:text-lg pt-2 pl-8">
                i.Inspire().WithPassion();
              </p>
              <p className="text-center text-zinc-400 text-xs md:text-lg pt-2 pl-9">
                i.Innovate.WithPurpose();
              </p>
              <span className="text-center text-red-400 text-xs md:text-lg">
                &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &#125;)
              </span>
              <span className="text-white ">;</span>

              <div className="flex justify-end items-center mt-5">
                <Counter />
              </div>
            </div>
            <div
              className="flex justify-center items-center text-[10px] md:text-[12px]
                  text-zinc-400  border border-white/10 p-1 
                 hover:bg-white/70 hover:text-black hover-font-bold transition-all duration-300"
            >
              <p>
                &copy; 2023. All Rights Reserved. | Dream, Code, Inspire and
                Innovate.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default AboutCodeEditor;
