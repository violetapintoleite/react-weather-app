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
      <h1>Lisbon</h1>
      <ul>
        <li>Thursday, 10:36</li>
        <li>Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            href="https://lh3.googleusercontent.com/proxy/dCY-qF35BTXz4bXoUxgA_z61eOv36E3B-J5gy6I66SU0nyJZGXS_1UTr1EoPhwsuRHnqMulrnFfJBvnnyGPOEnHdsItCyGGHwdS-a0Y1qBelPUVS"
            alt="sunny"
          />
          <span className="temperature">20º</span>
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
