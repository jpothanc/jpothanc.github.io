import { useContext } from "react";
import { CounterContext } from "../contexts/CounterProvider";

const useCounter = () => {
 const context = useContext(CounterContext);

 if (!context) {
   throw new Error("useNumber must be used within a NumberProvider");
 }

 return context;
}

export default useCounter