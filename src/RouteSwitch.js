import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import App from "./App";
import HighScores from "./components/HighScores";

const RouteSwitch = () => {
  const [menuItemActive, setMenuItemActive] = useState({
    Waldo: true,
    Wizard: true,
    Odlaw: true,
  });

  const updateMenuItem = (e) => {
    const prevMenuActive = { ...menuItemActive };
    prevMenuActive[e.target.innerText] = false;
    setMenuItemActive(prevMenuActive);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar></Navbar>
      <Sidebar menuItemActive={menuItemActive}></Sidebar>
      <Routes>
        <Route
          path="/"
          element={
            <App
              menuItemActive={menuItemActive}
              updateMenuItem={updateMenuItem}
            />
          }
        />
        <Route path="/highscores" element={<HighScores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
