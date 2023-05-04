import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Tab, Nav, Button } from 'react-bootstrap';
import { RecipeContext } from '../../Shared/RecipeProvider/RecipeProvider';
import { Link } from 'react-router-dom';
import './RecipeSection.css'

const RecipeSection = () => {
  const { recipes, chefs } = useContext(RecipeContext);
  const [activeKey, setActiveKey] = useState('0');

  const handleTabSelect = (key) => {
    setActiveKey(key);
  };
  
  // Group recipes by chef
  const recipeGroups = chefs.map((chef) => ({
    chef: chef.name,
    recipes: recipes.filter((recipe) => recipe.chef === chef.name)
  }));

  const chefId = chefs[0];

  return (
    <section id="recipes">
    <Container>
        <Row>
            <Col><h3 className='text-center my-5'><strong><u>A Taste of Genius:</u></strong> Experience the Magic of Top Chefs' Signature Dishes</h3></Col>
        </Row>
      <Tab.Container activeKey={activeKey} onSelect={handleTabSelect}>
        <Row className="justify-content-center mb-4">
          <Col md={12}>
            <Nav variant="tabs">
              {recipeGroups.map((group, index) => (
                <Nav.Item key={index}>
                  <Nav.Link className='text-dark' eventKey={index}>{group.chef} </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>
        <Row>
          {recipeGroups.map((group, index) => (
            <Tab.Content key={index} className="w-100">
              <Tab.Pane eventKey={index}>
                <Row className='text-center'>
                  {group.recipes.map((recipe, index) => (
                    <Col md={4} key={index}>
                      <Card className="mb-4 recipe-card">
                        <Card.Img variant="top" src={recipe.image} height={300} />
                        <Card.Body>
                          <Card.Title><h4>{recipe.name}</h4></Card.Title>
                          <Card.Text>
                            <small>Rating: {recipe.rating}</small>
                          </Card.Text>
                          <br />
                          <Link to={`/chef/${chefId.id}`}><Button variant="warning">View Recipes</Button></Link>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
                </Row>
              </Tab.Pane>
            </Tab.Content>
          ))}
        </Row>
      </Tab.Container>
    </Container>
  </section>
);

};

export default RecipeSection;
