import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ChefRecipes.css";

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

  return (
    <div className="table-responsive" style={{ overflowX: "auto" }}>
      <Table striped bordered hover responsive>
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
                <td>
                  <div className="table-cell">
                    <div className="table-cell-value">{recipe.name}</div>
                  </div>
                </td>
                <td>
                  <div className="table-cell">
                    <div className="table-cell-value">
                      {recipe.ingredients.join(", ")}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="table-cell">
                    <div className="table-cell-value">
                      {recipe.cookingMethod}
                    </div>
                  </div>
                </td>
                <td>
                  <div className="table-cell">
                    <div className="table-cell-value">{recipe.rating}</div>
                  </div>
                </td>
                <td>
                  <div className="table-cell">
                    <div className="table-cell-value">
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
                    </div>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ChefRecipes;
