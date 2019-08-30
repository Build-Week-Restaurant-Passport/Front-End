import React from "react";
import "./HeaderCSS.css";
import { HeaderButton } from "../styled-components/Button";
import { Link } from "react-router-dom";
import { Button, Dropdown, Menu } from "semantic-ui-react";

const options = [
  {
    key: "home",
    icon: <img src="https://i.imgur.com/AERjI0V.png" />,
    text: "Home",
    as: Link,
    to: "/home"
  },
  {
    key: "passports",
    icon: <img src="https://i.imgur.com/u3x1sEo.png" />,
    text: "Passport",
    as: Link,
    to: "/mypassports"
  },
  {
    key: "settings",
    icon: <img src="https://i.imgur.com/AUXhgEy.png" />,
    text: "Settings",
    as: Link,
    to: "/home"
  },
  {
    key: "help",
    icon: <img src="https://imgur.com/3yaROlo" />,
    text: "Help",
    as: Link,
    to: "/privacypolicy"
  },
  {
    key: "logout",
    icon: <img src="https://i.imgur.com/AERjI0V.png" />,
    text: "Logout",
    as: Link,
    to: "/signup"
  }
];

// onClick={() => localStorage.removeItem("token")}

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
          {/* <HeaderButton onClick={() => localStorage.removeItem("token")}>
            Sign Out
          </HeaderButton> */}
          <div className="dropdown">
            <Menu compact className="menulist">
              <Dropdown text="menu" options={options} simple item />
            </Menu>
          </div>
        </div>
      )}
    </header>
  );
};
export default Header;
