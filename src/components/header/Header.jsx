// Libraries
import React, { useState } from "react";
// Static
import logo from "../../static/logo.png";
// Css
import styles from "./Header.module.scss";

const Header = ({searchStudio, search}) => {

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <img src={logo} alt="logo" width={64} height={64} />
      </div>
      <div className={styles.header__text}>
        <div className={styles.header__text_title}>Фотостудии Перми</div>
        <div className={styles.header__text_text}>
          Все фотостудии Перми на одном сайте
        </div>
      </div>
      <input placeholder="Найти студию..." value={search} onChange={searchStudio} />
    </div>
  );
};

export default Header;
