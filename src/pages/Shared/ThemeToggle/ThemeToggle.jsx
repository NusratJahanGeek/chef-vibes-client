import { useState } from "react";

const ThemeToggle = ({ toggleTheme }) => {
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

export default ThemeToggle;
