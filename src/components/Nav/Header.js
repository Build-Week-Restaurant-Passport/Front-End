import React from "react";
import "./HeaderCSS.css";
import { HeaderButton } from "../styled-components/Button";

const Header = () => {
  return (
    <header>
      <div className="logoContainer">
        <div className="logo">
          <img
            className="logoImg"
            src="https://i.imgur.com/Db8MBpg.png"
            alt="logo"
          />
          <h1 className="title">RESTAURANTPASSPORT</h1>
        </div>
      </div>
      <div className="buttonGroup">
        <HeaderButton to="/signup">Sign up</HeaderButton>
        <HeaderButton to="/home">Login</HeaderButton>
      </div>
    </header>
  );
};
export default Header;
