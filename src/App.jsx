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
  const [ready, setReady] = useState(false);
  const [wheatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
      temperature: response.data.temperature.current,
      city: response.data.city,
      description: response.data.condition.description,
      icon: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      fells: response.data.temperature.feels_like,
    });
    setReady(true);
  }
  if (ready) {
    return (
      <div>
        <div className="container weather-app">
          <MainBackground />
          <SearchCity />
          <div className="row">
            <CurrentWeather
              city={wheatherData.city}
              temperature={wheatherData.temperature}
            />
            <CurrentDetails />
          </div>
          <WeekForecast />
          <CurrentDate />
        </div>
        <Footer />
      </div>
    );
  } else {
    const apiKey = "ee38ce771f31t049ab81b0of21a152fe";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
