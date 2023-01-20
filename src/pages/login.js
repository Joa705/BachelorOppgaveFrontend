import React, { useContext, useState } from "react";
import { UserContex } from "../components/userContex";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import "../styling/login.css";
import { Tag } from "rsuite";

function LoginDisplay({verifyLogin}) {
  const [invalidLogin, setInvalidLogin] = useState(false)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verifyLoginLocal = () => {
    console.log("verifying..")
      if(password != "123") {
        setInvalidLogin(true);
        setTimeout(() =>
        {setInvalidLogin(false) }, 2000);
        return;
      }
      verifyLogin(email);
  }

  return (
    <Form
      className="form-login"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          className="form-item form-label"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          className="form-item form-label"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}

        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button onClick={() => verifyLoginLocal()} variant="primary" type="submit" className="form-item form-button">
        Login
      </Button>
      {invalidLogin? <p>Invalid login</p> : ""}
    </Form>
  );
}

function ModalRegisterUser({ showRegister, handleClose, handleShow }) {
  return (
    <>
      <h5 variant="primary" onClick={handleShow}>
        <a>Register new account</a>
      </h5>

      <Modal show={showRegister} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register new account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="form-login"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                className="form-item form-label"
                type="email"
                placeholder="Enter email"
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className="form-item form-label"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>       
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            type="submit"
            className="form-item form-button"
            onClick={handleClose}
          >
            Register
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default function Login() {
  const { islogin, setIslogin } = useContext(UserContex);
  const [display, setDisplay] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const verifyLogin = (email, password) => {

    localStorage.setItem("username", email);
    setIslogin(true);
  };
  const handleClose = () => setShowRegister(false);
  const handleShow = () => setShowRegister(true);

  return (
    <div className="container-login">
      <div className="title">
        <h2>Login page</h2>
      </div>
      <div className="div-form">
        <LoginDisplay verifyLogin={verifyLogin}/>
        <div className="form-item-2">
          <p>____OR____</p>
          <ModalRegisterUser
            showRegister={showRegister}
            handleClose={handleClose}
            handleShow={handleShow}
          />
        </div>
      </div>
    </div>
  );
}
