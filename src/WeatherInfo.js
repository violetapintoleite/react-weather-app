import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-uppercase">{props.data.city}</h1>
      <h2 className="text-uppercase">
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <div className="row">
            {" "}
            <span className="temperature">{props.data.temperature}º</span>
          </div>
          <div className="row">
            <span className="icon">
              <WeatherIcon code={props.data.icon} />
            </span>{" "}
            <span className="description">{props.data.description}</span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>
              <span className="moreInfo">Wind</span> {props.data.wind} km/h
            </li>
            <li>
              <span className="moreInfo">Humidity</span> {props.data.humidity}%
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
