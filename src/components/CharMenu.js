import React from "react";

function CharMenu(props) {
  // const checkTarget = (e) => {
  //   console.log(e.target);
  // };

  const styler = (char) => {
    return {
      pointerEvents: props.activeItems[char] ? "auto" : "none",
      color: props.activeItems[char] ? "" : "#bbb",
      backgroundColor: props.activeItems[char] ? "" : "green",
    };
  };

  return (
    <div style={{ left: props.x + 35, top: props.y - 25 }} className="CharMenu">
      <ul>
        <li style={styler("Waldo")} onClick={props.checkTarget}>
          Waldo
        </li>
        <li style={styler("Wizard")} onClick={props.checkTarget}>
          Wizard
        </li>
        <li style={styler("Odlaw")} onClick={props.checkTarget}>
          Odlaw
        </li>
      </ul>
    </div>
  );
}

export default CharMenu;
