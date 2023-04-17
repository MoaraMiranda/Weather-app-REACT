import { useState, useEffect } from "react";
import "../WeekForecast.css";
import Axios from "axios";
import ForecastDay from "./ForecastDay";

export default function WeekForecast(props) {
  const [forecastData, setForecastData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    handleApiCall();
    setLoaded(false);
  }, [props.city]);

  function handleApiCall() {
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${props.apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeekForecast row row-cols-5 text-center forecast">
        {forecastData.map(function (dailyForecast, index) {
          if (index < 5) {
            return (
              <div className="col" key={index}>
                <ForecastDay data={dailyForecast} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
     return null;
  }
}
