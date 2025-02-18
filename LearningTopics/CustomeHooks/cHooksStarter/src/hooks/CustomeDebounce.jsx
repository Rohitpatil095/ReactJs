import { useEffect } from "react";
import { useState } from "react";

export function ApiDebounce({ value }) {
  const [currValue, setCurrValue] = useState(value);
  useEffect(() => {
    const value = setInterval(() => {
      setCurrValue(value);
    }, 2000);
    return;
    clearInterval(value);
  }, [value]);
  return currValue;
}
