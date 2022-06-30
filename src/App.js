import React from "react";


const App = () => {
  return (
    <>
      <button onClick={()=>{window.open('https://translate.google.com.ua/')}}>open</button>
      <button onClick={()=>{window.close()}}>close</button>
      <button onClick={()=>{window.location.assign('https://www.w3schools.com/')}}>assign</button>
      <button onClick={()=>{window.location.replace('https://www.w3schools.com/')}}>replace</button>
      <button onClick={()=>{window.location.reload()}}>reload</button>
    </>
  );
};
export default App;
