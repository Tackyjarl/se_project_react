import React, { useEffect, useState } from "react";
import "../blocks/RegisterModal.css";
import ModalWithForm from "./ModalWithForm.jsx";

const RegisterModal = ({
  isOpen,
  closeActiveModal,
  handleRegistration,
  handleLogInButtonClick,
}) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");

  const resetForm = () => {
    setEmail("");
    setUsername("");
    setPassword("");
    setAvatar("");
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleRegistration({ email, password, username, avatar });
  };

  return (
    <ModalWithForm
      buttonText="Sign Up"
      titleText="Sign Up"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="form-email" className="modal__label">
        Email{" "}
        <input
          id="form-email"
          type="email"
          className="modal__input"
          required
          minLength="2"
          maxLength="40"
          placeholder="Email"
          value={email}
          onChange={(evt) => setEmail(evt.target.value)}
        ></input>
      </label>
      <label htmlFor="form-password" className="modal__label">
        Password{" "}
        <input
          id="form-password"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        ></input>
      </label>
      <label htmlFor="form-username" className="modal__label">
        Name{" "}
        <input
          id="form-username"
          type="text"
          className="modal__input"
          placeholder="Name"
          required
          value={username}
          onChange={(evt) => setUsername(evt.target.value)}
        ></input>
      </label>
      <label htmlFor="form-avatar" className="modal__label">
        Avatar URL{" "}
        <input
          id="form-avatar"
          type="url"
          className="modal__input"
          placeholder="Avatar URL"
          // required
          value={avatar}
          onChange={(evt) => setAvatar(evt.target.value)}
        ></input>
      </label>
      <button
        className="modal__login"
        type="button"
        onClick={handleLogInButtonClick}
      >
        or Log In
      </button>
    </ModalWithForm>
  );
};
export default RegisterModal;
