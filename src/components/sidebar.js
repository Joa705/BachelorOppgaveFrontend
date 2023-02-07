import SideNav, {Toggle, NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaCcJcb } from "react-icons/fa";
import { MdForum, MdOutlineForum } from "react-icons/md";
import { RiAdminFill} from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import '../styling/sidebar.css';
import React, {createContext, useState, useContext} from "react";
import { UseAuth } from "../functions/authentication";



export default function NavigationSidebar(props) {
  const navigate = useNavigate();
  const {admin} = UseAuth();
  return (
  <SideNav className="sidenav" onSelect={selected=> {
    console.log(selected)
    navigate(selected);
  }}
  >
     
    <Toggle onClick={() => props.handleExpandSidebar()}></Toggle>
    <SideNav.Nav defaultSelected="/">
      <NavItem eventKey="/posts">
        <NavIcon><i><MdForum  style={{fontSize: "25px"}} /></i></NavIcon>
        <NavText>Innlegg</NavText>
      </NavItem>
      <NavItem eventKey="/posts/mine">
        <NavIcon><i><MdOutlineForum  style={{fontSize: "25px"}} /></i></NavIcon>
        <NavText>Mine Innlegg</NavText>
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

