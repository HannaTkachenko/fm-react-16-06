import "./App.css";
import React, { Component } from "react";
import StopWatch from "./components/StopWatch";
import UserSection from './components/UserSection';

const App = () => {
  return <>
    <StopWatch />
    <UserSection />
  </>;
};
export default App;
