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

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <div className="nav-logo">
          <Navbar.Brand as={Link} to="/hjemmeside">
           <img id="navbar-logo" src={require("../navn.png")} /> 
          </Navbar.Brand>
        </div>

        <div className="nav-logo">
          <Navbar.Brand as={Link} to="/posts">
           <img id="navbar-logo-second" src={require("../symbol.png")} /> 
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
                   <button type="button" class="btn btn-success">Logg ut</button>
                </Nav.Link>
              </>

            ) : (
              <Nav.Link onClick={() => SignInHandler(instance, onLogin)}>
                <button type="button" class="btn btn-success">Logg inn med Azure AD</button>
              </Nav.Link>
            )}
          </Nav>

      </Container>
    </Navbar>
  );
}
