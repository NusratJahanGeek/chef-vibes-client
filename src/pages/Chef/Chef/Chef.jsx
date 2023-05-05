import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";
import ChefRecipes from "../ChefRecipes/ChefRecipes";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LazyLoad from "react-lazyload";

const Chef = () => {
  const { id } = useParams();
  const individualChefs = useLoaderData();
  return (
    <Container>
      <Row className="text-center mb-4">
        <Col>
          <h1>Chef Recipes</h1>
        </Col>
      </Row>
      <Row className="text-center">
        <Col md={4} className="border border-5 mx-auto">
          <h5 className="mt-1">{individualChefs.name}</h5>
        </Col>
      </Row>
      <Row className="my-5">
        <Col md={1}></Col>
        <Col lg={5}>
        <LazyLoad height={200} once>
          <img
            src={individualChefs.image} width={510}
            loading="lazy"
            srcSet={individualChefs.image}
            sizes="(max-width: 263px) 100vw, 263px"
          />
          </LazyLoad>
        </Col>
        <Col lg={4}>
          <p>{individualChefs.bio}</p>
          <p><strong>Number of Recipes Created: {individualChefs.recipes}</strong></p>
          <p>Years of Experience: {individualChefs.experience}</p>
          <p>Likes: {individualChefs.likes}</p>
        </Col>
      </Row>
      <h5 className="text-center mb-4 text-bold text-decoration-underline">List of Recipes by {individualChefs.name}</h5>
      <ToastContainer></ToastContainer>
      <ChefRecipes></ChefRecipes>
    </Container>
  );
};

export default Chef;
