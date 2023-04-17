import { useState } from "react";
import "../SearchCity.css";

export default function SearchCity(props) {
  const [changeCity, setChangeCity] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (changeCity === "") {
      alert("Fill in a city");
    } else {
      props.onSubmit(changeCity);
    }
  }

  function handleCityChange(event) {
    setChangeCity(event.target.value);
  }

  function handleMyLocation() {
    setChangeCity("");
    props.onClickMyLocation();
  }
  return (
    <div className="row text-center city-search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="search-wrapper">
          <input
            type="search"
            value={changeCity}
            placeholder="City Name"
            className="text-input"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input type="submit" value="🔍" className="button-input" />
        </div>
        <input
          type="button"
          value="My location"
          className="button-location"
          onClick={handleMyLocation}
        />
      </form>
    </div>
  );
}
