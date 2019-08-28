import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatLng, addPassports } from "../../store/actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ButtonContainer } from "../styled-components/Button";
import { Divider } from "semantic-ui-react";
import "./Passport.css";
import axios from "axios";

export default function Passports(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");
  const [location, setLocation] = useState();
  console.log("location", location);

  const handleChange = e => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // dispatch(getCities(props, address));
    dispatch(addPassports(address));
    props.history.push("/mypassports");
  };

  const getLocation = e => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    }
  };

  const showPosition = position => {
    setLocation({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    });
    if (location) {
      dispatch(setLatLng(location));
      props.history.push("/mypassports");
      return console.log("location inside showPosition", location);
    }
  };

  return (
    <div className="passportContainer">
      <h1>Congrats! You're almost there!</h1>
      <h3 className="testing">
        What city do you want to create <br /> your passport for?
      </h3>
      <img
        className="map-img"
        src="https://i.imgur.com/AiqKGkF.png"
        alt="Delicious Pasta"
      />
      <form classname="passport-form" onSubmit={handleSubmit}>
        <input
          className="passport-input"
          onChange={handleChange}
          type="text"
          name="address"
          placeholder="Washington, DC"
          value={address}
        />
        <ButtonContainer type="submit" onSubmit={handleSubmit}>
          Create
        </ButtonContainer>
      </form>
      <div className="h2-lines"></div>
      <h2>or</h2>
      <a onClick={getLocation}>Use my current location</a>
      <p>(This will prompt you to enable your location services)</p>
    </div>
  );
}
