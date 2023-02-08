import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigationbar } from "./components/navbar";
import { AuthProvider, ProtectRouteAdmin } from "./functions/authentication";
import Posts from "./pages/posts";
import NotFound from "./pages/notfound";
import Post from "./pages/post";
import Hjemmeside from "./pages/hjemmeside";
import MyPosts from "./pages/mine_posts";
import Admin from "./pages/admin";
import "./App.css";
import NavigationSidebar from "./components/sidebar";
import "./styling/sidebar.css";

export default function App() {
  const [expandSidebar, setExpandSidebar] = useState(false);

  const handleExpandSidebar = () => {
    console.log(expandSidebar ? "Closing" : "Expanding")
    setExpandSidebar(!expandSidebar);
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navigationbar />



        <div
          className="test"
          style={{
            marginLeft: expandSidebar ? "240px" : "64px",
          }}
        >
          <NavigationSidebar handleExpandSidebar={handleExpandSidebar}/>
          <Routes>
            <Route exact path="/" element={<Hjemmeside />} />
            <Route exact path="/hjemmeside" element={<Hjemmeside />} />
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
      </AuthProvider>
    </BrowserRouter>
  );
}
