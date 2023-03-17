import SideNav, {Toggle, NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaCcJcb } from "react-icons/fa";
import { MdForum, MdOutlineForum, MdOutlinePostAdd, MdAddComment } from "react-icons/md";
import { RiAdminFill} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import '../styling/sidebar.css';
import React, {createContext, useState, useContext} from "react";
import { UseAuth } from "../functions/authentication";



export default function NavigationSidebar() {
  const navigate = useNavigate();
  const {admin} = UseAuth();
  return (
  <SideNav className="sidenav" onSelect={selected=> {
    console.log(selected)
    navigate(selected);
  }}
  >
     
    <Toggle></Toggle>
    <SideNav.Nav defaultSelected="/">
      <NavItem eventKey="/posts">
        <NavIcon><i><MdForum  style={{fontSize: "25px"}} /></i></NavIcon>
        <NavText>Se alle innlegg</NavText>
      </NavItem>
      <NavItem eventKey="/posts/mine">
        <NavIcon><i><MdAddComment style={{fontSize: "25px"}} /></i></NavIcon>
        <NavText>Registrer ny feedback</NavText>
      </NavItem>
      {admin ? 
        <NavItem eventKey="/admin">
         <NavIcon><i><RiAdminFill style={{fontSize: "25px"}} /></i></NavIcon>
         <NavText>Admin</NavText>
       </NavItem>
       : 
       ""
      }
    </SideNav.Nav>

  </SideNav>
  );
} 

