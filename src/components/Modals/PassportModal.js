import React, { useState } from "react";
import {
  Button,
  Header,
  Image,
  Modal,
  Dimmer,
  Segment
} from "semantic-ui-react";
import { useSelector, useDispatch } from "react-redux";
import { setLatLng, addPassports } from "../../store/actions";
import "./PassportModal.css";
import { ButtonContainer } from "../styled-components/Button";

const PassportModal = props => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [cityname, setcityname] = useState({ cityname: "" });
  const [location, setLocation] = useState();
  console.log("success modal props", props);
  const clickHandler = () => {
    props.toggleModal();
    // props.history.push("/restaurants");
  };

  const handleChange = e => {
    e.preventDefault();
    setcityname({ [e.target.name]: e.target.value });
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
  };
  const handleSubmit = e => {
    console.log("in submit handler");
    e.preventDefault();
    // dispatch(getCities(props, address));
    dispatch(addPassports(cityname));
    props.toggleModal();
    // props.history.push("/mypassports");
  };
  return (
    <Dimmer.Dimmable as={Segment} dimmed={active}>
      <Modal
        style={{
          display: "flex",
          alignItems: "center"
        }}
        open={props.modalOpen}
        onClose={props.modalOpen}
        centered={true}
      >
        <Modal.Content
          style={{
            flexDirection: "column",
            textAlign: "center",
            height: "500px"
          }}
        >
          <Modal.Header>
            <h3>
              What city do you want to create <br /> your passport for?
            </h3>
          </Modal.Header>
          <Modal.Description>
            <img
              className="map-img"
              src="https://i.imgur.com/AiqKGkF.png"
              alt="Delicious Pasta"
            />
            <form className="passport-form" onSubmit={handleSubmit}>
              <input
                className="passport-input"
                onChange={handleChange}
                type="text"
                name="cityname"
                placeholder="Washington, DC"
                value={cityname.cityname}
              />
              <ButtonContainer
                className="create-btn"
                type="submit"
                onSubmit={handleSubmit}
              >
                Create
              </ButtonContainer>
            </form>
            <div className="h2-lines"></div>
            <h2 className="h2-position">or</h2>
            <a onClick={getLocation}>Use my current location</a>
            <p>(This will prompt you to enable your location services)</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Dimmer.Dimmable>
  );
};

export default PassportModal;

/* <div className="passport-wrapper">
      <div className="passportContainer">
        <h1>Congrats! You're almost there!</h1>
        <h3 className="h3-spacing">
          What city do you want to create <br /> your passport for?
        </h3>

        <img
          className="map-img"
          src="https://i.imgur.com/AiqKGkF.png"
          alt="Delicious Pasta"
        />

        <form className="passport-form" onSubmit={handleSubmit}>
          <input
            className="passport-input"
            onChange={handleChange}
            type="text"
            name="address"
            placeholder="Washington, DC"
            value={address}
          />
          <ButtonContainer
            className="create-btn"
            type="submit"
            onSubmit={handleSubmit}
            onClick={toggleModal}
          >
            Create
          </ButtonContainer>
        </form>
        <div className="h2-lines"></div>
        <h2 className="h2-position">or</h2>
        <a onClick={getLocation}>Use my current location</a>
        <p>(This will prompt you to enable your location services)</p>
      </div> 
    </div> */
