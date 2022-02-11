import React, { useEffect, useState } from "react";

function Timer(props) {
  const [time, setTime] = useState(
    parseInt(props.getSessionStorage("clock", 0))
  );

  useEffect(() => {
    let interval = setInterval(() => {
      setTime((curr) => curr + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
      sessionStorage.setItem("clock", JSON.stringify(time));
      //TODO add curr to database with session id
    };
  }, [time]);

  return (
    <div>
      {time}
      <button
        onClick={() => {
          setTime(0);
          sessionStorage.setItem("clock", JSON.stringify(time));
        }}
      >
        reset
      </button>
    </div>
  );
}

export default Timer;
