import React from "react";
// Components
import Header from "./components/header/Header";
import District from "./components/district/District";
// Css
import "./App.scss";

const disctricts = [
  "Все районы",
  "Дзержинский",
  "Ленинский",
  "Свердловский",
  "Индустриальный",
  "Мотовилихинский",
  "Орджоникидзевский",
  "Кировский",
];

function App() {
  return (
    <div className="App">
      <Header />
      <District disctricts={disctricts} />
      <div className="content">123</div>
      <div className="bottom">123</div>
    </div>
  );
}

export default App;
