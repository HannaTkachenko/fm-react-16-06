import React, { useState, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { UserContext, ThemeContext, MenuContext } from "./context";
import HomePage from "./page/HomePage";
import { useClicker } from "./hooks";
import SignUpForm from "./components/forms/SignUpForm";
import Chat from "./components/Chat";
import NavMenu from "./components/NavMenu";
import reducer from "./navMenuReducer";
import CONSTANTS from "./constants";
const { THEMES, MENU_TYPES_ACTION } = CONSTANTS;

const App = () => {
  const [user] = useState({ id: 1, name: "Elon" });
  const themeStateArr = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });
  const openNavMenu = ()=>{dispatch({type:MENU_TYPES_ACTION.MENU_OPEN})}
  const closeNavMenu = ()=>{dispatch({type:MENU_TYPES_ACTION.MENU_CLOSE})}
  const count = useClicker(100);
  return (
    <>
      <MenuContext.Provider value={{state, closeNavMenu}}>
        <ThemeContext.Provider value={themeStateArr}>
          <UserContext.Provider value={user}>
            <p>count: {count}</p>
            <BrowserRouter>
              <MenuOpenIcon onClick={openNavMenu}/>
              <NavMenu />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<SignUpForm />} />
                <Route path="/chat" element={<Chat />} />
              </Routes>
            </BrowserRouter>
          </UserContext.Provider>
        </ThemeContext.Provider>
      </MenuContext.Provider>
    </>
  );
};

export default App;
