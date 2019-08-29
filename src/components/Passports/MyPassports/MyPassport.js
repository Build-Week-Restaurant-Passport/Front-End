import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLatLng } from "../../../store/actions";
import axios from "axios";
import { Card, Image, Grid } from "semantic-ui-react";
import "./MyPassports.css";
export default function MyPassport({ address, props }) {
  console.log("address", address);
  const dispatch = useDispatch();
  const addressFormat = [...address.cityname];
  console.log(addressFormat);

  const openModal = () => {
    props.setModalOpen(true);
  };

  const handleClick = e => {
    e.preventDefault();
    // dispatch(getCities(props, address));
    axios
      .get(
        `http://open.mapquestapi.com/geocoding/v1/address?key=iajMmFEnM0izgPOAvTgN9eoU8wof2AZ3&location=${address}`
      )
      .then(res => {
        console.log("mapquest apis", res);
        dispatch(setLatLng(res.data.results[0].locations[0].latLng));
        props.history.push("/restaurants");
      })
      .catch(err => console.log(err));
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
        </Card.Content>
      </Card>
    </div>
  );
}
