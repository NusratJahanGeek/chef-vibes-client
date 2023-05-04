import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefRecipes = () => {
  const { id } = useParams();
  const individualChefs = useLoaderData();

  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch(`https://chef-vibes-server-nusratjahangeek.vercel.app/recipes`)
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((error) => console.log(error));
  }, []);

  console.log(recipes);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Ingredients</th>
          <th>Cooking Method</th>
          <th>Rating</th>
          <th>Favorite</th>
        </tr>
      </thead>
      <tbody>
        {recipes
          .filter((recipe) => recipe.chef === individualChefs.name)
          .map((recipe) => (
            <tr key={recipe.id}>
              <td>{recipe.name}</td>
              <td>{recipe.ingredients.join(", ")}</td>
              <td>{recipe.cookingMethod}</td>
              <td>{recipe.rating}</td>
              <td>
                <Button
                  variant={recipe.favorite ? "danger" : "outline-danger"}
                  disabled={recipe.favorite}
                  onClick={() => {
                    const updatedRecipes = [...recipes];
                    const index = updatedRecipes.findIndex(
                      (r) => r.id === recipe.id
                    );
                    updatedRecipes[index].favorite = !recipe.favorite;
                    setRecipes(updatedRecipes);
                    toast.success(`"${recipe.name}" is your favorite!`, {
                      position: toast.POSITION.TOP_RIGHT,
                    });
                  }}
                >
                  {recipe.favorite ? "Remove Favorite" : "Add Favorite"}
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default ChefRecipes;
