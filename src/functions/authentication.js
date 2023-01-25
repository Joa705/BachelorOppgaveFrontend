import React, { useState, useContext, createContext } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';


export function ProtectRouteAdmin({ children }) {
  const { token } = useContext(AuthContext);

  // Add logic for verifying that the user is a admin
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export const AuthContext = createContext(null);

export function AuthProvider({ children, init }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState("");

  const isVerified = (name) => {
    setToken(true);
    setAdmin(true);
    setUserName(name);

    
  }

  const handleLogin = (name) => {
    setToken(true);
    setAdmin(true);
    setUserName(name);

    const cookies = new Cookies();
    cookies.set("token", true);
    cookies.set("name", name);

    const origin = location.state?.from?.pathname || "/posts";
    navigate(origin);
  };

  const handleLogout = () => {
    const cookies = new Cookies();
    cookies.remove("token");
    cookies.remove("name");
    setToken(null);
    setAdmin(false);
    setUserName("");
  };

  const value = {
    token,
    admin,
    userName,
    onLogin: handleLogin,
    onLogout: handleLogout,
    isVerified: isVerified
  };

  if (init) return value;
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function UseAuth() {
  return useContext(AuthContext);
}
