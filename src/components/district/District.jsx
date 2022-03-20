import React from "react";
// Css
import styles from "./District.module.scss";

const District = ({ disctricts }) => {
  return (
    <div className={styles.disctrict}>
      {disctricts.map((disctrict) => (
        <ul>
          <li key={disctrict}>{disctrict}</li>
        </ul>
      ))}
    </div>
  );
};

export default District;
