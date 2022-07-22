import React, {useContext} from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from "../constants";
const {THEMES} = CONSTANTS;
const currentStyle = {
  [THEMES.LIGHT]:{backgroundColor:'#eee',color:'#222'},
  [THEMES.DARK]:{backgroundColor:'#222',color:'#eee'},
}
const HomePage = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <div style={currentStyle[theme]}>
      <h1>HomePage</h1>
      <UserProfile />
    </div>
  );
}

export default HomePage;
