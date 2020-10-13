import React, { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);
  const increase = () => {
    // setNumber(number + 1);
    setNumber((prevNumver) => prevNumver + 1); // 뭔가.. a = a + 1 느낌이랄까
  };
  const decrease = () => {
    // setNumber(number - 1);
    setNumber((prevNumver) => prevNumver - 1);
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
    </div>
  );
}

export default Counter;
