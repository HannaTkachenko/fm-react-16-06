import React, { useState } from "react";
import FuncStopWatch from './components/FuncStopWatch/index';


const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const handlerVisible = ()=>{
    setIsVisible(!isVisible);
  }
  return (
    <>
    <button onClick={handlerVisible}>switch visible</button>
    {isVisible && <FuncStopWatch />}
    </>
  );
};

export default App;
