export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <>
      <div className="weather-forecast-day">{day()}</div>
      <img src={props.data.condition.icon_url} alt="icon" />
      <div className="weather-forecast-temp">
        <span>{Math.round(props.data.temperature.maximum)}°</span>
        <span className="weather-forecast-temperature-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </>
  );
}
