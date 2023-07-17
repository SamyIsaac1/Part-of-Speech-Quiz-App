import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import ScoreContext from "./context/score";
import Router from "./routes/Router";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);

  return (
    <ScoreContext.Provider value={{ score, setScore }}>
      <BrowserRouter>
        <div className="app flex-center">
          <Router />
        </div>
      </BrowserRouter>
    </ScoreContext.Provider>
  );
}

export default App;
