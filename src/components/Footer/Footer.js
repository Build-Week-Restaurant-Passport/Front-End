import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import styled from "styled-components";

export default function Footer() {
  const NavLinksbox = styled.div`
    display: flex;
    justify-content: center;
    padding-bottom: 30px;

    @media screen and (max-width: 500px) {
      display: flex;
      flex-wrap: wrap;
      width: 90%;
      padding-bottom: 10px;
    }
  `;

  const Bulletlist = styled.li`
    color: white;
  `;

  const BulletGroup = styled.div`
    display: flex;
    @media screen and (max-width: 500px) {
    }
  `;

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

      <NavLinksbox>
        <Link className="navword" to="/privacypolicy">
          Privacy
        </Link>

        <Bulletlist className="bulletpoint">
          <Link className="navword" to="/contact">
            Help
          </Link>
        </Bulletlist>

        <Bulletlist className="bulletpoint">
          <Link className="navword" to="/aboutus">
            About Us
          </Link>
        </Bulletlist>

        <BulletGroup>
          <Bulletlist>
            <Link className="navword" activeclassname="active" to="/terms">
              Terms and Conditions
            </Link>
          </Bulletlist>
        </BulletGroup>
      </NavLinksbox>

      <p className="copyright"> {"\u00A9"} 2019 RestaurantPassport</p>
    </nav>
  );
}
