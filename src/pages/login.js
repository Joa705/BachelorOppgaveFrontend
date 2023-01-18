import React, { useContext, useState } from "react";
import { UserContex } from "../components/userContex";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../styling/login.css";

function LoginDisplay() {
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
      <Button
        variant="primary"
        type="submit"
        className="form-item form-button"
      >
        Login
      </Button>
    </Form>
  );
}

function RegisterDisplay() {
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
      <Button
        variant="primary"
        type="submit"
        className="form-item form-button"
      >
        Register
      </Button>
    </Form>
  );
}

export default function Login() {
  const { islogin, setIslogin } = useContext(UserContex);
  const [display, setDisplay] = useState(false);

  return (
    <div className="container-login">
      <div className="title">
        <h2>Login page</h2>
      </div>
      <div className="div-form">
          {!display && <LoginDisplay />}
          {display && <RegisterDisplay />}
        <div className="form-item-2">
          {!display && <h5 onClick={() => setDisplay(true)}>Register new account</h5>}
          {display && <h5 onClick={() => setDisplay(false)}>Login to account</h5>}
        </div>
      </div>
    </div>
  );
}
