import React from "react";
import { NavLink } from "react-router-dom";

const linkStyle = {
  margin: "0 10px",
  color: "#fff",
  textDecoration: "none",
};

const activeStyle = {
  ...linkStyle,
  fontWeight: "bold",
  textDecoration: "underline",
};

const NavBar = () => {
  return (
    <nav style={{ padding: "1rem", background: "#222", color: "#fff" }}>
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

      <NavLink to="/category/snipers" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
        Snipers
      </NavLink>

      <NavLink to="/cart" style={({ isActive }) => (isActive ? activeStyle : linkStyle)}>
        Carrito
      </NavLink>
    </nav>
  );
};

export default NavBar;
