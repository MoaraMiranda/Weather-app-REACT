import React, { useState } from "react";
import "../CurrentWeather.css";


export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("celsius");
function showFahrenheit(event){
  event.preventDefault();
  setUnit("fahrenheit");
}
function showCelsius(event){
  event.preventDefault();
  setUnit("celsius")
}
  if (unit === "celsius"){
    return (
      <div className="col-9 d-flex align-items-center">
        <div className="header-icon">
          <img src={props.icon} width={150} id="icon" alt={props.description} />
        </div>

        <div className="CurrentWeather">
          <h1 className="header-temperature">
            {Math.round(props.celsius)}
          </h1>
          <span className="units" style={{ color: "#ff0199" }}>
            °C <a href="/" onClick={showFahrenheit}>| °F </a>
          </span>
          <h3 className="header-city">{props.city}</h3>
        </div>
      </div>
    );
  }else {
    let fahrenheit = props.celsius  * 9/5 + 32;
    return (
      <div className="col-9 d-flex align-items-center">
        <div className="header-icon">
          <img src={props.icon} width={150} id="icon" alt={props.description} />
        </div>
        <div className="CurrentWeather">
          <h1 className="header-temperature">{Math.round(fahrenheit)}</h1>
          <span className="units" style={{ color: "#ff0199" }}>
            <a href="/" onClick={showCelsius}>
            °C{" "}
            </a>
              | °F{" "}
          </span>
          <h3 className="header-city">{props.city}</h3>
        </div>
      </div>
    );
  }
  } 