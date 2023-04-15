import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentDate from "./components/CurrentDate";
import CurrentDetails from "./components/CurrentDetails";
import CurrentWeather from "./components/CurrentWeather";
import WeekForecast from "./components/WeekForecast";
import Footer from "./components/Footer";
import SearchCity from "./components/SearchCity";
import MainBackground from "./components/MainBackground";
import apiReponse from "./api.json";
import Axios from "axios";
import { useState } from "react";

export default function App() {
  const [wheatherData, setWeatherData] = useState({ ready: false });
  
  let defaultCity = "New York";
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      iconUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feels: response.data.temperature.feels_like,
    });
  }
  function search(cityName) {
    const apiKey = "ee38ce771f31t049ab81b0of21a152fe";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
  }
  if (wheatherData.ready) {
    return (
      <div>
        <div className="container weather-app">
          <MainBackground />
          <SearchCity onSubmit={search} />
          <div className="row">
            <CurrentWeather
              city={wheatherData.city}
              celsius={wheatherData.temperature}
              icon={wheatherData.iconUrl}
              description={wheatherData.description}
            />
            <CurrentDetails
              humidity={wheatherData.humidity}
              wind={wheatherData.wind}
              description={wheatherData.description}
              feels={wheatherData.feels}
            />
          </div>
          <WeekForecast city={wheatherData.city} />
          <CurrentDate />
        </div>
        <Footer />
      </div>
    );
  } else {
    search(defaultCity)
    return "Loading...";
  }
}
