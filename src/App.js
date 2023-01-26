import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigationbar, NavigationbarLogin } from "./components/navbar";
import { AuthProvider, ProtectRouteAdmin } from "./functions/authentication";
import Login from "./pages/login";
import Posts from "./pages/posts";
import NotFound from "./pages/notfound";
import Post from "./pages/post";
import MyPosts from "./pages/mine_posts";
import Admin from "./pages/admin";
import Verify from "./components/verify";
import "./App.css";
import { MsalProvider, useMsal} from "@azure/msal-react";
import { Configuration,  PublicClientApplication } from "@azure/msal-browser";
import { AzureConfig } from "./config";
 

export default function App() {
/* 
  const pca = new PublicClientApplication({
    auth: {
      clientId : AzureConfig.appId,
      redirectUri : AzureConfig.redirectUri,
      authority : AzureConfig.authority
    },
    cache: {
      cacheLocation : "sessionStorage",
      storeAuthStateInCookie: true
    }
  })  

  const {instance} = useMsal();
  const LoginTest = (pca) => {
    pca.loginPopup(
      {
        scopes: AzureConfig.scopes,
        prompt : "select_account"
      }
    )
  }
  
  return (
    <>
    <MsalProvider instance={pca}>
      <button onClick={() => instance.loginPopup(pca)}>Test</button>
    </MsalProvider> 
    </>
  ) */
  

   return (
    <BrowserRouter>
      <AuthProvider>
        <Navigationbar />
        <Verify />
        <div>
          <Routes>
            <Route exact path="/" element={<Posts />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/mine" element={<MyPosts />} />
            <Route path="/posts/:id" element={<Post />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/admin"
              element={
                <ProtectRouteAdmin>
                  <Admin />
                </ProtectRouteAdmin>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </AuthProvider>
    </BrowserRouter>
  ); 
}
