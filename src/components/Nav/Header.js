import React from "react";
import "./HeaderCSS.css";
import { NavLink } from "react-router-dom";

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
        <NavLink to="/Login" className="button" activeClassName="active">
          <p> Login</p>
        </NavLink>
        <NavLink to="/" className="button" activeClassName="active">
          <p> Sign up</p>
        </NavLink>
      </div>
    </header>
  );
};
export default Header;
