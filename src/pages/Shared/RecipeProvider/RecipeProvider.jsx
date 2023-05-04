import React, { useState, useEffect, useContext } from 'react';

export const RecipeContext = React.createContext();

const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]);
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
      
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <RecipeContext.Provider value={{ recipes, chefs }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;