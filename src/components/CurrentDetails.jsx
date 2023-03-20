export default function CurrentDetails() {
  return (
    <div className="col-3 text-end header-more">
      Humidity: <span id="humidity">60%</span>
      <div className="col">
        Wind: <span id="wind">10km/h</span>
      </div>
      <div id="description">Sunny</div>
    </div>
  );
}
