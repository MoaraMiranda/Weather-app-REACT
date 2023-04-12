import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import CurrentDate from "./components/CurrentDate";
import CurrentDetails from "./components/CurrentDetails";
import CurrentWeather from "./components/CurrentWeather";
import WeekForecast from "./components/WeekForecast";
import Footer from "./components/Footer";
import SearchCity from "./components/SearchCity";
import MainBackground from "./components/MainBackground";
import apiReponse from "./api.json"

export default function App() {
  return (
    <div>
      <div className="container weather-app">
      <MainBackground />
        <SearchCity />
        <div className="row">
          <CurrentWeather />
          <CurrentDetails />
        </div>
        <WeekForecast />
        <CurrentDate />
      </div>
      <Footer />
    </div>
  );
}

