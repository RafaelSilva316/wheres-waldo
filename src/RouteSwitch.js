import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import App from "./App";
import HighScores from "./components/HighScores";
import uuid from "react-uuid";

// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

firebase.initializeApp({
  apiKey: "AIzaSyAjLHsBDBkiC4NZOYX-Y2_CT97Job5gukM",
  authDomain: "wheres-waldo-5b7ce.firebaseapp.com",
  projectId: "wheres-waldo-5b7ce",
  storageBucket: "wheres-waldo-5b7ce.appspot.com",
  messagingSenderId: "416756930860",
  appId: "1:416756930860:web:d19c7256bf30c427e3b489",
});
const firestore = firebase.firestore();

const initCharStates = {
  Waldo: true,
  Wizard: true,
  Odlaw: true,
};

const RouteSwitch = () => {
  const [menuItemActive, setMenuItemActive] = useState(
    getSessionStorage("charStates", initCharStates)
  );

  useEffect(() => {
    let savedCharStates = { ...menuItemActive };
    sessionStorage.setItem("charStates", JSON.stringify(savedCharStates));
  });

  const [time, setTime] = useState(parseInt(getSessionStorage("clock", 0)));

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((curr) => curr + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      sessionStorage.setItem("clock", JSON.stringify(time));
    };
  }, [time]);

  const [userId, setUserId] = useState(getSessionStorage("userId", uuid()));
  const [gameOver, setGameOver] = useState(false);
  const usersRef = firestore.collection("users");

  const checkIfFinished = () => {
    let isGameOver = true;

    for (const item in menuItemActive) {
      if (menuItemActive[item] === true) {
        isGameOver = false;
      }
    }

    setGameOver(isGameOver);
  };

  useEffect(() => {
    checkIfFinished();
  });

  function getSessionStorage(key, fallback) {
    const inStore = sessionStorage.getItem(key);
    if (!inStore) {
      return fallback;
    }
    return JSON.parse(inStore);
  }

  const addScoreToDb = async (name) => {
    const finalTime = time;
    await usersRef.add({
      userId,
      name,
      finalTime,
    });
  };

  const updateMenuItem = (e) => {
    const prevMenuActive = { ...menuItemActive };
    prevMenuActive[e.target.innerText] = false;
    setMenuItemActive(prevMenuActive);
  };

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navbar
        gameOver={gameOver}
        time={time}
        getSessionStorage={getSessionStorage}
      ></Navbar>

      <Sidebar menuItemActive={menuItemActive}></Sidebar>
      <Routes>
        <Route
          path="/"
          element={
            <App
              addScoreToDb={addScoreToDb}
              gameOver={gameOver}
              menuItemActive={menuItemActive}
              updateMenuItem={updateMenuItem}
              checkIfFinished={checkIfFinished}
              time={time}
            />
          }
        />
        <Route
          path="/highscores"
          element={<HighScores usersRef={usersRef} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
