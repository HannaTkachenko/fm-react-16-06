import React, { useState } from "react";

const LearnHooks = (props) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [count, setCount] = useState(0);
  const handlerMouseMove = (event) => {
    setCoords({
      x: event.clientX,
      y: event.clientY,
    });
  };
  const handlerClick = () => {
    setCount((prevCount)=>prevCount+1);
  };
  return (
    <div
      style={{
        height: "60vh",
        backgroundColor: "pink",
        textAlign: "center",
        paddingTop: "10vh",
      }}
      onMouseMove={handlerMouseMove}
      onClick={handlerClick}
    >
      <p>{coords.x}</p>
      <p>{coords.y}</p>
      <p>Count: {count}</p>
    </div>
  );
};

export default LearnHooks;
