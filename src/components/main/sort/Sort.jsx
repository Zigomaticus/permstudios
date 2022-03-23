import React from "react";
// Css
import styles from "./Sort.module.scss";

const Sort = ({ sortPriceUp, sortPriceDown, sortPopular }) => {
  return (
    <div className={styles.sort}>
      <p>Сортировка по:</p>
      <div onClick={sortPriceUp}>priceUp</div>
      <div onClick={sortPriceDown}>priceDown</div>
      <div onClick={sortPopular}>popular</div>
    </div>
  );
};

export default Sort;
