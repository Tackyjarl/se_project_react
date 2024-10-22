import headerLogo from "../../assets/header-logo.svg";
import headerAvatar from "../../assets/2e259a8c8558ae5104a4ec0d6ae39021.png";
import "../components/Header.css";

const currentDate = new Date().toLocaleString("default", {
  month: "long",
  day: "numeric",
});

function Header({ handleAddButtonClick, weatherData }) {
  return (
    <header className="header">
      <img className="header__logo" src={headerLogo} alt="App Logo" />
      {/* <button className="header__button-menu" type="button" /> */}
      <p className="header__date">
        {currentDate}, {weatherData.city}
      </p>
      <button
        onClick={handleAddButtonClick}
        className="header__button-clothes"
        type="button"
      ></button>
      <div className="header__user-container">
        <p className="header__username">Terrence Tegegne</p>
        <img
          src={headerAvatar}
          alt="Terrence Tegegne"
          className="header__avatar"
        ></img>
      </div>
    </header>
  );
}

export default Header;
