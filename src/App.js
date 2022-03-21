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
      <div className="content">
        <div className="content__left">
          <div className="studio">
            <div className="studio__photo">1</div>
            <div className="studio__text">2</div>
            <div className="studio__price">3</div>
          </div>
        </div>
        <div className="content__right"></div>
      </div>
      <div className="bottom">123</div>
    </div>
  );
}

export default App;