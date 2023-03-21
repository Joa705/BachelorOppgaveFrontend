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
    <>
      <a
        class="close-navbar-toggler collapsed"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      ></a>

      <nav class="navbar navbar-expand-lg fixed-top">
        <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
          <li class="nav-item active logo-screen">
            <a class="navbar-brand" href="#" onClick={() => navigate("/")}>
              <img className="navbar-logo" src={require("../navn.png")} />
            </a>
          </li>
          {token ? (
            <li class="nav-item logo-phone ml-2">
              <div class="btn-group">
                <img
                  class="logout-img dropdown-toggle"
                  src="https://mdbootstrap.com/img/new/avatars/3.jpg"
                  alt="Mitt Bildet"
                  type="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                ></img>
                <div class="dropdown-menu">
                  <p class="dropdown-item">{userName}</p>
                  <a class="dropdown-item" href="#" onClick={() => SignOutHandler(instance, onLogout)}>
                    Logg ut
                  </a>
                </div>
              </div>
            </li>
          ) : (
            <li class="nav-item logo-phone ml-2">
              <button
                class="azure-btn btn btn-sm btn-outline-secondary"
                type="button"
                onClick={() => SignInHandler(instance, onLogin)}
              >
                Logg inn
              </button>
            </li>
          )}
        </ul>
        <ul class="navbar-nav mx-auto nav-mid-logo">
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
                <a
                  class="nav-link ml-2"
                  href="#"
                  onClick={() => navigate("/posts")}
                >
                  Alle innlegg <span class="sr-only">(current)</span>
                </a>
              </li>
              {token ? (
                <li class="nav-item">
                  <a
                    class="nav-link ml-2"
                    href="#"
                    onClick={() => navigate("/posts/opprett")}
                  >
                    Registrer feedback
                  </a>
                </li>
              ) : (
                ""
              )}

              {admin ? (
                <>
                  <li class="nav-item dropdown ml-2">
                    <a
                      class="nav-link dropdown-toggle"
                      href="#"
                      id="navbarDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Admin
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => navigate("/admin")}
                      >
                        Innlegg
                      </a>
                      <a
                        class="dropdown-item"
                        href="#"
                        onClick={() => navigate("/admin/brukere")}
                      >
                        Brukere
                      </a>
                    </div>
                  </li>
                </>
              ) : (
                ""
              )}
            </ul>
          </div>
          <ul class="navbar-nav ml-auto">
            {token ? (
              <li class="nav-item ml-2 login-logout">
                <div class="btn-grou dropleft mr-2">
                  <img
                    class="logout-img dropdown-toggle"
                    src="https://mdbootstrap.com/img/new/avatars/3.jpg"
                    alt="Mitt Bildet"
                    type="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></img>
                  <div class="dropdown-menu">
                    <p class="dropdown-item">{userName}</p>
                    <a class="dropdown-item" href="#" onClick={() => SignOutHandler(instance, onLogout)}>
                      Logg ut
                    </a>
                  </div>
                </div>
              </li>
            ) : (
              <li class="nav-item ml-2 login-logout">
                <button
                  class="azure-btn btn btn-sm btn-outline-secondary mr-2"
                  type="button"
                  onClick={() => SignInHandler(instance, onLogin)}
                >
                  Logg inn med Azure AD
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
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
