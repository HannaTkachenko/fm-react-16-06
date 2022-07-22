import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {UserContext, ThemeContext}  from "./context";
import HomePage from './page/HomePage';
import CONSTANTS from "./constants";
import NameList from './components/NameList/index';
import PhoneList from './components/PhoneList/index';
const {THEMES} = CONSTANTS;

const App = () => {
  const [user, setUser] = useState({ id: 1, name: "Elon" });
  const themeStateArr = useState(THEMES.LIGHT);
  return (
    <>
    <ThemeContext.Provider value={themeStateArr}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<PhoneList />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </ThemeContext.Provider>  
    </>
  );
};

export default App;
