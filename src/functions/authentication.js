import React, { useState, useContext, createContext } from "react";
import { Navigate, useNavigate, useLocation, json } from "react-router-dom";
import Cookies from "universal-cookie";
import { PublicClientApplication } from "@azure/msal-browser";
import { AzureConfig, UrlConfig } from "../config";

const configs = {
  auth: {
    clientId: AzureConfig.appId,
    redirectUri: AzureConfig.redirectUri,
    authority: AzureConfig.authority,
  },
};

export const pcaInstance = new PublicClientApplication(configs);

export async function SignOutHandler(instance, onLogout) {
  const logoutRequest = {
    account: instance.getAccountByHomeId(),
    mainWindowRedirectUri: UrlConfig.clientUrl,
    postLogoutRedirectUri: UrlConfig.clientUrl,
  };
  localStorage.removeItem("session");
  console.log("Removed session")
  await instance.logoutPopup(logoutRequest).then(() => onLogout());
}

export async function SignInHandler(instance, onLogin) {
  const loginRequest = {
    scopes: AzureConfig.scopes,
  };
  await instance
    .loginPopup()
    .then((res) => {
      console.log(res);

      const data = new FormData();
      data.append("azureId", res.account.localAccountId);
      data.append("userName", res.account.name);
      data.append("userEmail", res.account.username);

      // store user in backend
      fetch(UrlConfig.serverUrl + "/User", {
        method: "Post",
        body: data,
        headers: { token: "1234" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (localStorage.getItem("session") == null) {
            console.log("Setting new session")
            var dd = new Date();
            dd.setHours(dd.getHours() + 24);
            let s = {
              "token": data.id,
              "userName": data.userName,
              "email": data.email,
              "role": data.userRole.type,
              "expire": dd
            };
            localStorage.setItem("session", JSON.stringify(s));
          }
          onLogin(data.id, data.userName, data.email, data.userRole.type);
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
}

export function ProtectRouteAdmin({ children }) {
  const { admin } = useContext(AuthContext);
  // Add logic for verifying that the user is a admin
  if (!admin) return <Navigate to="/" replace />;
  return children;
}

export function ProtectRouteLogin({ children }) {
  const { token } = useContext(AuthContext);
  // Add logic for verifying that the user is a admin
  if (!token) return <Navigate to="/" replace />;
  return children;
}

export const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [token, setToken] = useState(null);
  const [admin, setAdmin] = useState(false);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (token, name, email, admin) => {
    setToken(token);
    if (admin == "Admin") {
      setAdmin(true);
    }

    // set admin to true in test stage
    setAdmin(true);
    setUserName(name);
    setUserEmail(email);
    navigate("/");
  };

  const handleLogout = () => {
    setToken(null);
    setAdmin(false);
    setUserName("");
    setUserEmail("");
    navigate("/");
  };

  const handleSession = (token, name, email, admin) => {
    setToken(token);
    if (admin == "Admin") {
      setAdmin(true);
    }

    // set admin to true in test stage
    setAdmin(true);
    setUserName(name);
    setUserEmail(email);

    console.log("Handled session");
  };

  const value = {
    token,
    admin,
    userName,
    userEmail,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onSession: handleSession,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function UseAuth() {
  return useContext(AuthContext);
}

export function SessionHandler() {
  const { onSession, token } = UseAuth();

  if (token != null) return;
  let isSession = localStorage.getItem("session");
  if (isSession == null) {
    console.log("not found sessions");
    return;
  }

  let session = JSON.parse(localStorage.getItem("session"));
  let currentDate = new Date();
  let expiredDate = new Date(session.expire);
  var isExpired = currentDate.getTime() >= expiredDate.getTime();
  console.log("Has expired: ", isExpired)
  if (isExpired){
    localStorage.removeItem("session");
    return;
  }

  onSession(session.token, session.userName, session.email, session.role);
  return;
}
