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

  useEffect(() => {
    axios
      .get(`https://6195369874c1bd00176c6c66.mockapi.io/studios`)
      .then(({ data }) => setStudios(data));
  }, []);

  const sort = () => {
    setStudios([...studios].sort((a, b) => a.title.localeCompare(b.title)));
  };

  const sortPrice = () => {
    setStudios([...studios].sort((a, b) => a.price - b.price));
  };

  return (
    <div className="App">
      <Header />
      <District />
      <div className="main">
        <Studio studios={studios} sort={sort} />
        <Sort sort={sort} sortPrice={sortPrice} />
      </div>
      <div className="bottom">123</div>
    </div>
  );
}

export default App;
