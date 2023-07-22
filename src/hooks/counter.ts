import { useState } from "react";

type ICounter = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
};

const useCounter = (initialValue: number = 0): ICounter => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : prevCount));
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
