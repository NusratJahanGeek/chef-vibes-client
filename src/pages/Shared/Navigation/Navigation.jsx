import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Chefvibes from '../../../assets/Chefvibes.png'
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa';

const Navigation = () => {
  return (
    <Navbar className="my-0 py-0">
      <Container>
      <Navbar.Brand className="my-0 py-0"><Link to="/">
            <img
              src={Chefvibes}
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="ChefVibes"
            /></Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="me-4 text-dark text-decoration-none">Home</Link>
            <Link className="me-4 text-dark text-decoration-none">Blog</Link>
          </Nav>
          <Nav>
            <Link className="me-4 text-dark"><FaUserCircle style={ {fontSize: '1.5rem'} } /></Link>
           <Link className="me-4 text-dark text-decoration-none">Login</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
