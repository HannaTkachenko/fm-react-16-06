import React, { Component } from "react";
import SignInForm from "./components/SignInForm";
import { SCHEMA_SIGN_UP } from "./utils/schemaValidation";

const App = () => {
  const userData = {
    fname:'Elon',
    lname:'Musk',
    email:'elon@gmail.com',
    password:'elo&n71Qwe',
    age:'51',
  };
  const userData2 = {
    email:'elon@gmail.com',
    password:'elo&n71Qwe',
  };
  console.log(SCHEMA_SIGN_UP.validate(userData)
    .then((data)=>console.log(data))
    .catch((err)=>console.log(err))
  )  
  // console.log(SCHEMA_SIGN_IN.validate(userData2)) //написать схему валидации входа
  return (
    <>
      <SignInForm />
    </>
  );
};

export default App;
