import React, { useState, useEffect } from "react";

const LearnHooks = (props) => {
  console.log('render');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handlerClick = () => {setCount(count=>count+1);};
    //добавление побочек
    //componentDidUpdate
    document.body.addEventListener("click", handlerClick);
    console.log('addEventListener');
    return ()=>{
      //очистка от побочек
      //componentWillUnmount
      document.body.removeEventListener("click", handlerClick);
      console.log('removeEventListener');
    }
  }, 
  //componentDidMount
  []);
  //document.body.addEventListener("click", handlerClick);
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
    </div>
  );
};

export default LearnHooks;
