import { useState } from "react";
import "../WeekForecast.css";
import Axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeekForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded){
    console.log(forecastData)
    return (
      <div className="WeekForecast row row-cols-5 text-center forecast">
        <div className="col">
          <ForecastDay data={forecastData[0]}/>
        </div>
      </div>
    );
    
  }else {
    const apiKey = "ee38ce771f31t049ab81b0of21a152fe";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
