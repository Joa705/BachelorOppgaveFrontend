import React, { useState, useEffect, useContext } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Navigationbar } from "./components/navbar";
import { AuthProvider, ProtectRouteAdmin } from "./functions/authentication";
import Posts from "./pages/posts";
import NotFound from "./pages/notfound";
import Post from "./pages/post";
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
        <NavigationSidebar handleExpandSidebar={handleExpandSidebar}/>
        <div
          className="main-Content"
          style={{
            marginLeft: expandSidebar ? "245px" : "70px",
          }}
        >
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
      </AuthProvider>
    </BrowserRouter>
  );
}
