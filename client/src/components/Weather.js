import React, { useState } from "react";
import SideNav from "./SideNav";

const Weather = () => {
  const [text, setText] = useState("");
  const [weatherData, setWeatherData] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`/api/weather/${text}`)
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data.daily);
      });
  };

  const weatherDate = (weatherData) => {
    const unixTimestamp = weatherData.dt;
    const milliseconds = unixTimestamp * 1000;
    const dateObject = new Date(milliseconds);
    const weekday = dateObject.toLocaleString("en-US", { weekday: "short" });
    const month = dateObject.toLocaleString("en-US", { month: "short" });
    const day = dateObject.toLocaleString("en-US", { day: "numeric" });
    const fullDate = `${weekday}, ${month} ${day}`;
    return fullDate;
  };

  return (
    <>
      <SideNav />
      <section className="weather-main display">
        <form onSubmit={handleSubmit}>
          <input
            className="weather-search"
            type="text"
            value={text}
            placeholder="Please Enter Location"
            onChange={handleChange}
          />
        </form>
        <h1 className="title">8-Day Forecast</h1>
        <div className="weather-items">
          {weatherData.map((day) => (
            <div className="weather-item" key={day.dt}>
              <li className="weather-date">{weatherDate(day)}</li>
              <li className="weather-info">
                <img
                  src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt="#"
                />
                {day.temp.max.toFixed()} / {day.temp.min.toFixed()} &#176;F
              </li>
              <li className="weather-desc">{day.weather[0].main}</li>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Weather;
