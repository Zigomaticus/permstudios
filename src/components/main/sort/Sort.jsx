import React from "react";
// Css
import styles from "./Sort.module.scss";

const Sort = ({ sort, sortPrice }) => {
  return (
    <div>
      <button onClick={sort}>name</button>
      <button onClick={sortPrice}>price</button>
    </div>
  );
};

export default Sort;
