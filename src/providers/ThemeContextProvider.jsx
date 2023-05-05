// ThemeContext.js
import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, isDarkMode }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
