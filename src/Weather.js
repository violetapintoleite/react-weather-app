import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "",
      city: response.data.name
    });
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city name"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Thursday, 10:36</li>
          <li>Sunny</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img scr={weatherData.iconUrl} alt={weatherData.description} />
            <span className="temperature">{weatherData.temperature}º</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Wind {weatherData.wind} km/h</li>
              <li>Humidity {weatherData.humidity}%</li>
              <li>Precipitation 2%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "faaa64851f48ba4c965c94b3a847efa5";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
