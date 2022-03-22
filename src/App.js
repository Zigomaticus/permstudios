import React from "react";
// Components
import Header from "./components/header/Header";
import District from "./components/district/District";
import Studio from "./components/main/studio/Studio";
// Css
import "./App.scss";

const disctricts = [
  { id: 0, name: "Все районы" }, // all
  { id: 1, name: "Дзержинский" }, // all
  { id: 2, name: "Ленинский" }, // all
  { id: 3, name: "Свердловский" }, // all
  { id: 4, name: "Индустриальный" }, // all
  { id: 5, name: "Мотовилихинский" }, // all
  { id: 6, name: "Орджоникидзевский" }, // all
  { id: 7, name: "Кировский" }, // all
];

function App() {
  return (
    <div className="App">
      <Header />
      <District disctricts={disctricts} />
      <div className="main">
        <Studio />
        <div className="main__right">321</div>
      </div>
      <div className="bottom">123</div>
    </div>
  );
}

export default App;
