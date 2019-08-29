import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

// Delete modal goes to restaurants
const DeletedModal = props => {
  console.log("dreated modal", props);
  return (
    <Modal
      closeIcon
      open={props.openModal}
      onClose={props.closeModal}
      centerd={true}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size="medium" src="https://i.imgur.com/eNfjMiE.png" />
        <Modal.Description>
          <Header>Are you sure you want to delete this restaurant?</Header>
          <p>deleting this restaurant will remove it from your passport.</p>
          <p>Is it okay to use this photo?</p>
          <Button>yes</Button>
          <Button>no</Button>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default DeletedModal;
