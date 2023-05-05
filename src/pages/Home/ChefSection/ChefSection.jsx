import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://chef-vibes-server-nusratjahangeek.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <h2 className="text-center my-5">Our Chefs</h2>
      <div className="row">
        {chefs.map((chef) => (
          <div className="col-md-4" key={chef.id}>
            <Card className="my-3" border="warning">
              <LazyLoad height={200} once>
                <Card.Img variant="top" src={chef.image} height={290} />
              </LazyLoad>
              <Card.Body>
                <Card.Title>{chef.name}</Card.Title>
                <Card.Text>
                  Experience: {chef.experience}
                  <br />
                  Recipes: {chef.recipes}
                  <br />
                  Likes: {chef.likes}
                </Card.Text>
                <Link to={`/chef/${chef.id}`}>
                  <Button variant="warning">View Recipes</Button>
                </Link>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;