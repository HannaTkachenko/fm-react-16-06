import React, { useState } from "react";

const LearnHooks = (props) => {
  const [coords, setCoords] = useState({
    x:0,
    y:0,
    count : 0
  });
  const handlerMouseMove = (event)=>{
    setCoords({
      ...coords,
      x:event.clientX,
      y:event.clientY
    })
  }
  const handlerClick = () => {
    setCoords({
      ...coords,
      count: coords.count+1
    })
  }
  return (
    <div style={{height:'60vh', backgroundColor:'pink', textAlign:'center', paddingTop:'10vh'}}
    onMouseMove={handlerMouseMove}
    onClick={handlerClick}>
      <p>{coords.x}</p>
      <p>{coords.y}</p>
      <p>{coords.count}</p>
    </div>
  );
};

export default LearnHooks;
