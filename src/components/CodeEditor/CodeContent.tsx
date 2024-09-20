import { codeContent } from "./CodeEditorHelper";
import Cursor from "./Cursor";

const CodeContent = () => {
  return (
    <>
      <div className="flex flex-col m-5">
        <div className="ml-5 md:ml-32 lg:ml-40 xl:ml-48">
          <span className="text-blue-700 text-sm md:text-lg font-bold">
            var
          </span>
          <span className="text-blue-400 text-sm md:md:text-[15px] py-2">
            {" "}
            jessishPothancheri
          </span>
          <span className="text-white text-sm md:md:text-[15px]"> = </span>
        </div>
        {/* code */}
        <div className=" border-white/10 flex justify-center items-center flex-col gap-2">
          {codeContent.map((item) => (
            <p
              className={`text-center ${item.color} ${item.padding} text-xs md:text-[15px]
              hover:scale-105 transition-all duration-300
              `}
            >
              {item.text}
            </p>
          ))}
          <div className="self-start pl-22 md:pl-24 lg:pl-32 xl:pl-60">
            <span className="text-center text-red-400 text-xs md:text-lg">
              &#125;)
            </span>
            <span className="text-white ">;</span>
            <br></br>
            <div className="animate-pulse text-sm md:text-[15px]">
              <span className="text-blue-400">jessishPothancheri</span>
              <span className="text-yellow-100 ">.Run</span>
              <span className="text-red-400 ">()</span>
              <span className="text-white ">;</span>
              <Cursor />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeContent;
