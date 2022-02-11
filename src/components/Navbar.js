import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import Timer from "./Timer";

function Navbar(props) {
  const [timerActive, setTimerActive] = useState(true);

  if (props.gameOver) {
    setTimerActive(false);
  }

  function toggleTimerActive(boolValue) {
    if (!props.gameOver) {
      setTimerActive(boolValue);
    }
  }

  return (
    <header className="Navbar">
      <NavLink
        onClick={() => {
          toggleTimerActive(true);
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
      {timerActive ? <Timer getSessionStorage={props.getSessionStorage} /> : ""}
      <NavLink
        onClick={() => {
          toggleTimerActive(false);
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
