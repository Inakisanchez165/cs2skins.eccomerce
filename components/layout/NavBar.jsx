import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo.jsx";

const linkStyle = {
  margin: "0 10px",
  color: "#fff",
  textDecoration: "none",
  fontWeight: "500"
};

const activeStyle = {
  color: "#222",
  backgroundColor: "#fff",
  borderRadius: "5px",
  padding: "2px 8px",
  fontWeight: "700"
};

const NavBar = () => {
  return (
    <nav style={{ 
      display: "flex", 
      alignItems: "center",
      justifyContent: "space-between",
      maxWidth: "1200px",
      margin: "0 auto",
      gap: "1rem"
    }}>
      <Logo />
      <div>
        <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Home
        </NavLink>
        <NavLink to="/category/pistolas" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Pistolas
        </NavLink>
        <NavLink to="/category/rifles" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Rifles
        </NavLink>
        <NavLink to="/category/cuchillos" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Cuchillos
        </NavLink>
        <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
          Carrito
        </NavLink>
      </div>
    </nav>
  );
};

export default NavBar;
