import React, {useState, useEffect} from 'react';
import { format, addMilliseconds } from 'date-fns';

const FuncStopWatch = () => {
  const [time, setTime] = useState(new Date(0,0,0,0,0,0));
  const [isRunning, setIsRunning] = useState(false);
  const handlerBtn = ()=>{setIsRunning(!isRunning)}
  const handlerBtnReset = ()=>{
    setTime(new Date(0,0,0,0,0,0));
    setIsRunning(false);
  }
  useEffect(()=>{
    if(isRunning){
      const idInterval = setInterval(()=>{
        setTime(time=>addMilliseconds(time, 1000))
      }, 1000);
      return ()=>{
        clearInterval(idInterval)
      }
    }
  },[isRunning]);
  return (
    <div>
      <h2>Stop Watch</h2>
      <h3>{format(time, 'HH:mm:ss')}</h3>
      <button onClick={handlerBtn}>{isRunning?'Stop':'Start'}</button>
      <button onClick={handlerBtnReset}>Reset</button>
    </div>
  );
}

export default FuncStopWatch;
