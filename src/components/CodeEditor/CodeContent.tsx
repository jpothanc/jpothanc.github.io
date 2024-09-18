import Cursor from "./Cursor";

const codeContent = [
  {
    id: 1,
    text: "Dreams.Create( i => {",
    color: "text-red-400",
    padding: "",
  },
  {
    id: 2,
    text: "i.Code().WithPrecision();",
    color: "text-teal-600",
    padding: "pl-8",
  },
  {
    id: 3,
    text: "i.Inspire().WithPassion();",
    color: "text-purple-500",
    padding: "pl-8",
  },
];
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
              key={item.id}
              className={`text-center ${item.color} ${item.padding} text-xs md:text-lg
              hover:scale-105 transition-all duration-300
              `}
            >
              {item.text}
            </p>
          ))}
          <div className="self-start pl-40 xl:pl-60">
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