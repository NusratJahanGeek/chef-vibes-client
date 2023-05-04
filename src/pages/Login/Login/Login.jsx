import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
        <h2 className="text-center">Login</h2>
      <Row>
        <Col md={5} className="mx-auto">
          <Form>
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
            
            <Form.Text>
            Don't Have An Account? <Link to="/register" className="text-success font-weight-bold">Register Here.</Link>
           </Form.Text>

           <div className="text-center mt-4">
           <Button variant="warning" type="submit">
              Login
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

export default Login;