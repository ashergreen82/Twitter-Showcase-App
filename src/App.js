// import logo from './logo.svg';
import './App.css';
import Main from './Main';
// import background from "./images/alexander-shatov-SXfwXS0jWNg-unsplash.jpg";
import background from "./images/alexander-shatov-k1xf2D7jWUs-unsplash.jpg";

function App() {
  return (
    <>
      <div style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        // backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "Center",
        height: "100vh",
        width: "100%"
      }} >
        <div className="container">
          <Main />
        </div>
      </div>
    </>
  );
}

export default App;
