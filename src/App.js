import "./styles/app.css";
import wheresWaldoImg from "./img/search-waldo.jpg";
import { useState, useEffect } from "react";

function App() {
  const [background, setBackground] = useState(wheresWaldoImg);

  let backgroundStyle = { backgroundImage: `url(${background})` };

  useEffect(() => {
    setBackground(wheresWaldoImg);
  }, []);

  return (
    <div className="App">
      <div className="img-box" style={backgroundStyle}></div>
    </div>
  );
}

export default App;
