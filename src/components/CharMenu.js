import React from "react";

function CharMenu(props) {
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
        <li
          style={styler("Waldo")}
          onClick={(e) => {
            props.checkTarget(e, () => {
              props.checkIfFinished();
            });
          }}
        >
          Waldo
        </li>
        <li
          style={styler("Wizard")}
          onClick={(e) => {
            props.checkTarget(e, () => {
              props.checkIfFinished();
            });
          }}
        >
          Wizard
        </li>
        <li
          style={styler("Odlaw")}
          onClick={(e) => {
            props.checkTarget(e, () => {
              props.checkIfFinished();
            });
          }}
        >
          Odlaw
        </li>
      </ul>
    </div>
  );
}

export default CharMenu;
