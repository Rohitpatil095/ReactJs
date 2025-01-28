import { useState } from "react";
export default function PropDrill() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* This middleware just to seperate things from App.jsx direct */}

      <PropDrillingHelper count={count} />

      {/* <button type="button" onClick={setCount(count + 1)}>
        Increment
      </button>
      <button type="button" onClick={setCount(count - 1)}>
        Decrement
      </button> */}
    </>
  );
}

function PropDrillingHelper({ count }) {
  return (
    <>
      {/* This is just a middleware which is passing count to below and not using it */}
      <UsePropDrillVariable count={count} />
    </>
  );
}

function UsePropDrillVariable({ count }) {
  return <>count is {count}</>;
}
