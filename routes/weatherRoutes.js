const keys = require("../config/dev");
const fetch = require("node-fetch");

module.exports = (app) => {
  app.get("/api/weather/:search", (req, res) => {
    const searchLocation = req.params.search;

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${searchLocation}.json?access_token=${keys.mapboxKey}&limit=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const latitude = data.features[0].center[1];
        const longitude = data.features[0].center[0];
        fetch(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=imperial&exclude=minutely,alerts,hourly&appid=${keys.openWeatherKey}`
        )
          .then((response) => response.json())
          .then((weatherData) => res.send(weatherData));
      });
  });
};
