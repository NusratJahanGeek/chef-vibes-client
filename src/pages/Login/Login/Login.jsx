import React, { useContext } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser)
            navigate(from, { replace: true })
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>
        <h2 className="text-center">Login</h2>
      <Row>
        <Col md={5} className="mx-auto">
          <Form onSubmit={handleLogin}>
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