import { codeContent } from "./CodeEditorHelper";
import Cursor from "./Cursor";

const CodeContent = () => {
  return (
    <>
      <div className="py-5 md:py-10 px-8">
        <div className="ml-5 md:ml-20">
          <span className="text-blue-700 text-sm md:text-lg font-bold">
            var
          </span>
          <span className=" animate-pulse text-blue-400 text-sm md:text-lg py-2">
            {" "}
            jessishPothancheri
          </span>
          <span className="text-white text-sm md:text-lg"> = </span>
        </div>
        {/* code */}
        <div className=" border-white/10 flex justify-center items-center flex-col gap-2">
          {codeContent.map((item) => (
            <p
              className={`text-center ${item.color} ${item.padding} text-xs md:text-lg
              hover:scale-105 transition-all duration-300
              `}
            >
              {item.text}
            </p>
          ))}
          <div className="self-start pl-28 md:pl-32 lg:pl-40 xl:pl-60">
            <span className="text-center text-red-400 text-xs md:text-lg">
              &#125;)
            </span>
            <span className="text-white ">;</span>
            <Cursor />
          </div>
        </div>
      </div>
    </>
  );
};

export default CodeContent;
