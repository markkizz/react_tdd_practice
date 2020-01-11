import React from "react";
import "./Header.scss";

function Header(props) {
  return (
    <header className="headerComponent" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img
            id="logoImg"
            src="https://raw.githubusercontent.com/simpletut/Testing-React-Redux-with-Jest-and-Enzyme/master/src/assets/graphics/logo.png"
            alt="logo"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
