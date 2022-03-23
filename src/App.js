// Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
import { TripleMaze } from "react-spinner-animated";
// Components
import Header from "./components/header/Header";
import District from "./components/district/District";
import Studio from "./components/main/studio/Studio";
import Sort from "./components/main/sort/Sort";
// Css
import "./App.scss";

function App() {
  const [studios, setStudios] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://6195369874c1bd00176c6c66.mockapi.io/studios`)
      .then(({ data }) => setStudios(data));
  }, []);

  // Search studio
  const searchStudio = (e) => {
    setSearch(e.target.value);
  };

  // Sort studio
  const sortPriceUp = () => {
    setStudios([...studios].sort((a, b) => a.price - b.price));
  };

  const sortPriceDown = () => {
    setStudios([...studios].sort((a, b) => b.price - a.price));
  };

  const sortPopular = () => {
    setStudios([...studios].sort((a, b) => b.popular - a.popular));
  };

  return (
    <div className="App">
      <Header searchStudio={searchStudio} search={search} />
      {/* <District /> */}
      <div className="main">
        {studios.length !== 0 ? (
          <Studio studios={studios} search={search} />
        ) : (
          <TripleMaze />
        )}
        <Sort
          sortPriceUp={sortPriceUp}
          sortPriceDown={sortPriceDown}
          sortPopular={sortPopular}
        />
      </div>
    </div>
  );
}

export default App;
