import { useEffect, useState } from 'react';
// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Main from './Main';
import Randomsearch from "./Randomsearch";
import background from "./images/alexander-shatov-SXfwXS0jWNg-unsplash.jpg";
// import background from "./images/alexander-shatov-k1xf2D7jWUs-unsplash.jpg";

function App() {
  const [bodyClass, setBodyClass] = useState("body-background");
  return (
    <>
      <div className={bodyClass}
      >
        <div className="App">
          <Routes>
            <Route path="/" element={<Main
              bodyClass={bodyClass}
              setBodyClass={setBodyClass}
            />} />
            <Route path="/Main" element={<Main
              bodyClass={bodyClass}
              setBodyClass={setBodyClass}
            />} />
            <Route path="/Randomsearch" element={<Randomsearch
              bodyClass={bodyClass}
              setBodyClass={setBodyClass}
            />} />
            {/* <Route path="contact" element={<Contact />} /> */}
          </Routes>
        </div>
        {/* <div className="container">
          <Main />
        </div> */}
      </div>
    </>
  );
}

export default App;
