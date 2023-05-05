import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Chefvibes from "../../../assets/Chefvibes.png";
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { ThemeContext } from "../../../providers/ThemeContextProvider";


const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);
  const { toggleTheme, isDarkMode } = useContext(ThemeContext);
  const location = useLocation();
  const [activeRoute, setActiveRoute] = useState(location.pathname);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };

  return (
    <Navbar
      expand="lg"
      className="my-0 py-0 justify-content-between align-items-center"
      bg={isDarkMode ? "dark" : "light"}
      variant="dark"
      collapseOnSelect
    >
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
        <ThemeToggle toggleTheme={toggleTheme} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="pb-4">
          <Nav className="mx-auto">
            <Link
              to="/"
              className={`nav-link me-4 text-decoration-none text-secondary ${
                activeRoute === "/" ? "active" : ""
              }`}
              onClick={() => setActiveRoute("/")}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`nav-link me-4 text-decoration-none text-secondary ${
                activeRoute === "/blog" ? "active" : ""
              }`}
              onClick={() => setActiveRoute("/blog")}
            >
              Blog
            </Link>
          </Nav>
          <Nav className="ml-auto">
            {user ? (
              <Link
                to="#"
                className="me-4 text-decoration-none text-secondary"
                title={user.displayName ? user.displayName : ""}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
                <Link to="#">
                  <Button
                    onClick={handleLogOut}
                    className="me-4 text-decoration-none bg-warning border-0"
                  >
                    LogOut
                  </Button>
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="me-4 text-secondary text-decoration-none"
                >
                  Login
                </Link>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
