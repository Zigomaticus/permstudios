import React from "react";
// Components
import Header from "./components/header/Header";
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
      <div className="disctrict">
        {disctricts.map((disctrict) => (
          <ul>
            <li key={disctrict}>{disctrict}</li>
          </ul>
        ))}
      </div>
      <div className="content">123</div>
      <div className="bottom">123</div>
    </div>
  );
}

export default App;
