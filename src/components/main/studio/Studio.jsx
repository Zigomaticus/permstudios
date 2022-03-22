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
      {studios.map(({ imageUrl, title, adress, reference, price }) => (
        <div className={style.studio}>
          <div className={style.studio__photo}>
            <img src={imageUrl} alt="studio photo" />
          </div>
          <div className={style.studio__text}>
            <div className={style.studio__text_title}>{title}</div>
            <div className={style.studio__text_address}>{adress}</div>
            <div className={style.studio__text_reference}>
              <a href={reference}>Группа вк</a>
            </div>
          </div>
          <div className={style.studio__price}>
            Цена:
            <br />
            от {price}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Studio;
