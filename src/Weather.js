import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city name"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Lisbon</h1>
      <ul>
        <li>Thursday, 10:36</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            href="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="sun"
          />
          20ºC
        </div>
        <div className="col-6">
          <ul>
            <li>Wind 5klm/h</li>
            <li>Humidity 20%</li>
            <li>Precipitation 2%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
