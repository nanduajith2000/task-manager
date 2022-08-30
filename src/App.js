import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <div>
      <Navbar title="To-Do List" mode={mode} toggleMode={toggleMode} />

      <div className="App container my-3">
        <Home />
      </div>
    </div>
  );
}

export default App;
