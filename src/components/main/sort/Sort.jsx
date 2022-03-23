import React from "react";
// Css
import styles from "./Sort.module.scss";

const Sort = ({ sort, sortPriceUp, sortPriceDown, sortPopelar }) => {
  return (
    <div>
      <button onClick={sort}>name</button>
      <button onClick={sortPriceUp}>priceUp</button>
      <button onClick={sortPriceDown}>priceDown</button>
      <button onClick={sortPopelar}>popular</button>
    </div>
  );
};

export default Sort;
