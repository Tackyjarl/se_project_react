import React from "react";
import "../blocks/Main.css";
// import { defaultClothingItems } from "../utils/constants";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import Footer from "./Footer";
import { CurrentTemperatureContext } from "../contexts/CurrentTemperatureContext";

function Main({ weatherData, handleCardClick, clothingItems }) {
  const { tempUnit } = React.useContext(CurrentTemperatureContext);
  return (
    <div>
      <WeatherCard weatherData={weatherData} />
      <section className="cards">
        <p className="cards__text">
          Today is {weatherData.temp[tempUnit]}&deg;{tempUnit} / You may want to
          wear:
        </p>
        <ul className="cards__list">
          {clothingItems
            .filter((item) => {
              return item.weather === weatherData.type;
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onCardClick={handleCardClick}
                />
              );
            })}
        </ul>
      </section>
      <Footer />
    </div>
  );
}

export default Main;
