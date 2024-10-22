import React from "react";
import { useEffect, useState } from "react";
import Header from "../blocks/Header.jsx";
import Main from "../blocks/Main.jsx";
import ModalWithForm from "../blocks/ModalWithForm.jsx";
import ItemModal from "../blocks/ItemModal.jsx";
import "../components/App.css";
import { getWeather, filterWeatherData } from "../../utils/weatherApi.js";
import { coordinates, APIkey } from "../../utils/constants.js";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "Flames",
    temp: { F: 999, C: 999 },
    city: "The Moon",
    condition: "On Fire",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  // const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddButtonClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  // const toggleMobileMenu = () => {
  //   setMobileMenuOpened(true);
  // };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <div className="page">
        <div className="page__section">
          <Header
            handleAddButtonClick={handleAddButtonClick}
            weatherData={weatherData}
            // toggleMobileMenu={toggleMobileMenu}
          />
          <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        </div>
        <ModalWithForm
          buttonText="Add garment"
          titleText="New garment"
          activeModal={activeModal}
          closeActiveModal={closeActiveModal}
        >
          <label htmlFor="form-name" className="modal__label">
            Name{" "}
            <input
              id="form-name"
              type="text"
              className="modal__input"
              name="name"
              placeholder="Name"
              required
              minLength="2"
              maxLength="40"
            ></input>
          </label>
          <label htmlFor="form-image" className="modal__label">
            Image{" "}
            <input
              id="form-image"
              type="url"
              className="modal__input"
              name="image"
              placeholder="Image URL"
              required
            ></input>
          </label>
          <fieldset className="modal__radio-buttons">
            <legend className="modal__legend">Select the weather type</legend>
            <label
              htmlFor="hot"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="hot"
              ></input>
              Hot
            </label>
            <label
              htmlFor="warm"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="warm"
              ></input>
              Warm
            </label>
            <label
              htmlFor="cold"
              className="modal__label modal__label_type_radio"
            >
              <input
                type="radio"
                className="modal__radio-input"
                id="cold"
              ></input>
              Cold
            </label>
          </fieldset>
        </ModalWithForm>
        <ItemModal
          activeModal={activeModal}
          selectedCard={selectedCard}
          closeActiveModal={closeActiveModal}
        />
      </div>
    </>
  );
}

export default App;
