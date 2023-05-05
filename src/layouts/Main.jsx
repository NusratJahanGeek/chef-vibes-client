import React from "react";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import Navigation from "../pages/Shared/Navigation/Navigation";
import { Outlet } from "react-router-dom";
import ThemeToggle from "../pages/Shared/ThemeToggle/ThemeToggle";
import { useState } from "react";


const Main = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className={isDarkMode ? "dark-mode" : ""}>
      <Navigation toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Navigation>
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Header>
      <Outlet toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Outlet>
      <Footer toggleTheme={toggleTheme} isDarkMode={isDarkMode}></Footer>
      <ThemeToggle toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Main;
