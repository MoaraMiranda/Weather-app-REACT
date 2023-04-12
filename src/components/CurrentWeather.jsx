import React, { useState } from "react";
import "../CurrentWeather.css";


export default function CurrentWeather(props) {
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
            {Math.round(props.temperature)}
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
            {props.city}
          </h3>
        </div>
      </div>
    );
  } 