import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UseAuth } from "../functions/authentication";
import "../styling/navbar.css";

export function Navigationbar() {
  const { token, admin, userName, onLogout } = UseAuth();

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div className="nav-logo">
          <Navbar.Brand as={Link} to="/posts">
            <img id="navbar-logo" src={require("../asplan.png")} />
          </Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/posts">
              Posts
            </Nav.Link>
            <Nav.Link as={Link} to="/posts/mine">
              Mine posts
            </Nav.Link>
            {admin ? (
              <Nav.Link as={Link} to="/admin">
                Admin
              </Nav.Link>
            ) : (
              ""
            )}
          </Nav>
          <Nav className="mr-auto">
            {token ? (
              <>
                <Nav.Link disabled style={{color: "black"}}>Hei ({userName})</Nav.Link>
                <Nav.Link
                  as={Link}
                  to="/"
                  onClick={onLogout}
                >
                   Logout
                </Nav.Link>
              </>

            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
