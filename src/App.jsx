import CurrentDate from "./components/CurrentDate";
import CurrentDetails from "./components/CurrentDetails";
import CurrentWeather from "./components/CurrentWeather";
import WeekForecast from "./components/WeekForecast";
import Footer from "./components/Footer";
import SearchCity from "./components/SearchCity";
import MainBackground from "./components/MainBackground";

import Axios from "axios";
import { useEffect, useState } from "react";

import "./App.css";

const apiKey = "ee38ce771f31t049ab81b0of21a152fe";

export default function App() {
  const [wheatherData, setWeatherData] = useState({ ready: false });

  useEffect(() => {
    searchLocation();
  }, []);

  function handleResponse(response) {
    if (response.data.status === "not_found") {
      alert(response.data.message);
    } else {
      setWeatherData({
        ready: true,
        temperature: response.data.temperature.current,
        city: response.data.city,
        description: response.data.condition.description,
        iconUrl: response.data.condition.icon_url,
        humidity: response.data.temperature.humidity,
        wind: response.data.wind.speed,
        feels: response.data.temperature.feels_like,
        background: response.data.condition.icon,
      });
    }
  }
  function searchCity(cityName) {
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
  }

  function setLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    Axios.get(apiUrl).then(handleResponse);
  }

  function searchLocation() {
    navigator.geolocation.getCurrentPosition(setLocation);
  }
  if (wheatherData.ready) {
    return (
      <>
        <MainBackground background={wheatherData.background} />
        <div className="weather-app container">
          <SearchCity
            onSubmit={searchCity}
            onClickMyLocation={searchLocation}
          />
          <h3 className="header-city">{wheatherData.city}</h3>
          <div className="current-weather">
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
          <WeekForecast city={wheatherData.city} apiKey={apiKey} />
          <CurrentDate />
        </div>
        <Footer />
      </>
    );
  } else {
    return "Loading...";
  }
}
