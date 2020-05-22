import React from "react";

export default function FormattedDate(props) {
  console.log(props.date);
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
  ];
  let day = days[props.date.getDay()];
  let months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC"
  ];
  let monthDay = props.date.getDate();
  let month = months[props.date.getMonth()];
  let hours = props.date.getHours();
  if (hours < 10) hours = `0${hours}`;
  let minutes = props.date.getMinutes();
  if (minutes < 10) minutes = `0${minutes}`;
  let year = props.date.getFullYear();

  return (
    <ul className="date">
      <li>
        {day}, {monthDay} {month} {year}
      </li>
      <li>
        {hours}:{minutes}
      </li>
    </ul>
  );
}
