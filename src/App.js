// Libraries
import React, { useState, useEffect } from "react";
import axios from "axios";
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

  
  const searchStudio = (e) => {
    setSearch(e.target.value);
  }

  const sort = () => {
    setStudios([...studios].sort((a, b) => b.title.localeCompare(a.title)));
  };

  const sortPriceUp = () => {
    setStudios([...studios].sort((a, b) => a.price - b.price));
  };

  const sortPriceDown = () => {
    setStudios([...studios].sort((a, b) => b.price - a.price));
  };

  const sortPopelar = () => {
    setStudios([...studios].sort((a, b) => b.popular - a.popular));
  };

  const filterStudio = () => {
    setStudios([...studios].filter((name) => name.title()));
  };

  return (
    <div className="App">
      <Header searchStudio={searchStudio} search={search} />
      <District />
      <div className="main">
        <Studio studios={studios} sort={sort} search={search} />
        <Sort
          sort={sort}
          sortPriceUp={sortPriceUp}
          sortPriceDown={sortPriceDown}
          sortPopelar={sortPopelar}
        />
      </div>
      <div className="bottom">123</div>
    </div>
  );
}

export default App;
