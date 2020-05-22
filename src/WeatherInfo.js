import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-uppercase">{props.data.city}</h1>
      <h2 className="text-uppercase">
        <FormattedDate date={props.data.date} />
      </h2>
      <div className="row">
        <div className="col-6">
          <span className="temperature">{props.data.temperature}º</span>
          <img scr={props.data.iconUrl} alt={props.data.description} />
        </div>
        <div className="col-6">
          <ul className="moreInfo">
            <li>Wind {props.data.wind} km/h</li>
            <li>Humidity {props.data.humidity}%</li>
            <li>Precipitation 2%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
