import React, { useState, useContext } from "react";
import { Switch } from "react-native";
import { ThemeContext } from "../../context/ThemeProvider";

const SwitchButton = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    toggleTheme();
  };

  return (
    <Switch
      trackColor={{ false: "#767577", true: "#dddddd" }}
      thumbColor={isEnabled ? "#2e2e2e" : "#f4f3f4"}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default SwitchButton;
