import React from "react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";
import WindowSizes from "./components/WindowSizes";
import Dashboard from "./page/Dashboard";
import Chao from "./components/ChaoSection/Chao/index";
import StopWatch from "./components/StopWatch/index";
import PageNotFound from './page/PageNotFound';
import PageCounter from './page/PageCounter';
import PageLoader from './page/PageLoader';


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
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/loader">Loader</Link>
            </li>
            <li>
              Dashboard
              <ul>
                <li>
                  <Link to="/dash/chao">chao</Link>
                </li>
                <li>
                  <Link to="/dash/stop">stop</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<PageCounter />} />
          <Route path="/loader" element={<PageLoader />}/>
          <Route path="/dash/" element={<Dashboard />}>
            <Route path="chao" element={<Chao name="elon" id={1} />} />
            <Route path="stop" element={<StopWatch />} />
          </Route>
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <footer>@2022</footer>
      </BrowserRouter>
      <div>static end for application</div>
    </>
  );
};

const Home = () => <section>HOME</section>;


export default App;
