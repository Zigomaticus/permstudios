import React from "react";
// Css
import styles from "./District.module.scss";

const District = () => {
  const disctricts = [
    { id: 0, name: "Все районы" },
    { id: 1, name: "Дзержинский" },
    { id: 2, name: "Ленинский" },
    { id: 3, name: "Свердловский" },
    { id: 4, name: "Индустриальный" },
    { id: 5, name: "Мотовилихинский" },
    { id: 6, name: "Орджоникидзевский" },
    { id: 7, name: "Кировский" },
  ];

  return (
    <div className={styles.disctrict}>
      {disctricts.map(({ name, id }) => (
        <ul key={id}>
          <li>{name}</li>
        </ul>
      ))}
    </div>
  );
};

export default District;
