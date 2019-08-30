import React from "react";
import "./HeaderCSS.css";
import { HeaderButton } from "../styled-components/Button";
import { Link } from "react-router-dom";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [
  {
    key: "home",
    icon: <img src="https://i.imgur.com/AERjI0V.png" alt="home" />,
    text: "Home",
    as: Link,
    to: "/home"
  },
  {
    key: "passports",
    icon: <img src="https://i.imgur.com/u3x1sEo.png" alt="passports" />,
    text: "Passport",
    as: Link,
    to: "/mypassports"
  },
  {
    key: "Restaurants",
    icon: <img src="https://i.imgur.com/fV9RFr6.png" alt="restaurants" />,
    text: "Restaurants",
    as: Link,
    to: "/restaurants"
  },
  {
    key: "help",
    icon: <img src="https://i.imgur.com/3yaROlo.png" alt="help" />,
    text: "Help",
    as: Link,
    to: "/contact"
  },
  {
    key: "logout",
    icon: <img src="https://i.imgur.com/aSGAS6V.png" alt="logout" />,
    text: "Logout",
    as: Link,
    to: "/signout"
  }
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

      {localStorage.getItem("token") === null ? (
        <div className="buttonGroup">
          <HeaderButton to="/signup">Sign up</HeaderButton>
          <HeaderButton to="/home">Login</HeaderButton>
        </div>
      ) : (
        <div className="dropdownGroup">
          <div className="dropdown">
            <Menu compact className="menulist">
              <Dropdown text="MENU" options={options} simple item />
            </Menu>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
