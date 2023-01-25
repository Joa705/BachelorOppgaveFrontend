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
import Verify from "./pages/verify";
import "./App.css";



export default function App() {
  
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigationbar />
        <div>
          <Routes>
            <Route exact path="/" element={<Verify />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/mine" element={<MyPosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/posts/:id" element={<Post />} />
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
