import React from "react";
import Logo from "./Logo.jsx";
import NavBar from "./NavBar.jsx";

const Header = () => {
  return (
    <header style={{ backgroundColor: "#FFA500", padding: "0.5rem 1rem" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <Logo />
        <NavBar />
      </div>
    </header>
  );
};

export default Header;
