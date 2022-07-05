import React, { Component } from "react";
import SignInForm from "./components/SignInForm";
import { SCHEMA_SIGN_IN } from "./utils/schemaValidation";


const App = () => {
  const userData = {
    fname:'Elon',
    lname:'Musk',
    email:'elon@gmail.com',
    password:'elo&n71Qwe',
    age:'51',
  };
  console.log(SCHEMA_SIGN_IN.validate(userData))
  return (
    <>
      <SignInForm />
    </>
  );
};

export default App;
