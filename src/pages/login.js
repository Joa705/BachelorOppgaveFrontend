import React, { useContext } from "react";
import { UserContex } from "../components/userContex";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { islogin, setIslogin } = useContext(UserContex);


  const navigate = useNavigate();

  const routeChange = () => {
    setIslogin(true);
    let path = "/";
    navigate(path);
  };

  return (
    <div className="App">
      <h2>Login page</h2>
      <button onClick={() => routeChange()}>Sign in</button>
    </div>
  );
}

