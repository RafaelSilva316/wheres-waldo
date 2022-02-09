import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import App from "./App";
import HighScores from "./components/HighScores";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar></Navbar>
      <Sidebar></Sidebar>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/highscores" element={<HighScores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
