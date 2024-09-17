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
      className="text-black font-bold text-xs border border-black bg-white/70
   pt-1 pl-2 pr-2 pb-1  hover:brightness-75 transition-all duration-300 rounded-lg"
    >
      Visites : {counter}
    </div>
  );
};

export default Counter;
