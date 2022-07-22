import React, {useContext} from 'react';
import {UserContext, ThemeContext} from '../../context';
import CONSTANTS from "../../constants";
const {THEMES} = CONSTANTS;

const UserProfile = () => {
  const {name} = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const handlerTheme = ()=>{
    setTheme(theme===THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  }
  return (
    <div>
      <h2>Hi, {name}</h2>
      <button onClick={handlerTheme}>switch theme</button>
    </div>
  );
}

export default UserProfile;
