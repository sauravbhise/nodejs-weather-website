const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "https://api.openweathermap.org/data/2.5/onecall?lat=" +
    encodeURIComponent(latitude) +
    "&lon=" +
    encodeURIComponent(longtitude) +
    "&units=metric&exclude=minutely,hourly,daily,alerts&appid=eb8cee85482945636f8312946b342f26";
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to forecast services", undefined);
    } else if (!body.current) {
      callback("Unable to find weather. Try diffrent co-ordinates", undefined);
    } else {
      const temp = body.current.temp;
      const feelsLike = body.current.feels_like;
      const visibility = body.current.visibility;
      callback(
        undefined,
        "It is currently " +
          temp +
          " out " +
          ", it feels like " +
          feelsLike +
          "and the visibility is " +
          visibility
      );
    }
  });
};

module.exports = forecast;
