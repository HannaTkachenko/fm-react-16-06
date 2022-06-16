import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Chao from "./components/Chao";

function App() {
  const user = {
    fullName: "Elon Musk",
    avatar: 'http://localhost:3000/favicon.ico',
  }
  return <>
    <Chao name={user.fullName} photo={user.avatar}/>
    <Chao name="Elen Musk"/>
    <Chao name="Rob Bob"/>
  </>;
}

export default App;
