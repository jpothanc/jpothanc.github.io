import React, { createContext, useState } from "react";

export const CounterContext = createContext<Counter>({
  counter: 0,
  setCounter: () => {},
});

type Counter = {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
};

type Props = {
  children: React.ReactNode;
};
// Step 2: Create a Provider component
export const CounterProvider = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);

  // Step 3: Provide the value to the context
  const contextValue = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={contextValue}>
      {children}
    </CounterContext.Provider>
  );
};
