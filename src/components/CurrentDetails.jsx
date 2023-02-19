export default function CurrentDetails() {
  return (
    <div className="col-3 text-end header-more">
      Humidity: <span id="humidity">--%</span>
      <div className="col">
        Wind: <span id="wind">--</span>
      </div>
      <div id="description">--</div>
    </div>
  );
}
