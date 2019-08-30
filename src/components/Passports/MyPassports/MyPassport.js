import React from "react";
import { useDispatch } from "react-redux";
import { setLatLng, removePassport } from "../../../store/actions";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";
import "./MyPassports.css";
import { DeletePassportButton } from "../../styled-components/Button";

export default function MyPassport({ address, props, idx }) {
  const dispatch = useDispatch();
  const addressFormat = [...address.cityname];

  const openModal = () => {
    props.setModalOpen(true);
  };

  const deletePassport = () => {
    console.log(idx);
    dispatch(removePassport(idx));
  };

  const handleClick = e => {
    e.preventDefault();
    axios
      .get(
        `http://open.mapquestapi.com/geocoding/v1/address?key=iajMmFEnM0izgPOAvTgN9eoU8wof2AZ3&location=${address.cityname}`
      )
      .then(res => {
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
          <DeletePassportButton onClick={() => deletePassport(idx)}>
            Delete Passport
          </DeletePassportButton>
        </Card.Content>
      </Card>
    </div>
  );
}
