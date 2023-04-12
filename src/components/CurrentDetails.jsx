import React from "react";
import axios from "axios";
import "../CurrentDetails.css";

export default function CurrentDetails() {
  const apiKey = "ee38ce771f31t049ab81b0of21a152fe";
  let city = "Lisbon";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  return (
    <div className="col-3 text-end header-more">
      Humidity: <span id="humidity">60%</span>
      <div className="col">
        Wind: <span id="wind">10km/h</span>
      </div>
      <div id="description">Sunny</div>
    </div>
  );
}
