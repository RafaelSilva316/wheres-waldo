import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar() {
  const [timerActive, setTimerActive] = useState(true);

  return (
    <header className="Navbar">
      <NavLink
        onClick={() => {
          setTimerActive(true);
        }}
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/"
        className="Navlink"
      >
        Home
      </NavLink>
      {timerActive ? <p>Timer</p> : ""}
      <NavLink
        onClick={() => {
          setTimerActive(false);
        }}
        style={({ isActive }) => {
          return {
            color: isActive ? "red" : "",
          };
        }}
        to="/highscores"
        className="Navlink"
      >
        High Scores
      </NavLink>
    </header>
  );
}

export default Navbar;
