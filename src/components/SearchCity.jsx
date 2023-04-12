import { useState } from "react";
import "../SearchCity.css";

export default function SearchCity(props) {
  const [changeCity, setChangeCity] = useState(props.defaultCity);
  function handleSubmit(event) {
    event.preventDefault();
    alert(changeCity)
  }

  function handleCityChange(event) {
    setChangeCity(event.target.value);
  }
  return (
    <div className="row text-center city-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="City Name"
          className="text-input"
          autoFocus="on"
          onChange={handleCityChange}
        />
        <input type="submit" value="Search" className="button-input" />
        <input type="button" value="My location" className="button-input1" />
      </form>
    </div>
  );
}
