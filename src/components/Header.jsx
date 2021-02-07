import React from "react";
import logoSvg from "../assets/img/cameraLogo.svg";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__logo">
          <img width="38" src={logoSvg} alt="Pizza logo" />
          <div>
            <h1>Фотостудии Перми</h1>
            <p>все фотостудии Перми на одном сайте</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
