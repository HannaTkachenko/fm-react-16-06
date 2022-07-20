import React, { useState } from "react";
import LearnHooks from "./components/LearnHooks";


const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handlerVisible = ()=>{
    setIsVisible(!isVisible);
  }
  return (
    <>
    <button onClick={handlerVisible}>switch visible LearnHooks</button>
    {isVisible && <LearnHooks />}
    </>
  );
};

export default App;
