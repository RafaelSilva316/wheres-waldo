import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  return (
    <header className="Navbar">
      <NavLink to="/" className="Navlink">
        Home
      </NavLink>
      <NavLink to="/highscores" className="Navlink">
        High Scores
      </NavLink>
    </header>
  );
}

export default Navbar;
