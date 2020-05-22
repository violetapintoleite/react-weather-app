import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "",
      city: response.data.name
    });
  }

  if (weatherData.ready) {
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
        <h1 className="text-uppercase">{weatherData.city}</h1>

        <h2 className="text-uppercase">
          <FormattedDate date={weatherData.date} />
        </h2>

        <div className="row">
          <div className="col-6">
            <span className="temperature">{weatherData.temperature}º</span>
            <img scr={weatherData.iconUrl} alt={weatherData.description} />
          </div>
          <div className="col-6">
            <ul className="otherInfo">
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
