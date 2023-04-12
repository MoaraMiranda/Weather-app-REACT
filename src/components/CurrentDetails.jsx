import React from "react";
import axios from "axios";
import "../CurrentDetails.css";

export default function CurrentDetails(props) {
  const apiKey = "ee38ce771f31t049ab81b0of21a152fe";
  let city = "Lisbon";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  return (
    <div className="col-3 text-end header-more">
      Humidity: <span>{props.humidity}%</span>
      <div className="col">
        Wind: <span>{Math.round(props.wind)} Km/h</span>
      </div>
      <div className="col">
        Feels like: <span id="wind">{Math.round(props.feels)}°C</span>
      </div>
      <div className="text-capitalize">{props.description}</div>
    </div>
  );
}
