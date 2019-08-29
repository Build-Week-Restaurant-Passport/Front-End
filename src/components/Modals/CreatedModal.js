import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";
import {
  CreatePassportButton,
  HeaderButton,
  ButtonContainer,
  CheckitOutButton
} from "../styled-components/Button";

const CreatedModal = props => {
  console.log("created modal", props);
  return (
    <Modal
      className="modal"
      open={props.modalOpen}
      onClose={props.modalOpen}
      centerd={true}
    >
      <Modal.Header></Modal.Header>
      <Modal.Content image>
        <Image
          className="donut"
          wrapped
          size="medium"
          src="https://i.imgur.com/hJeZXwx.png"
        />

        <Modal.Description>
          <Header>New Passport Created!</Header>
          <p>Now let the foodie in you run wild in a brand new city!</p>
          <CheckitOutButton onClick={props.toggleModal}>
            Check it out
          </CheckitOutButton>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default CreatedModal;
