import "./App.css";
import CurrentDate from "./components/CurrentDate";
import CurrentDetails from "./components/CurrentDetails";
import CurrentIcon from "./components/CurrentIcon";
import WeekForecast from "./components/WeekForecast";
import Footer from "./components/Footer";
import SearchCity from "./components/SearchCity";
import MainBackground from "./components/MainBackground";
import apiReponse from "./api.json"

export default function App() {


  return (
    <div>
      <MainBackground />
      <div className="container card weather-app">
        <CurrentDate />
        <div className="row align-items-center">
          <CurrentIcon />
          <CurrentDetails />
        </div>
        <WeekForecast />
        <SearchCity />
      </div>
      <Footer />
    </div>
  );
}

