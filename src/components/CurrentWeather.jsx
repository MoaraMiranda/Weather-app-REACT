import React, { useState } from "react";
import "../CurrentWeather.css";
import Axios from "axios";

export default function CurrentWeather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  let city = "Lisbon";
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.temperature.current);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="col-9 d-flex align-items-center">
        <div className="header-icon">
          <img
            src="./sunny.png"
            width={150}
            id="icon"
            alt="response.data.condition.description"
          />
        </div>

        <div className="">
          <h1 id="current-temperature" className="header-temperature">
            {Math.round(temperature)}
          </h1>
          <span className="units">
            <a id="celsius-temperature" href="">
              °C{" "}
            </a>
            <a id="fahrenheit-temperature" href="">
              | °F{" "}
            </a>
          </span>
          <h3 id="current-city" className="header-city">
            {city}
          </h3>
        </div>
      </div>
    );
  } else {
    const apiKey = "ee38ce771f31t049ab81b0of21a152fe";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
