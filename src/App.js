import React, { useState } from "react";
import axios from "axios";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [bedrooms, setBedrooms] = useState();
  const [bathrooms, setBathrooms] = useState();

  const sendPostData = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post(
        `http://localhost:3030`,
        JSON.stringify({
          name: name,
          summary: summary,
          bedrooms: bedrooms,
          bathrooms: bathrooms,
        })
      )
      .then((res) => {
        console.log("res");
        console.log(res.data);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={sendPostData}>
          <ul>
            <li>
              <label for="name">Name:</label>
              <input
                type="text"
                id="name"
                name="user_name"
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <label for="summary">summary:</label>
              <input
                type="text"
                id="summary"
                name="summary"
                onChange={(e) => setSummary(e.target.value)}
              />
            </li>
            <li>
              <label for="bedrooms">bedrooms:</label>
              <input
                type="text"
                id="bedrooms"
                name="bedrooms"
                onChange={(e) => setBedrooms(e.target.value)}
              />
            </li>
            <li>
              <label for="bathrooms">bathrooms:</label>
              <input
                type="text"
                id="bathrooms"
                name="bathrooms"
                onChange={(e) => setBathrooms(e.target.value)}
              />
            </li>
            <li>
              <button type="submit">メッセージを送信</button>
            </li>
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;
