import React from "react";
import "./HeaderCSS.css";
import { HeaderButton } from "../styled-components/Button";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

const options = [
  { key: "home", icon: "home", text: "Home", as: Link, to: "/home" },
  {
    key: "passports",
    icon: "file",
    text: "Passport",
    as: Link,
    to: "/passports"
  },
  {
    key: "settings",
    icon: "settings",
    text: "Settings",
    as: Link,
    to: "/home"
  },
  { key: "help", icon: "help", text: "Help", as: Link, to: "/privacypolicy" },
  { key: "logout", icon: "logout", text: "Logout", as: Link, to: "/signup" }
];

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
      <div className="dropdown">
        <Menu compact className="menulist">
          <Dropdown text="menu" options={options} simple item />
        </Menu>
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
