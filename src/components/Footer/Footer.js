import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import styled from "styled-components";

export default function Footer() {
  // Font type? Roboto

  const Bulletlist = styled.li`
    color: white;
  `;

  return (
    <nav className="footer">
      {/* Logo- of fork and knife in red pin point*/}

      {/* <Test>abc</Test> */}

      <div className="Logoholder">
        <img
          className="LogoFooter"
          src="https://i.imgur.com/Db8MBpg.png"
          alt="Logo"
        />
      </div>

      <div className="navlinksbox">
        <Link className="navword" to="/privacypolicy">
          Privacy
        </Link>

        <Bulletlist className="bulletpoint">
          <Link className="navword" to="/help">
            Help
          </Link>
        </Bulletlist>

        <Bulletlist className="bulletpoint">
          <Link className="navword" to="/aboutus">
            About Us
          </Link>
        </Bulletlist>

        <Bulletlist>
          <Link
            className="navword"
            activeClassName="active"
            to="/termsandconditions"
          >
            Terms and Conditions
          </Link>
        </Bulletlist>
      </div>

      <p className="copyright"> {"\u00A9"} 2019 RestaurantPassport</p>
    </nav>
  );
}
