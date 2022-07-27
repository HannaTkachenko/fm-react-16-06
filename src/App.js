import React, { useState, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserContext, ThemeContext, MenuContext } from "./context";
import HomePage from "./page/HomePage";
import SignUpForm from "./components/forms/SignUpForm";
import NavMenu from "./components/NavMenu";
import reducer from "./navMenuReducer";
import CONSTANTS from "./constants";
import Todo from "./components/Todo";
const { THEMES, MENU_TYPES_ACTION } = CONSTANTS;

const App = () => {
  const [user] = useState({ id: 1, name: "Elon" });
  const themeStateArr = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const openNavMenu = () => {
    dispatch({ type: MENU_TYPES_ACTION.MENU_OPEN });
  };
  const closeNavMenu = () => {
    dispatch({ type: MENU_TYPES_ACTION.MENU_CLOSE });
  };
  
  return (
    <>
      <MenuContext.Provider value={{ state, closeNavMenu, openNavMenu }}>
        <ThemeContext.Provider value={themeStateArr}>
          <UserContext.Provider value={user}>
            
            <BrowserRouter>
              <NavMenu />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/todo" element={<Todo />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </MenuContext.Provider>
    </>
  );
};

export default App;
