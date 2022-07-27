import { useState, useEffect } from 'react';

const useClicker = (initialValue)=>{
  const [count, setCount] = useState(initialValue);
  useEffect(()=>{
    //const idInt = setInterval(()=>{console.log('effect')}, 1000)
    const handlerClick = ()=>{setCount(count=>count+1)}
    window.addEventListener('click', handlerClick);
    return ()=>{
      console.log('unmount')
      window.removeEventListener('click', handlerClick);
      //clearInterval(idInt)
    }
  }, []);
  return count;
}

export default useClicker;