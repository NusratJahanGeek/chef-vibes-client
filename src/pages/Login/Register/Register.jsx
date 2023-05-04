import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Container>
        <h2 className="text-center">Register</h2>
      <Row>
        <Col md={5} className="mx-auto">
          <Form>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" name="name" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Your Email"
                name="email" required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password" required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formPhotoURL">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photo URL"
                name="photoURL" required
              />
            </Form.Group>

            <Form.Text>
            Already Have An Account? <Link to="/login" className="text-success font-weight-bold">Login Here.</Link>
           </Form.Text>

           <div className="text-center mt-4">
           <Button variant="warning" type="submit">
              Register
            </Button>
           </div>
    
           <Form.Text className="text-success">
            
           </Form.Text>
           <Form.Text className="text-danger">

           </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
