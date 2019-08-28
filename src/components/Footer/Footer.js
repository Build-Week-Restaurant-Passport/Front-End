import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import styled from "styled-components";
import { LoadMoreButton } from "../styled-components/Button";

export default function Footer() {
  // Font type? Roboto

  const Bulletlist = styled.li`
    color: white;
  `;

  const BulletGroup = styled.div`
    display: flex;
  @media screen and (max-width: 500px) {
    display: flex;
    flex-direction: column
    border: 2px solid red;
  }
  `;

  const BtnFooter = styled.div`
    display: none;

    @media screen and (max-width: 500px) {
      display: flex;
      justify-content: center;
      background: white;
      padding: 20px;
    }
  `;

  return (
    <nav className="footer">
      <BtnFooter>
        <LoadMoreButton>Load More</LoadMoreButton>
      </BtnFooter>

      {/* Logo- of fork and knife in red pin point*/}

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
            <Link className="navword" activeClassName="active" to="/terms">
              Terms and Conditions
            </Link>
          </Bulletlist>
        </BulletGroup>
      </div>

      <p className="copyright"> {"\u00A9"} 2019 RestaurantPassport</p>
    </nav>
  );
}
