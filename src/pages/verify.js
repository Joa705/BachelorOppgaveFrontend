import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UseAuth } from "../functions/authentication";
import Cookies from "universal-cookie";

function Verify() {
  const { isVerified } = UseAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const cookies = new Cookies();
      console.log(cookies.get("token"));
      console.log("hello");
      if (cookies.get("token")) {
        isVerified(cookies.get("name"));
      }
    }, 1000);

    setTimeout(() => {
      navigate("/posts");
    }, 500);
  }, []);

  return <p>Loading..</p>;
}

export default Verify;
