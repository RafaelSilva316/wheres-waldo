import React, { useState } from "react";
import "../styles/popup.css";

const Popup = (props) => {
  const [finalTime, setFinalTime] = useState(props.time);
  const [name, setName] = useState("");

  const addScoreToDb = (e) => {
    e.preventDefault();
    props.addScoreToDb(name);
  };

  return (
    <div className="popup-box">
      <div className="box">
        <span className="close-icon" onClick={props.handleClose}>
          x
        </span>
        <h1>Congratulations!</h1>
        <h1>{finalTime}</h1>
        <form action="">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <button
            onClick={(e) => {
              addScoreToDb(e);
              props.handleClose();
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
