import SideNav, {Toggle, NavItem, NavIcon, NavText} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { FaCcJcb, FaAlignJustify } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import '../styling/sidebar.css';
import React, {createContext, useState, useContext} from "react";


export const SidebarContext = createContext();

export function SidebarProvider({children}) {

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  } 
  const value = {
    open,
    isOpen: handleOpen
  }
  return <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>;
} 


export function UseSidebar() {
  return useContext(SidebarContext);
}



export default function TestSidenav() {
  const navigate = useNavigate();
  const {open, isOpen} = UseSidebar();
  return (
  <SideNav className="sidenav" onSelect={selected=> {
    console.log(selected)
    navigate(selected);
  }}
  >

    <Toggle onClick={() => isOpen()}></Toggle>
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

