import React from "react";
import ChefSection from "../ChefSection/ChefSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import RecipeSection from "../RecipeSection/RecipeSection";
import RecipeProvider from "../../Shared/RecipeProvider/RecipeProvider";
import "./Home.css";
import ThemeToggle from "../../Shared/ThemeToggle/ThemeToggle";

const Home = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className={`home-container ${isDarkMode ? "dark" : "light"}`}>
      <ChefSection isDarkMode={isDarkMode} />
      <div className="testimonial-container">
        <TestimonialSection isDarkMode={isDarkMode} />
      </div>
      <RecipeProvider>
        <RecipeSection isDarkMode={isDarkMode} />
      </RecipeProvider>
    </div>
  );
};

export default Home;
