import React, { useState, useContext, createContext } from "react";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import Cookies from 'universal-cookie';
import { PublicClientApplication } from "@azure/msal-browser";
import { AzureConfig } from "../config";
import {
  useMsal,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from "@azure/msal-react";

const configs = {auth: {
    clientId : AzureConfig.appId,
    redirectUri : AzureConfig.redirectUri,
    authority : AzureConfig.authority
  }};

export const pcaInstance = new PublicClientApplication(configs)


export async function SignOutHandler(instance, onLogout) {
  const logoutRequest = {
    account: instance.getAccountByHomeId(),
    mainWindowRedirectUri: "http://localhost:3000",
    postLogoutRedirectUri: "http://localhost:3000",
  };
  await instance.logoutPopup(logoutRequest).then(() => onLogout())
  
}

export async function SignInHandler(instance, onLogin) {
  const loginRequest = {
    scopes: AzureConfig.scopes
   };
  await instance.loginPopup()
  .then((res) =>{
    console.log(JSON.stringify(res))
    onLogin(res.account.name ?? "none")
  })
}


export function ProtectRouteAdmin({ children }) {
  const { admin } = useContext(AuthContext);
  // Add logic for verifying that the user is a admin
  if (!admin) return <Navigate to="/" replace />;
  return children;
}

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState("");

  const handleLogin = (name) => {
    setToken(true);
    setAdmin(true);
    setUserName(name);
    navigate("/");
    
  };

  const handleLogout = () => {
    setToken(null);
    setAdmin(false);
    setUserName("");
    navigate("/");
  };

  const value = {
    token,
    admin,
    userName,
    onLogin: handleLogin,
    onLogout: handleLogout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function UseAuth() {
  return useContext(AuthContext);
}
