import React from "react";

function Score(props) {
  return (
    <div className="Score">
      {props.score.name} {props.score.finalTime}
    </div>
  );
}

export default Score;
