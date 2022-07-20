import React, { useState, useEffect } from "react";

const LearnHooks = (props) => {
  //console.log('render');
  // const [count, setCount] = useState(0);
  // const [step, setStep] = useState(10);
  const [state, setState] = useState({
    count: 0,
    step: 10,
  });
  const handlerInput = ({ target: { value } }) => {
    setState({
      ...state,
      step: Number(value),
    });
  };
  useEffect(() => {
    const handlerClick = () => {
      setState(({count})=>({
        ...state,
        count: count + state.step,
      }));
    };
    document.body.addEventListener("click", handlerClick);
    console.log("addEventListener");
    return () => {
      document.body.removeEventListener("click", handlerClick);
      console.log("removeEventListener");
    };
  }, [state.step]);
  return (
    <div
      style={{
        height: "60vh",
        backgroundColor: "pink",
        textAlign: "center",
        paddingTop: "10vh",
      }}
      // onClick={handlerClick}
    >
      <p>Count: {state.count}</p>
      <input value={state.step} onChange={handlerInput} />
    </div>
  );
};

export default LearnHooks;
