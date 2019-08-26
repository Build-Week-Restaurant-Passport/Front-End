import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  // Font type? Roboto

  return (
    <nav className="footer">
      {/* Logo- of fork and knife in red pin point*/}

      <div className="Logoholder">
        <img
          className="LogoFooter"
          src="https://i.imgur.com/Db8MBpg.png"
          alt="Logo"
        />
      </div>

      <navlinks className="navlinksbox">
        <NavLink className="navword" to="/privacypolicy">
          Privacy
        </NavLink>

        <li className="bulletpoint">
          <NavLink className="navword" to="/help">
            Help
          </NavLink>
        </li>

        <li className="bulletpoint">
          <NavLink className="navword" to="/aboutus">
            About Us
          </NavLink>
        </li>

        <li>
          <NavLink
            className="navword"
            activeClassName="active"
            to="/termsandconditions"
          >
            Terms and Conditions
          </NavLink>
        </li>
      </navlinks>

      <p className="copyright"> {"\u00A9"} 2019 RestaurantPassport</p>
    </nav>
  );
}
