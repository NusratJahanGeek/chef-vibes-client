import React from "react";
import ChefSection from "../ChefSection/ChefSection";
import TestimonialSection from "../TestimonialSection/TestimonialSection";
import RecipeSection from "../RecipeSection/RecipeSection";
import RecipeProvider from "../../Shared/RecipeProvider/RecipeProvider";
import "./Home.css";
import ThemeToggle from "../../Shared/ThemeToggle/ThemeToggle";

const Home = ({ toggleTheme, isDarkMode }) => {
  return (
    <div>
      <ChefSection></ChefSection>
      <div className="testimonial-container">
        <TestimonialSection></TestimonialSection>
      </div>
      <RecipeProvider>
        <RecipeSection />
      </RecipeProvider>
    </div>
  );
};

export default Home;