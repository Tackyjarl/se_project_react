import React from "react";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Main from "./Main.jsx";
import ModalWithForm from "./ModalWithForm.jsx";
import ItemModal from "./ItemModal.jsx";
import Profile from "./Profile.jsx";
import AddItemModal from "./AddItemModal.jsx";
import DeleteItemModal from "./DeleteItemModal.jsx";
import "../blocks/App.css";
import { getWeather, filterWeatherData } from "../utils/weatherApi.js";
import {
  coordinates,
  APIkey,
  defaultClothingItems,
} from "../utils/constants.js";
import { CurrentTemperatureContext } from "../contexts/CurrentTemperatureContext.js";
import { getItems, addNewItems, deleteItems } from "../utils/api.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "Flames",
    temp: { F: 999, C: 999 },
    city: "The Moon",
    condition: "On Fire",
    isDay: false,
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
  const [tempUnit, setTempUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const handleDeleteModalClick = () => {
    setActiveModal("delete");
  };

  const handleAddItem = (item) => {
    return addNewItems(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteCard = () => {
    deleteItems(selectedCard._id)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );
        setSelectedCard({});
        setActiveModal("");
        closeActiveModal();
      })
      .catch(console.error);
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpened(true);
  // };

  const handleTempUnitChange = () => {
    if (tempUnit === "C") setTempUnit("F");
    if (tempUnit === "F") setTempUnit("C");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items);
      })
      .catch(() => {
        console.error;
        setClothingItems(defaultClothingItems);
      });
  }, []);
  return (
    <div className="page">
      <CurrentTemperatureContext.Provider
        value={{ tempUnit, handleTempUnitChange }}
      >
        <div className="page__section">
          <Header
            handleAddButtonClick={handleAddButtonClick}
            weatherData={weatherData}
            // toggleMobileMenu={toggleMobileMenu}
            tempUnit={tempUnit}
            handleTempUnitChange={handleTempUnitChange}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  clothingItems={clothingItems}
                  handleCardClick={handleCardClick}
                  handleAddButtonClick={handleAddButtonClick}
                />
              }
            />
          </Routes>
        </div>

        <ItemModal
          selectedCard={selectedCard}
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "preview"}
          handleDeleteModalClick={handleDeleteModalClick}
        />
        <AddItemModal
          closeActiveModal={closeActiveModal}
          isOpen={activeModal === "add-garment"}
          handleAddItem={handleAddItem}
        />
        <DeleteItemModal
          handleDeleteCard={handleDeleteCard}
          isOpen={activeModal === "delete"}
          closeActiveModal={closeActiveModal}
        />
      </CurrentTemperatureContext.Provider>
    </div>
  );
}

export default App;
