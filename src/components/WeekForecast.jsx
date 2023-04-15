import "../WeekForecast.css"

export default function WeekForecast(){
  
  return (
    <div className="WeekForecast row row-cols-5 text-center forecast">
      <div className="col">
        <div className="weather-forecast-day">Mon</div>
        <img src="./public/sunny.png" alt="icon" height={90} />
        <div>
          <span>19°</span>
          <span className="weather-forecast-temperature-min"> 10°</span>
        </div>
      </div>
    </div>
  );
}