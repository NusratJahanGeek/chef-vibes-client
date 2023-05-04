import React, { useContext } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const { createUser } = useContext(AuthContext);

const handleRegister = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, photoURL, password)
    createUser(email, password)
    .then(result => {
        const createdUser = result.user;
        console.log(createdUser);
        // Update user profile with name and photoURL
        updateProfile(createdUser, {
            displayName: name,
            photoURL: photoURL
        }).then(() => {
            console.log("User profile updated successfully");
        }).catch(error => {
            console.log("Error updating user profile:", error);
        });
    })
    .catch(error => {
        console.log(error)
    })
}

  return (
    <Container>
        <h2 className="text-center">Register</h2>
      <Row>
        <Col md={5} className="mx-auto">
          <Form onSubmit={handleRegister}>
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
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
