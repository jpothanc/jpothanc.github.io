import { useEffect } from "react";
import { fetchData } from "../utils/helper";
import useCounter from "../hooks/useCounter";
import config from "../config/config.json";

const Counter = () => {
  const { counter, setCounter } = useCounter();

  useEffect(() => {
    if (counter) return;
    const abortController = new AbortController();
    fetchData(config.portfolio.webCounterUrl, abortController).then((data) => {
      setCounter(data);
      localStorage.setItem("counterState", "");
    });

    return () => {};
  }, []);

  return (
    <div
      className="text-black  text-xs text-zinc-400 pt-1 pl-2 pr-2 pb-1 border border-white/10 p-1 
  hover:bg-white/70 hover:text-black hover-font-bold transition-all duration-300 rounded-lg"
    >
      Visitors : {counter}
    </div>
  );
};

export default Counter;
