import React, { useState } from "react";

const LearnHooks = (props) => {
  console.log('render');
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const handlerClick = () => {
    setCount(count + step);
    console.log(count);
  };
  const handlerInput = ({target:{value}}) => {
    setStep(Number(value));
  };
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handlerClick}>Add</button>
      <input type="number" onChange={handlerInput} value={step} />
    </div>
  );
};

export default LearnHooks;
