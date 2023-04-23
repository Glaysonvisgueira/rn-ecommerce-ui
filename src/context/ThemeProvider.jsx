import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { createContext, useState, useEffect } from "react";

import dark from "../theme/dark";
import light from "../theme/light";

const themes = {
  light: dark,
  dark: light,
};

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

  function toggleTheme() {
    let newTheme;
    if (theme === themes.light) {
      newTheme = themes.dark;
    } else {
      newTheme = themes.light;
    }
    setTheme(newTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
