
import SideNav, {Toggle, NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaCcJcb } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import './styling/sidebar.css';
import React from "react";

export default function TestSidenav() {

  const navigate = useNavigate();
  return (
  <SideNav className="sidenav" onSelect={selected=> {
    console.log(selected)
    navigate(selected);
  }}
  >

    <SideNav.Toggle onSelect={console.log("test")}/>
    <SideNav.Nav defaultSelected="/">
      <NavItem eventKey="/">
        <NavIcon><i style={{fontSize: "20px"}}><FaCcJcb  style={{fontSize: "20px"}} /></i></NavIcon>
        <NavText>Home</NavText>
      </NavItem>
      <NavItem eventKey="/posts">
        <NavIcon><i style={{fontSize: "20px"}}><FaCcJcb  style={{fontSize: "20px"}} /></i></NavIcon>
        <NavText>Posts</NavText>
      </NavItem>
      <NavItem eventKey="/posts/mine">
        <NavIcon><i style={{fontSize: "20px"}}><FaCcJcb  style={{fontSize: "20px"}} /></i></NavIcon>
        <NavText>Mine Posts</NavText>
      </NavItem>
    </SideNav.Nav>

  </SideNav>
  );
}