import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import App from "./App";
import HighScores from "./components/HighScores";
import uuid from "react-uuid";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAjLHsBDBkiC4NZOYX-Y2_CT97Job5gukM",
  authDomain: "wheres-waldo-5b7ce.firebaseapp.com",
  projectId: "wheres-waldo-5b7ce",
  storageBucket: "wheres-waldo-5b7ce.appspot.com",
  messagingSenderId: "416756930860",
  appId: "1:416756930860:web:d19c7256bf30c427e3b489",
};
const app = initializeApp(firebaseConfig);

const RouteSwitch = () => {
  const [menuItemActive, setMenuItemActive] = useState({
    Waldo: true,
    Wizard: true,
    Odlaw: true,
  });

  const [userId, setUserId] = useState(getSessionStorage("userId", uuid()));
  const [gameOver, setGameOver] = useState(false);

  //checkif finished is being called before menuItemactive is updated, probably async
  //here's an idea: try to call it in updateMenuItem, look up the async setState again and do that -> make sure to remove cb from checkTarget fn in app.js as well as removing checkiffinished calls in CharMenu
  const checkIfFinished = () => {
    let isGameOver = true;
    console.log(menuItemActive);
    for (const item in menuItemActive) {
      if (menuItemActive[item] === true) {
        isGameOver = false;
      }
    }
    console.log(isGameOver);
    setGameOver(isGameOver);
  };

  function getSessionStorage(key, fallback) {
    const inStore = sessionStorage.getItem(key);
    if (!inStore) {
      return fallback;
    }
    return JSON.parse(inStore);
  }

  const updateMenuItem = (e) => {
    const prevMenuActive = { ...menuItemActive };
    prevMenuActive[e.target.innerText] = false;
    setMenuItemActive(prevMenuActive);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar
        gameOver={gameOver}
        getSessionStorage={getSessionStorage}
      ></Navbar>
      <Sidebar menuItemActive={menuItemActive}></Sidebar>
      <Routes>
        <Route
          path="/"
          element={
            <App
              menuItemActive={menuItemActive}
              updateMenuItem={updateMenuItem}
              checkIfFinished={checkIfFinished}
            />
          }
        />
        <Route path="/highscores" element={<HighScores />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
