import { Link } from "react-router-dom";
import headerLogo from "../assets/header-logo.svg";
import headerAvatar from "../assets/2e259a8c8558ae5104a4ec0d6ae39021.png";
import "../blocks/Header.css";
import ToggleSwitch from "./ToggleSwitch";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({
  handleAddButtonClick,
  weatherData,
  handleTempUnitChange,
  tempUnit,
}) {
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
      ></button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <Link to="/profile">
          <img
            src={headerAvatar}
            alt="Terrence Tegegne"
            className="header__avatar"
          ></img>
        </Link>
      </div>
    </header>
  );
}

export default Header;
