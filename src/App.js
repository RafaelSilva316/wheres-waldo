import "./styles/app.css";
import wheresWaldoImg from "./img/search-waldo.jpg";
import { useState } from "react";
import CharMenu from "./components/CharMenu";

function App(props) {
  const [background, setBackground] = useState(wheresWaldoImg);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [propMousePos, setpropMousePos] = useState({ px: 0, py: 0 });
  const [charListActive, setCharListActive] = useState(false);

  const toggleCharList = () => {
    const newActive = !charListActive;
    setCharListActive(newActive);
  };

  const getMousePos = (e) => {
    const rect = e.target.getBoundingClientRect();
    const newX = e.clientX - rect.left;
    const newY = e.clientY - rect.top;
    setpropMousePos({ px: newX / rect.width, py: newY / rect.height });
    setMousePos({ x: newX, y: newY });
  };

  const propPositions = {
    Waldo: { px: 0.4283, py: 0.2685 },
    Wizard: { px: 0.8311, py: 0.8715 },
    Odlaw: { px: 0.185, py: 0.573 },
  };

  const checkTarget = (e) => {
    const targetPos = propPositions[e.target.innerText];
    if (
      Math.abs(targetPos.px - propMousePos.px) < 0.05 &&
      Math.abs(targetPos.py - propMousePos.py) < 0.05
    ) {
      props.updateMenuItem(e);
    }
    toggleCharList();
  };

  return (
    <div className="App">
      <img
        onClick={(e) => {
          getMousePos(e);
          toggleCharList();
        }}
        src={background}
        alt="search and find, where's waldo"
      ></img>
      <div
        style={{ display: charListActive ? "block" : "none" }}
        className="charlist-container"
      >
        <div
          className="cursorRect"
          style={{ left: mousePos.x - 25, top: mousePos.y - 25 }}
        ></div>
        <CharMenu
          activeItems={props.menuItemActive}
          checkTarget={checkTarget}
          x={mousePos.x}
          y={mousePos.y}
        />
      </div>
    </div>
  );
}

export default App;
