import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLatLng, addPassports } from "../../store/actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ButtonContainer } from "../styled-components/Button";
import "./Passport.css";
import axios from "axios";
// import SuccessModal from "../Modals/SuccessModal";
import { Button, Image, Modal } from "semantic-ui-react";

export default function Passports(props) {
  const dispatch = useDispatch();
  const [cityname, setcityname] = useState({ cityname: "" });
  const [modalOpen, setModalOpen] = useState(false);
  const [location, setLocation] = useState();

  const closeModal = () => {
    setModalOpen(false);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  // const [address, setAddress] = useState("");

  const handleChange = e => {
    e.preventDefault();
    setcityname({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addPassports(cityname));
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
      return dispatch(setLatLng(location));
    }
  };

  const clickHandler = e => {
    e.preventDefault();
    axios
      .get(
        `http://open.mapquestapi.com/geocoding/v1/address?key=iajMmFEnM0izgPOAvTgN9eoU8wof2AZ3&location=${cityname.cityname}`
      )
      .then(res => {
        dispatch(setLatLng(res.data.results[0].locations[0].latLng));
        props.history.push("/restaurants");
      })
      .catch(err => console.log(err));
  };
  console.log(cityname.cityname);
  return (
    <div className="passport-wrapper">
      <div className="passportContainer">
        <h1>Congrats! You're almost there!</h1>
        <h3 className="h3-spacing">
          What city do you want to create <br /> your passport for?
        </h3>

        <img
          className="maps-img"
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
            onClick={openModal}
          >
            Create
          </ButtonContainer>
        </form>
        <div className="h2-lines"></div>
        <h2 className="h2-position">or</h2>
        <a onClick={getLocation}>Use my current location</a>
        <p>(This will prompt you to enable your location services)</p>
      </div>
      <img
        src="https://i.imgur.com/FQIAJte.jpg"
        alt="Delicious Pasta"
        className="passportImage"
      />
      <div>
        {modalOpen ? (
          <Modal
            className="modalcontainer"
            open={openModal}
            onClose={closeModal}
            closeIcon={true}
          >
            <Modal.Content
              style={{
                flexDirection: "column",
                textAlign: "center",
                height: "500px"
              }}
              image
            >
              <Image
                style={{
                  position: "relative"
                }}
                wrapped
                size="medium"
                src="https://i.imgur.com/1IeD2zH.png"
              />
              <Modal.Header>
                <h1 className="modaltitle">Congrats! You did it!</h1>
              </Modal.Header>

              <Modal.Description className="paratext">
                <h3>
                  Your personal passport has been created. <br /> Treat yourself
                  to something sweet to <br /> celebrate!
                </h3>
              </Modal.Description>
              <Button onClick={clickHandler}>Let's Eat</Button>
            </Modal.Content>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}
