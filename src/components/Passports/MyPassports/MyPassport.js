import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLatLng, removePassport, editCity } from "../../../store/actions";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";
import "./MyPassports.css";
import {
  DeletePassportButton,
  EditCityButton
} from "../../styled-components/Button";

export default function MyPassport({ address, props, idx, id }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const deletePassport = () => {
    dispatch(removePassport(idx, address.cityid));
  };

  const updateCity = () => {
    dispatch(editCity(id, input.cityname, idx));
  };

  const handleClick = e => {
    e.preventDefault();
    axios
      .get(
        `https://open.mapquestapi.com/geocoding/v1/address?key=iajMmFEnM0izgPOAvTgN9eoU8wof2AZ3&location=${address.cityname}`
      )
      .then(res => {
        dispatch(setLatLng(res.data.results[0].locations[0].latLng));
        props.history.push("/restaurants");
      })
      .catch(err => console.log(err));
  };

  const handleChange = e => {
    e.preventDefault();
    setInput({ [e.target.name]: e.target.value });
  };

  return (
    <div className="passportCard">
      <Card>
        <Image
          style={{
            position: "relative"
          }}
          wrapped
          size="medium"
          src="https://i.imgur.com/g07DyWO.jpg"
        />
        <Card.Content>
          <h3 onClick={handleClick}>{address.cityname}</h3>
          <input
            onChange={handleChange}
            type="text"
            name="cityname"
            placeholder="Edit City"
          />
          <EditCityButton onClick={updateCity}>Edit</EditCityButton>
          <DeletePassportButton onClick={() => deletePassport(idx)}>
            Delete
          </DeletePassportButton>
        </Card.Content>
      </Card>
    </div>
  );
}
