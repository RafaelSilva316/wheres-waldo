import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import Score from "./Score";
import "../styles/highscore.css";

function HighScores(props) {
  const query = props.usersRef.orderBy("finalTime").limit(10);
  const [scores] = useCollectionData(query);

  return (
    <div className="HighScore">
      <h1>Highest Scorers</h1>
      {scores &&
        scores.map((score) => {
          return <Score key={score.userId} score={score} />;
        })}
    </div>
  );
}

export default HighScores;
