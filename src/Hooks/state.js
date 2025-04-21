import React, { useState } from "react";

export default function State() {
  const [counter, setCounter] = useState(0);
  const addone = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={addone}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
}
