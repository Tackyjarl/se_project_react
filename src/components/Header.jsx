import { Link } from "react-router-dom";
import { useContext } from "react";
import headerLogo from "../assets/header-logo.svg";
import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch";
import CurrentUserContext from "../contexts/CurrentUserContext";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  handleAddButtonClick,
  weatherData,
  handleTempUnitChange,
  tempUnit,
  isLoggedIn,
  handleSignUpButtonClick,
  handleLoginButtonClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const avatarLink = currentUser.avatar === "";

  const initialNameValue = (name) => {
    if (name) {
      return name[0].toUpperCase();
    }
    return "?";
  };

  const avatarClassName = `header__avatar header__avatar_visible ${
    !avatarLink ? "" : "header__avatar_hidden"
  }`;

  const placeholderClassName = `header__placeholder ${
    avatarLink ? "" : "header__avatar_hidden"
  }`;

  if (isLoggedIn === true) {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="App Logo" />
        </Link>
        {/* <button className="header__button-menu" type="button" /> */}
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
        <ToggleSwitch
          handleTempUnitChange={handleTempUnitChange}
          tempUnit={tempUnit}
        />
        <button
          onClick={handleAddButtonClick}
          className="header__button-clothes"
          type="button"
        >
          + Add Clothes
        </button>
        <div className="header__user-container">
          <p className="header__username">{currentUser.name}</p>
          <Link to="/profile">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className={avatarClassName}
            ></img>
            <div className={placeholderClassName}>
              {initialNameValue(currentUser.name)}
            </div>
          </Link>
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <Link to="/">
          <img className="header__logo" src={headerLogo} alt="App Logo" />
        </Link>
        {/* <button className="header__button-menu" type="button" /> */}
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
        <ToggleSwitch
          handleTempUnitChange={handleTempUnitChange}
          tempUnit={tempUnit}
        />
        <button
          onClick={handleSignUpButtonClick}
          className="header__button-clothes"
          type="button"
        >
          Sign Up
        </button>
        <button
          onClick={handleLoginButtonClick}
          className="header__button-clothes"
          type="button"
        >
          Log In
        </button>
      </header>
    );
  }
}

export default Header;
