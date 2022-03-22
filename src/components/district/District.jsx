import React from "react";
// Css
import styles from "./District.module.scss";

const District = ({ disctricts }) => {
  return (
    <div className={styles.disctrict}>
      {disctricts.map(({name, id}) => (
        <ul key={id}>
          <li>{name}</li>
        </ul>
      ))}
    </div>
  );
};

export default District;
