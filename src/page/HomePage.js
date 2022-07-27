import React, {useState, useContext, useEffect, useCallback, useMemo} from 'react';
import UserProfile from '../components/UserProfile';
import { ThemeContext } from '../context';
import CONSTANTS from "../constants";
import useClicker from '../hooks/useClicker';
const {THEMES} = CONSTANTS;
const currentStyle = {
  [THEMES.LIGHT]:{backgroundColor:'#eee',color:'#222'},
  [THEMES.DARK]:{backgroundColor:'#222',color:'#eee'},
}
function calcPow5Value(n){ //O(n)
  let result = 0;
  for(let i=1; i<1000000000; i++){result += i;}
  return n**5;
}
const HomePage = (props) => {
  const count = useClicker(100);
  const [value, setValue] = useState(10);
  const [theme, setTheme] = useContext(ThemeContext);
  const handlerTheme = useCallback( ()=>{
    setTheme(theme===THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT);
  },[theme])
  const handlerInput = useCallback( ({target:{value}})=>{
    setValue(Number(value))
  }, [value])
  const handlerLogValue = useCallback(()=>{console.log(value)},[value]);
  const memocalcPow5Value = useMemo(()=>calcPow5Value(value), [value])
  return (
    <div style={currentStyle[theme]}>
      <h1>HomePage</h1>
      <p>count: {count}</p>
      <h2>value:{memocalcPow5Value}</h2>
      <input type='number' value={value} onChange={handlerInput}/>
      <UserProfile />
      <button onClick={handlerTheme}>switch theme</button>
      <button onClick={handlerLogValue}>log value</button>
    </div>
  );
}

export default HomePage;
