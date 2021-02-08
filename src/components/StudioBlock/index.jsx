import React from "react";

function StudioBlock({ title, adress, reference, price, imageUrl }) {
  return (
    <div className="studio-block">
      <div className="studio-block-photo">
        <img src={imageUrl} width="200px" height='118px' alt="Фото студии" />
      </div>
      <div className="studio-block-content">
        <div className="studio-block-title">{title}</div>
        <div className="studio-block-adress">Адрес: ул. {adress}</div>
        <a href={reference} target="_blank" rel='void'>
          <div className="studio-block-description">Группа вк: {reference}</div>
        </a>
        <div className="studio-block-price">
          Цена: <br />от {price} руб.
        </div>
      </div>
    </div>
  );
}

export default StudioBlock;
