import React from "react";
// Css
import style from "./Studio.module.scss";

const Studio = ({ studios, search }) => {
  return (
    <div className={style.main__left}>
      {studios
        .filter((item) =>
          item.title.toLowerCase().includes(search.toLowerCase())
        )
        .map(({ imageUrl, title, adress, reference, price, id }) => (
          <div className={style.studio} key={id}>
            <div className={style.studio__photo}>
              <img src={imageUrl} alt="studio" />
            </div>
            <div className={style.studio__text}>
              <div className={style.studio__text_title}>{title}</div>
              <div className={style.studio__text_address}>{adress}</div>
              <div className={style.studio__text_reference}>
                <a href={reference} target="_blank" rel="noopener noreferrer">
                  {reference}
                </a>
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
