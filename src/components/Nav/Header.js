import React from "react";
import "./HeaderCSS.css";
import { HeaderButton } from "../styled-components/Button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logoContainer">
        <Link className="linkStyle" to="/home">
          <div className="logo">
            <img
              className="logoImg"
              src="https://i.imgur.com/Db8MBpg.png"
              alt="logo"
            />

            <h1 className="headertitle">RESTAURANTPASSPORT</h1>
          </div>
        </Link>
      </div>
      {localStorage.getItem("token") === null ? (
        <div className="buttonGroup">
          <HeaderButton to="/signup">Sign up</HeaderButton>
          <HeaderButton to="/home">Login</HeaderButton>
        </div>
      ) : (
        <div className="buttonGroup">
          <HeaderButton onClick={() => localStorage.removeItem("token")}>
            Sign Out
          </HeaderButton>
        </div>
      )}
    </header>
  );
};
export default Header;
