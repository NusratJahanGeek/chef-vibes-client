import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-light py-5 mt-5">
      <Container className='pt-5'>
        <Row>
          <Col md={3}>
            <h5>About Us</h5>
            <p>We are a community of food lovers who believe that great food should be accessible to everyone. Our mission is to provide you with the best recipes from the top chefs in the industry.</p>
          </Col>
          <Col md={1}>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: info@chefvibes.com</p>
            <p>Phone: 123-456-7890</p>
            <p>Address: 123 Main Street, Delhi, India</p>
          </Col>
          <Col md={4}>
            <h5>Connect With Us</h5>
            <p>Follow us on social media:</p>
            <a href="https://www.facebook.com/" className='me-3'><FaFacebook fontSize={30}></FaFacebook></a>
            <a href="https://www.instagram.com/" className='me-3'><FaInstagram fontSize={30}></FaInstagram></a>
            <a href="https://twitter.com/" className='me-3'><FaTwitter fontSize={30}></FaTwitter></a>
          </Col>
        </Row>
        <hr />
        <p className="text-center">&copy; 2023 ChefVibes. All Rights Reserved.</p>
      </Container>
    </footer>
  );
};

export default Footer;
