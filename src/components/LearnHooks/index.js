import React, { useState, useEffect } from "react";

const LearnHooks = (props) => {
  //console.log('render');
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(10);
  const handlerInput = ({target:{value}})=>{
    setStep(Number(value))
  }
  useEffect(() => {
    const handlerClick = () => {setCount(count=>count+step);};
    document.body.addEventListener("click", handlerClick);
    console.log('addEventListener');
    return ()=>{
      document.body.removeEventListener("click", handlerClick);
      console.log('removeEventListener');
    }
  },[]);
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
      <p>Count: {count}</p>
      <input value={step} onChange={handlerInput}/>
    </div>
  );
};

export default LearnHooks;
