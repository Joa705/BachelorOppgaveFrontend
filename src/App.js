import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigationbar } from "./components/navbar";
import {
  AuthProvider,
  ProtectRouteAdmin,
  ProtectRouteLogin,
  SessionHandler
} from "./functions/authentication";
import Posts from "./pages/posts";
import NotFound from "./pages/notfound";
import Post from "./pages/post";
import Hjemmeside from "./pages/hjemmeside";
import MyPosts from "./pages/mine_posts";
import NyPosts from "./pages/ny_post";
import Admin from "./pages/admin";
import Brukere from "./pages/admin/brukere";
import "./App.css";
import NavigationSidebar from "./components/sidebar";
import "./styling/sidebar.css";
import Footer from "./components/footer";


export default function App() {
  return (
    <>
    <BrowserRouter>
      <AuthProvider>
        <SessionHandler />
        <Navigationbar />
        <NavigationSidebar />
        <div className="main-content">
          <Routes>
            <Route exact path="/" element={<Hjemmeside />} />
            <Route exact path="/hjemmeside" element={<Hjemmeside />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route
              exact
              path="/posts/opprett"
              element={
                <ProtectRouteLogin>
                  <NyPosts />
                </ProtectRouteLogin>
              }
            />
            <Route path="/posts/id/:id" element={<Post />} />

            <Route
              path="/admin"
              element={
                <ProtectRouteAdmin>
                  <Admin />
                </ProtectRouteAdmin>
              }
            ></Route>
            <Route
              path="/admin/brukere"
              element={
                <ProtectRouteAdmin>
                  <Brukere />
                </ProtectRouteAdmin>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>
        <Footer />
        </div>
      </AuthProvider>
    </BrowserRouter>

    </>
  );
}
