import React from "react";
import "../blocks/WeatherCard.css";
import {
  defaultWeatherConditions,
  weatherConditions,
} from "../utils/constants";
import { CurrentTemperatureContext } from "../contexts/CurrentTemperatureContext";

function WeatherCard({ weatherData }) {
  const { tempUnit } = React.useContext(CurrentTemperatureContext);
  const weatherType = weatherConditions.filter((type) => {
    return (
      type.day === weatherData.isDay && type.weather === weatherData.condition
    );
  });

  const defaultWeatherType = defaultWeatherConditions.filter((type) => {
    return type.day === weatherData.isDay;
  });

  let weatherUrl;
  if (weatherType.length === 0) {
    weatherUrl = defaultWeatherType[0].url;
  } else {
    weatherUrl = weatherType[0]?.url;
  }

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {weatherData.temp[tempUnit]}&deg;{tempUnit}
      </p>
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
