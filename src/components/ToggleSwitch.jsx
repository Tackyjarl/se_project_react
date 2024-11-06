import React from "react";
import "../blocks/ToggleSwitch.css";
import { CurrentTemperatureContext } from "../contexts/CurrentTemperatureContext";

function ToggleSwitch() {
  const { tempUnit, handleTempUnitChange } = React.useContext(
    CurrentTemperatureContext
  );
  return (
    <label className="switch">
      <input
        className="switch__checkbox"
        type="checkbox"
        onChange={handleTempUnitChange}
      />
      <span
        className={
          tempUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p className={`switch__temp-F ${tempUnit === "F" && "switch__active"}`}>
        F
      </p>
      <p className={`switch__temp-C ${tempUnit === "C" && "switch__active"}`}>
        C
      </p>
    </label>
  );
}

export default ToggleSwitch;
