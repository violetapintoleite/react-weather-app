import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lisbon" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/violetapintoleite/">
            Violeta Pinto Leite{" "}
          </a>
          and{" "}
          <a href="https://github.com/violetapintoleite/react-weather-app">
            open sourced on Git Hub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
