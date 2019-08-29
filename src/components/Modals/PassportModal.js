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
import CreatedModal from "./CreatedModal";

// PassportModal goes to add passport on page /MyPassports

const PassportModal = props => {
  console.log("quick test:", props);
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const [cityname, setcityname] = useState({ cityname: "" });
  const [location, setLocation] = useState();
  console.log("passport modal props", props);
  console.log("props.createModalOpen", props.createModalOpen);

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
    props.openModal();
    console.log("in submit handler");
    e.preventDefault();
    // dispatch(getCities(props, address));
    dispatch(addPassports(cityname));
    console.log("sub test:", props);
    props.history.push("/mypassports");
  };
  return (
    <Dimmer.Dimmable as={Segment} dimmed={active}>
      <Modal open={props.openModal} onClose={props.closeModal} closeIcon={true}>
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
              className="modal-map-img"
              src="https://i.imgur.com/AiqKGkF.png"
              alt="Delicious Pasta"
            />
            <form className="passport-modal-form" onSubmit={handleSubmit}>
              <input
                className="passport-modal-input"
                onChange={handleChange}
                type="text"
                name="cityname"
                placeholder="Washington, DC"
                value={cityname.cityname}
              />
              <ButtonContainer
                className="modal-create-btn"
                type="submit"
                onSubmit={handleSubmit}
                onClick={props.openCreateModal}
              >
                Create
              </ButtonContainer>
            </form>
            <div>
              {props.createModalOpen ? (
                <CreatedModal
                  openModal={props.openModal}
                  closeModal={props.closeCreateModal}
                  history={props.history}
                />
              ) : null}
            </div>
            <div className="h2-modal-lines"></div>
            <h2 className="h2-modal-position">or</h2>
            <a onClick={getLocation}>Use my current location</a>
            <p>(This will prompt you to enable your location services)</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Dimmer.Dimmable>
  );
};

export default PassportModal;
