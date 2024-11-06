import React, { useEffect, useState } from "react";
import "../blocks/AddItemModal.css";
import ModalWithForm from "./ModalWithForm.jsx";

const AddItemModal = ({ isOpen, handleAddItem, closeActiveModal }) => {
  const [name, setName] = useState("");
  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const [link, setLink] = useState("");
  const handleLinkChange = (evt) => {
    setLink(evt.target.value);
  };

  const [weatherInput, setWeatherInput] = useState("");
  const handleWeatherChange = (evt) => {
    setWeatherInput(evt.target.value);
  };

  const resetForm = () => {
    setName("");
    setLink("");
    setWeatherInput("");
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddItem({ name, weather: weatherInput, imageUrl: link, resetForm });
  };
  return (
    <ModalWithForm
      buttonText="Add garment"
      titleText="New garment"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="form-name" className="modal__label">
        Name{" "}
        <input
          id="form-name"
          type="text"
          className="modal__input"
          required
          minLength="2"
          maxLength="40"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        ></input>
      </label>
      <label htmlFor="form-image" className="modal__label">
        Image{" "}
        <input
          id="form-image"
          type="url"
          className="modal__input"
          placeholder="Image URL"
          required
          value={link}
          onChange={handleLinkChange}
        ></input>
      </label>
      <fieldset className="modal__radio-buttons">
        <legend className="modal__legend">Select the weather type</legend>
        <label htmlFor="hot" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radioButtons"
            className="modal__radio-input"
            id="hot"
            value={"hot"}
            checked={weatherInput === "hot"}
            onChange={handleWeatherChange}
          ></input>
          Hot
        </label>
        <label htmlFor="warm" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radioButtons"
            className="modal__radio-input"
            id="warm"
            value={"warm"}
            checked={weatherInput === "warm"}
            onChange={handleWeatherChange}
          ></input>
          Warm
        </label>
        <label htmlFor="cold" className="modal__label modal__label_type_radio">
          <input
            type="radio"
            name="radioButtons"
            className="modal__radio-input"
            id="cold"
            value={"cold"}
            checked={weatherInput === "cold"}
            onChange={handleWeatherChange}
          ></input>
          Cold
        </label>
      </fieldset>
    </ModalWithForm>
  );
};
export default AddItemModal;
