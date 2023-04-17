import { useState, useEffect } from "react";
import "../WeekForecast.css";
import Axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeekForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() =>{
    setLoaded(false);
  },[props.city]);

  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeekForecast row row-cols-5 text-center forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5){
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          } else{
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "ee38ce771f31t049ab81b0of21a152fe";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
