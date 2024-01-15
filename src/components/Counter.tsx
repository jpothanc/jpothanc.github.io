import { useEffect } from "react";
import { fetchData } from "../utils/helper";
import useCounter from "../hooks/useCounter";
import config from "../config/config.json";

const Counter = () => {
  const { counter, setCounter } = useCounter();

  useEffect(() => {
    const state = localStorage.getItem("counterState");
    if (counter || state === "loading") return;

    localStorage.setItem("counterState", "loading");
    
    const abortController = new AbortController();
    fetchData(config.portfolio.webCounterUrl, abortController).then((data) => {
      setCounter(data);
      localStorage.setItem("counterState", "");
    });

    return () => {};
  }, []);

  return <div className="counter">Visites : {counter}</div>;
};

export default Counter;
