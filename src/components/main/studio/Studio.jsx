import React, { useState, useEffect } from "react";
import axios from "axios";
// Css
import style from "./Studio.module.scss";

const Studio = () => {
  const [studios, setStudios] = useState([]);

  useEffect(() => {
    axios
      .get(`https://6195369874c1bd00176c6c66.mockapi.io/studios`)
      .then(({ data }) => setStudios(data));
  }, []);

  return (
    <div className={style.main__left}>
      {studios.map((studio) => (
        <div className={style.studio}>
          <div className={style.studio__photo}>1</div>
          <div className={style.studio__text}>2</div>
          <div className={style.studio__price}>3</div>
        </div>
      ))}
    </div>
  );
};

export default Studio;
