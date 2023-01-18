import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Navigationbar, NavigationbarLogin } from "./components/navbar";
import { UserContex } from "./components/userContex";
import Home from "./pages/home";
import Login from "./pages/login";
import "./App.css";


const About = () => (
  <div>
    <h2>Category</h2>
  </div>
);

const Contact = () => (
  <div>
    <h2>Products</h2>
  </div>
);

export default function App() {
  const [islogin, setIslogin] = useState(false);
  
  return (
    <BrowserRouter>
      <UserContex.Provider value={{ islogin, setIslogin }}>
        {(islogin == false)? <Navigationbar />: <NavigationbarLogin />}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </UserContex.Provider>
    </BrowserRouter>
  );
}
