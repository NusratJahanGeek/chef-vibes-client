import React, { useContext, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import { AuthContext } from "../../../providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    setSuccess("");
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password);

    // Wrap the createUser function in a promise
    return new Promise((resolve, reject) => {
      createUser(email, password)
        .then((result) => {
          const createdUser = result.user;
          console.log(createdUser);
          setError("");
          event.target.reset();
          setSuccess("User has been logged in successfully.");
          navigate(from, { replace: true });
          // Update user profile with name and photoURL
          updateProfile(createdUser, {
            displayName: name,
            photoURL: photoURL,
          })
            .then(() => {
              console.log("User profile updated successfully");
              resolve(); // Resolve the promise
            })
            .catch((error) => {
              console.log(error);
              reject(error); // Reject the promise
            });
        })
        .catch((error) => {
          setError(error.message);
          setSuccess("");
          reject(error); // Reject the promise
        });
    });
  };

  return (
    <Container>
      <h2 className="text-center">Register</h2>
      <Row>
        <Col md={5} className="mx-auto">
          <Form onSubmit={handleRegister}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Your Name"
                name="name"
                required
              />
            </Form.Group>

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

            <Form.Group className="mb-4" controlId="formPhotoURL">
              <Form.Label>Photo URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter photo URL"
                name="photoURL"
                required
              />
            </Form.Group>

            <Form.Text>
              Already Have An Account?{" "}
              <Link to="/login" className="text-success font-weight-bold">
                Login Here.
              </Link>
            </Form.Text>

            <div className="text-center mt-4">
              <Button variant="warning" type="submit">
                Register
              </Button>
            </div>

            <div className="text-center mt-3">
              <Form.Text className="text-success">{success}</Form.Text>
              <Form.Text className="text-danger">{error}</Form.Text>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
