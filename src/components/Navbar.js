import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

function Navbar(props) {
  const [timerActive, setTimerActive] = useState(true);

  useEffect(() => {
    if (props.gameOver) {
      setTimerActive(false);
    }
  }, [props.gameOver]);

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

      <p className="timer">{timerActive ? props.time : ""}</p>
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
