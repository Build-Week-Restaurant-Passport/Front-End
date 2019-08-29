import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLatLng, addPassports } from "../../store/actions";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { ButtonContainer } from "../styled-components/Button";
import "./Passport.css";
// import SuccessModal from "../Modals/SuccessModal";
import { Button, Header, Image, Modal } from "semantic-ui-react";

export default function Passports(props) {
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  console.log("modal test:", modalOpen);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

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
    // props.history.push("/mypassports");
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
      // props.history.push("/mypassports");
      return console.log("location inside showPosition", location);
    }
  };

  const clickHandler = () => {
    toggleModal();
    props.history.push("/restaurants");
  };

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
        {/* <Divider className="h2-lines" /> */}
        <h2 className="h2-position">or</h2>
        <a onClick={getLocation}>Use my current location</a>
        <p>(This will prompt you to enable your location services)</p>
      </div>
      <img
        src="https://i.imgur.com/FQIAJte.jpg"
        alt="Delicious Pasta"
        className="passportImage"
      />
      {/* <SuccessModal toggleModal={toggleModal} /> */}
      <div>
        {modalOpen ? (
          <Modal open={modalOpen} onClose={modalOpen}>
            <Modal.Content image>
              <Image
                wrapped
                size="medium"
                src="https://i.imgur.com/1IeD2zH.png"
              />
              <Modal.Header>Congrats! You did it!</Modal.Header>
              <Button onClick={clickHandler}>click me</Button>
              <Modal.Description>
                <p>
                  Your personal passport has been created. Treat yourself to
                  something sweet to celebrate!
                </p>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        ) : null}
      </div>
    </div>
  );
}

{
  /* <div>
{modalOpen ? (
  <SuccessModal
    toggleModal={toggleModal}
    modalOpen={modalOpen}
    history={props.history}
  />
) : null}
</div> */
}
