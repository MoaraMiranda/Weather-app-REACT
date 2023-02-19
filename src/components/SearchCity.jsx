export default function SearchCity(){
  return (
    <div className="row text-center city-search">
      <form id="search-form" className="search-form">
        <input
          id="city-input"
          type="text"
          placeholder="City Name"
          className="text-input"
        />
        <input type="submit" value="Search" className="button-input" />
        <input
          id="current-location"
          type="button"
          value="My location"
          className="button-input1"
        />
      </form>
    </div>
  );
}