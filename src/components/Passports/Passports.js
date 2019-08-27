import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatLng } from "../../store/actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ButtonContainer } from "../styled-components/Button";
import { Divider } from "semantic-ui-react";
import "./Passport.css";
import axios from "axios";

export default function Passports(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [address, setAddress] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axios
      .get(
        `http://open.mapquestapi.com/geocoding/v1/address?key=iajMmFEnM0izgPOAvTgN9eoU8wof2AZ3&location=${address}`
      )
      .then(res =>
        dispatch(setLatLng(res.data.results[0].locations[0].latLng))
      );
    props.history.push("/restaurants");
  };

  return (
    <div className="passportContainer">
      <h1>Congrats! You're almost there!</h1>
      <h3>What city do you want to create your passport for?</h3>
      <form onSubmit={handleSubmit}>
        <input
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
      <Divider horizontal>or</Divider>
      <a>Use my current location</a>
      <p>(This will prompt you to enable your location services)</p>
    </div>
  );
}
