import React from "react";
import { Modal } from "semantic-ui-react";
import { ButtonContainer } from "../styled-components/Button";

import "./CreatedModal.css";

const CreatedModal = props => {
  return (
    <Modal
      className="modal"
      open={props.openModal}
      onClose={props.closeModal}
      closeIcon={true}
      style={{
        display: "flex",
        alignItems: "center"
      }}
    >
      <Modal.Content
        style={{
          flexDirection: "column",
          textAlign: "center",
          height: "500px"
        }}
      >
        <Modal.Description>
          <img
            className="popsicleImg"
            size="medium"
            src="https://i.imgur.com/hJeZXwx.png"
            alt="popsicle"
          />
          <Modal.Header>
            <h3>New Passport Created!</h3>
          </Modal.Header>

          <p>Now let the foodie in you run wild in a brand new city!</p>

          <ButtonContainer onClick={() => props.history.push("/restaurants")}>
            Check it out
          </ButtonContainer>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default CreatedModal;
