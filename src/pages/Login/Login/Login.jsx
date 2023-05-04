import React, { useContext, useState } from "react";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    setSuccess('');
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;
        setError('');
        event.target.reset();
        setSuccess('User has been logged in successfully.');
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setSuccess('');
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;
        setError('');
      })
      .catch((error) => {
         setError(error.message);
         setSuccess('');
      });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const loggedUser = result.user;
        setError('');
      })
      .catch((error) => {
        setError(error.message);
        setSuccess('');
      });
  };
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
                name="email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                name="password"
                required
              />
            </Form.Group>

            <Form.Text>
              Don't Have An Account?{" "}
              <Link to="/register" className="text-success font-weight-bold">
                Register Here.
              </Link>
            </Form.Text>

            <div className="text-center mt-4">
              <Button variant="warning" type="submit">
                Login
              </Button>
            </div>

           <div className="text-center mt-3">
           <Form.Text className="text-success">
            {success}
           </Form.Text>
            <Form.Text className="text-danger">
            {error}
            </Form.Text>
           </div>
          </Form>
          <div className="d-flex gap-3 justify-content-center">
            <div className="text-center mt-4">
              <Button
                onClick={handleGoogleSignIn}
                variant="outline-secondary"
                type="submit"
              >
                <FaGoogle></FaGoogle> &nbsp; Login with Google
              </Button>
            </div>
            <div className="text-center mt-4">
              <Button
                onClick={handleGithubSignIn}
                variant="outline-secondary"
                type="submit"
              >
                <FaGithub></FaGithub> &nbsp; Login with Github
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
