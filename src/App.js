import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import SignInForm from "./components/forms/SignInForm";
import './App.css';
import logo from './logo.svg';

const App = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <>
      <img src="/static/images/logo.png"/>
      <SignInForm />
      <img src={logo} />
    </>
  );
};

export default App;
