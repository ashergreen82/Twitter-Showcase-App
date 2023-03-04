import { useState } from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Main from './Main';
import Randomsearch from "./Randomsearch";

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
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
