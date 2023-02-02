import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { UseAuth, SignInHandler, SignOutHandler } from "../functions/authentication";
import "../styling/navbar.css";
import { useMsal } from "@azure/msal-react";
import { UseSidebar } from "./sidebar";

export function Navigationbar() {
  const { token, admin, userName, onLogin, onLogout} = UseAuth();
  const {instance, accounts} = useMsal();
  const {open} = UseSidebar();

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div className="nav-logo">
          <Navbar.Brand as={Link} to="/posts">
            <img id="navbar-logo" src={require("../asplan.png")} />
          </Navbar.Brand>
        </div>

         {/*  <Nav className="me-auto">
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
          </Nav> */}
          <Nav className="mr-auto">
            {(token) ? (
              <>
                <Nav.Link disabled style={{color: "black"}}>Hei, ({userName})</Nav.Link>
                <Nav.Link
                  onClick={() => SignOutHandler(instance, onLogout)}
                >
                   Logout
                </Nav.Link>
              </>

            ) : (
              <Nav.Link onClick={() => SignInHandler(instance, onLogin)}>
                Login
              </Nav.Link>
            )}
          </Nav>

      </Container>
    </Navbar>
  );
}
