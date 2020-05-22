import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <Weather defaultCity="Lisbon" />
        <footer>
          This project is coded by Violeta Pinto Leite and{" "}
          <a href="https://github.com/violetapintoleite/react-weather-app">
            open sourced on Git Hub
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
