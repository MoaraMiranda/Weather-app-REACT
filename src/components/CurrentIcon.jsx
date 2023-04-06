import "../CurrentIcon.css"

export default function CurrentIcon() {
  return (
    <div className="col-9 d-flex align-items-center">
      <div className="header-icon">
        <img
          src="./sunny.png"
          width={150}
          id="icon"
          alt="weather-description"
        />
      </div>

      <div className="">
        <h1 id="current-temperature" className="header-temperature">
          18
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
          Eindhoven
        </h3>
      </div>
    </div>
  );
}
