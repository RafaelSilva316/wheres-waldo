import React from "react";
import "../styles/sidebar.css";
import waldoImg from "../img/waldo.jpg";
import wizardImg from "../img/waldowizard.jpg";
import odlawImg from "../img/odlaw.jpg";

function Sidebar(props) {
  const styler = (char) => {
    return { color: props.menuItemActive[char] ? "#fff" : "green" };
  };

  return (
    <div className="Sidebar">
      <ul className="char-list">
        <li className="char-list-item">
          <img src={waldoImg} alt="profile of Waldo"></img>
          <p style={styler("Waldo")}>Waldo</p>
        </li>
        <li className="char-list-item">
          <img src={wizardImg} alt="profile of Waldo"></img>
          <p style={styler("Wizard")}>Wizard</p>
        </li>
        <li className="char-list-item">
          <img src={odlawImg} alt="profile of Waldo"></img>
          <p style={styler("Odlaw")}>Odlaw</p>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
