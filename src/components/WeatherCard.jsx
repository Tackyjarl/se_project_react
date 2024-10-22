import "../blocks/WeatherCard.css";
import {
  defaultWeatherConditions,
  weatherConditions,
} from "../utils/constants";

function WeatherCard({ weatherData }) {
  const weatherType = weatherConditions.filter((type) => {
    return (
      type.day === weatherData.isDay && type.weather === weatherData.condition
    );
  });

  let weatherUrl;
  if (weatherType.length === 0) {
    weatherUrl = defaultWeatherConditions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherUrl = weatherType[0]?.url;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherData.temp.F}&deg;F</p>
      <img
        src={weatherUrl}
        alt={`The weather is ${weatherData.condition} during the ${
          weatherData.isDay ? "day" : "night"
        }`}
        className="weather-card__image"
      ></img>
    </section>
  );
}

export default WeatherCard;
