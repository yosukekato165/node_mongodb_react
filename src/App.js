import React, { useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";
import { set } from "core-js/fn/dict";

function App() {
  const [registerName, setRegisterName] = useState("");
  const [registerSummary, setRegisterSummary] = useState("");
  const [registerBedrooms, setRegisterBedrooms] = useState();
  const [registerBathrooms, setRegisterBathrooms] = useState();

  const [referenceName, setReferenceName] = useState("");

  const [storedName, setStoredName] = useState("");
  const [storedSummary, setStoredSummary] = useState("");
  const [storedBedrooms, setStoredBedrooms] = useState();
  const [storedBathrooms, setStoredBathrooms] = useState();

  const registerData = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post(
        `http://localhost:3030/register`,
        JSON.stringify({
          name: registerName,
          summary: registerSummary,
          bedrooms: registerBedrooms,
          bathrooms: registerBathrooms,
        })
      )
      .then((res) => {
        console.log("res");
        console.log(res.data);
      });
  };

  const referenceData = (e) => {
    e.preventDefault();
    console.log("clicked");

    axios
      .post(
        `http://localhost:3030/reference`,
        JSON.stringify({
          name: referenceName,
        })
      )
      .then((res) => {
        setStoredName(res.name);
        setStoredSummary(res.summary);
        setStoredBedrooms(res.bedrooms);
        setStoredBathrooms(res.bathrooms);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Register</h2>
        <form onSubmit={registerData}>
          <ul>
            <li>
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="user_name"
                onChange={(e) => setRegisterName(e.target.value)}
              />
            </li>
            <li>
              <label for="summary">summary:</label>
              <input
                type="text"
                id="summary"
                name="summary"
                onChange={(e) => setRegisterSummary(e.target.value)}
              />
            </li>
            <li>
              <label for="bedrooms">bedrooms:</label>
              <input
                type="text"
                id="bedrooms"
                name="bedrooms"
                onChange={(e) => setRegisterBedrooms(e.target.value)}
              />
            </li>
            <li>
              <label for="bathrooms">bathrooms:</label>
              <input
                type="text"
                id="bathrooms"
                name="bathrooms"
                onChange={(e) => setRegisterBathrooms(e.target.value)}
              />
            </li>
            <li>
              <button type="submit">登録する</button>
            </li>
          </ul>
        </form>
        <h2>Reference</h2>
        <form onSubmit={referenceData}>
          <ul>
            <li>
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="user_name"
                onChange={(e) => setReferenceName(e.target.value)}
              />
            </li>
            <li>
              <button type="submit">参照する</button>
            </li>
          </ul>
        </form>
        <ul>
          <li>{storedName}</li>
          <li>{storedSummary}</li>
          <li>{storedBedrooms}</li>
          <li>{storedBathrooms}</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
