import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Chefvibes from "../../../assets/Chefvibes.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <Navbar className="my-0 py-0">
      <Container>
        <Navbar.Brand className="my-0 py-0">
          <Link to="/">
            <img
              src={Chefvibes}
              width="150"
              height="150"
              className="d-inline-block align-top"
              alt="ChefVibes"
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Link to="/" className="me-4 text-dark text-decoration-none">
              Home
            </Link>
            <Link className="me-4 text-dark text-decoration-none">Blog</Link>
          </Nav>
          <Nav>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {user ? (
  <Link
    className="me-4 text-decoration-none text-dark"
    title={user.displayName ? user.displayName : ""}
  >
    <div style={{ display: "flex", alignItems: "center" }}>
      {user.photoURL ? (
        <div
          style={{
            backgroundImage: `url(${user.photoURL})`,
            backgroundSize: "cover",
            borderRadius: "50%",
            width: "2rem",
            height: "2rem",
            marginRight: "0.5rem",
          }}
        ></div>
      ) : (
        <FaUserCircle
          style={{ fontSize: "1.5rem", marginRight: "0.5rem" }}
        />
      )}
    </div>
  </Link>
) : null}


              <div>
                {user ? (
                  <Link>
                    <Button
                      onClick={handleLogOut}
                      className="me-4 text-dark text-decoration-none"
                    >
                      LogOut
                    </Button>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="me-4 text-dark text-decoration-none"
                  >
                    Login
                  </Link>
                )}
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
