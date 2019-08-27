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
          <h1>RESTAURANTPASSPORT</h1>
        </div>
      </div>
      <div className="buttonGroup">
        <HeaderButton to="/signup">
          <p> Sign up</p>
        </HeaderButton>
        <HeaderButton to="/home">
          <p> Login</p>
        </HeaderButton>
      </div>
    </header>
  );
};
export default Header;
