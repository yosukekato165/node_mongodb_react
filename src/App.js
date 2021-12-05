import React from "react";

import logo from "./logo.svg";
import "./App.css";
import { Register } from "./Register";
import { Reference } from "./Reference";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Register />
        <Reference />
      </header>
    </div>
  );
}

export default App;
