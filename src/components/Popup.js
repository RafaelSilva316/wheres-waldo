import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/popup.css";

const Popup = (props) => {
  const [finalTime, setFinalTime] = useState(props.time);
  const [name, setName] = useState("");

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `highscores`;
    navigate(path);
  };

  const addScoreToDb = (e) => {
    e.preventDefault();
    props.addScoreToDb(name);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <h1 className="popup-heading">
          Congratulations! you finished in {finalTime} seconds!
        </h1>

        <form action="">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            className="btn form-btn"
            onClick={(e) => {
              addScoreToDb(e);
              props.handleClose();
              routeChange();
            }}
          >
            Enter Name
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
