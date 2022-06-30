import React from "react";
import { BrowserRouter, Link, Route, Routes, useNavigate } from "react-router-dom";
import WindowSizes from "./components/WindowSizes";
import Dashboard from './page/Dashboard';
import Chao from './components/ChaoSection/Chao/index';
import StopWatch from './components/StopWatch/index';

const App = () => {
  return (
    <>
      <div>static start for application</div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/winsize">WindowSizes</Link>
            </li>
            <li>
              <Link to="/dash/chao">chao</Link>
            </li>
            <li>
              <Link to="/dash/stop">stop</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/winsize" element={<WindowSizes />} />         
          <Route path="/dash/" element={<Dashboard />}>
            <Route path="chao" element={<Chao name='elon' id={1}/>} />
            <Route path="stop" element={<StopWatch />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
      <div>static end for application</div>
    </>
  );
};

const Home = () => <section>HOME</section>;
const About = () => <section>About</section>;
const Contact = () => <section>Contact</section>;
const PageNotFound = () => {
  const navigate = useNavigate();
  setTimeout(()=>{
    navigate('/', { replace: true });
  }, 2000);
  return <section>404, replace to home!</section>;
};

export default App;
