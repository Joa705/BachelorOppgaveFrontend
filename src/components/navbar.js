import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import {
  UseAuth,
  SignInHandler,
  SignOutHandler,
} from "../functions/authentication";
import "../styling/navbar.css";
import { useMsal } from "@azure/msal-react";
import { RiLoginCircleFill } from "react-icons/ri";

export function Navigationbar() {
  const { token, admin, userName, onLogin, onLogout } = UseAuth();
  const { instance, accounts } = useMsal();

  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg">
      <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
        <li class="nav-item active">
          <a class="navbar-brand" href="#" onClick={() => navigate("/")}>
            <img className="navbar-logo" src={require("../navn.png")} />
          </a>
        </li>
      </ul>
      <ul class="navbar-nav mx-auto">
        <img
          className="navbar-logo"
          src={require("../symbol.png")}
          onClick={() => navigate("/")}
        />
      </ul>
      <button
        class="navbar-toggler mr-2"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="nav-dropdown">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link ml-2" href="#" onClick={() => navigate("/posts")}>
                Posts <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link ml-2" href="#" onClick={() => navigate("/posts/mine")}>
                Mine Posts
              </a>
            </li>
            <li class="nav-item" onClick={() => navigate("/admin")}>
              <a class="nav-link ml-2" href="#">
                Admin
              </a>
            </li>
          </ul>
        </div>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item ml-2">
            <button
              class="azure-btn btn btn-sm btn-outline-secondary mr-2"
              type="button"
            >
              Logg inn med Azure AD
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );

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
          {token ? (
            <>
              <Nav.Link disabled style={{ color: "black" }}>
                Hei, ({userName})
              </Nav.Link>
              <Nav.Link onClick={() => SignOutHandler(instance, onLogout)}>
                <button type="button" className="btn btn-success">
                  Logg ut
                </button>
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link onClick={() => SignInHandler(instance, onLogin)}>
                <div className="login-button">
                  <button type="button" className="btn btn-success">
                    Logg inn med Azure AD
                  </button>
                </div>
              </Nav.Link>

              <Nav.Link onClick={() => SignInHandler(instance, onLogin)}>
                <div className="login-icon">
                  <i>
                    <RiLoginCircleFill style={{ fontSize: "25px" }} />
                  </i>
                </div>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}
