import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Chao from "./components/Chao";

function App() {
  const user = {
    fullName: "Elon Musk"
  }
  return <>
    <Chao name={user.fullName} isHi/>
    <Chao name="Elen Musk"  />
    <Chao name="Rob Bob" isHi/>
  </>;
}

export default App;
