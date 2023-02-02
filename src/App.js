import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigationbar } from "./components/navbar";
import {
  AuthProvider,
  ProtectRouteAdmin,
  SignInHandler,
  SignoutHandler,
} from "./functions/authentication";
import Login from "./pages/login";
import Posts from "./pages/posts";
import NotFound from "./pages/notfound";
import Post from "./pages/post";
import MyPosts from "./pages/mine_posts";
import Admin from "./pages/admin";
import "./App.css";
import TestSidebar, {SidebarProvider, UseSidebar} from "./components/sidebar";
import './styling/sidebar.css';

function MyRoutes() {
  const {open} = UseSidebar();
  return (
    <div className="routerdiv" style={{
      marginLeft: open ? '240px' : '65px'
    }}>
          <Routes>
            <Route exact path="/" element={<Posts />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/mine" element={<MyPosts />} />
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
  )
}


export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <SidebarProvider>
        <TestSidebar />
        <Navigationbar/>
          <MyRoutes/>
        </SidebarProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
