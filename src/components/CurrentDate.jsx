import "../CurrentDate.css";

export default function CurrentDate() {
  let currentDate = new Date();

  let hour = currentDate.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = currentDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[currentDate.getDay()];
  const dateTime = `${day} - ${hour}:${minutes}`;

  return (
    <div className="CurrentDate date">
      <p>{dateTime}</p>
    </div>
  );
}
