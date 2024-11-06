import React from "react";

export const CurrentTemperatureContext = React.createContext({
  tempUnit: "",
  handleTempUnitChange: () => {},
});
