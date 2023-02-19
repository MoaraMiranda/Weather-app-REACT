export default function CurrentIcon() {
  return (
    <div className="col-9 d-flex">
      <div className="text-end">
        <img src="" id="icon" alt="weather-description" />
      </div>

      <div className="">
        <h1 id="current-temperature" className="header-temperature">
          --
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
          --
        </h3>
      </div>
    </div>
  );
}
