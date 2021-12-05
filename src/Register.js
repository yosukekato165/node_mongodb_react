import React, { useState } from "react";
import axios from "axios";

export const Register = () => {
  const [registerName, setRegisterName] = useState("");
  const [registerSummary, setRegisterSummary] = useState("");
  const [registerBedrooms, setRegisterBedrooms] = useState();
  const [registerBathrooms, setRegisterBathrooms] = useState();

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

  return (
    <>
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
    </>
  );
};
