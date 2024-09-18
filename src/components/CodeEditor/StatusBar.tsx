const copyright =
  "2023. All Rights Reserved. | Dream, Code, Inspire and Innovate.";
const StatusBar = () => {
  return (
    <>
      <div
        className="flex justify-center items-center text-[10px] md:text-[12px]
                  text-zinc-400  bg-white/5 border border-white/10 p-1 
                 hover:bg-white/70 hover:text-black hover-font-bold transition-all duration-300"
      >
        <p>&copy; {copyright}</p>
      </div>
    </>
  );
};

export default StatusBar;
