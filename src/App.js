import React, { useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {UserContext, ThemeContext}  from "./context";
import HomePage from './page/HomePage';
import { useClicker } from "./hooks";
import SignUpForm from './components/forms/SignUpForm'
import Chat from './components/Chat/index';
import CONSTANTS from "./constants";
const {THEMES} = CONSTANTS;

const App = () => {
  const [user] = useState({ id: 1, name: "Elon" });
  const themeStateArr = useState(THEMES.LIGHT);
  const count = useClicker(100);
  return (
    <>
    <ThemeContext.Provider value={themeStateArr}>
      <UserContext.Provider value={user}>
        <p>count: {count}</p>
        <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/signup'>Sign up</Link></li>
            <li><Link to='/chat'>Chat</Link></li>
          </ul>
        </nav>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/signup' element={<SignUpForm />} />
            <Route path='/chat' element={<Chat />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>  
    </>
  );
};

export default App;
