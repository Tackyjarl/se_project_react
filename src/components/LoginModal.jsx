import React, { useEffect, useState } from "react";
import "../blocks/RegisterModal.css";
import ModalWithForm from "./ModalWithForm.jsx";

const LoginModal = ({
  isOpen,
  closeActiveModal,
  handleSignUpButtonClick,
  handleLogin,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin({ email, password });
  };

  return (
    <ModalWithForm
      buttonText="Log in"
      titleText="Log in"
      closeActiveModal={closeActiveModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <label htmlFor="form-email_login" className="modal__label">
        Email{" "}
        <input
          id="form-email_login"
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
      <label htmlFor="form-password_login" className="modal__label">
        Password{" "}
        <input
          id="form-password_login"
          type="password"
          className="modal__input"
          placeholder="Password"
          required
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        ></input>
      </label>
      <button
        className="modal__login"
        type="button"
        onClick={handleSignUpButtonClick}
      >
        or Sign Up
      </button>
    </ModalWithForm>
  );
};

export default LoginModal;
