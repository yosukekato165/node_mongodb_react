import React, { useState } from "react";
import axios from "axios";

export const Reference = () => {
  const [referenceName, setReferenceName] = useState("");

  const [storedName, setStoredName] = useState("");
  const [storedSummary, setStoredSummary] = useState("");
  const [storedBedrooms, setStoredBedrooms] = useState();
  const [storedBathrooms, setStoredBathrooms] = useState();

  const referenceData = (e) => {
    e.preventDefault();

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
    <>
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
    </>
  );
};
