import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

// Delete modal goes to MyPassport.js for delete passport
const DeletedModal = props => {
  console.log("dreated modal", props);
  return (
    <Modal
      closeIcon
      open={props.modalOpen}
      onClose={props.modalOpen}
      centerd={true}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image
          wrapped
          size="medium"
          src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
        />
        <Modal.Description>
          <Button onClick={props.toggleModal}>back</Button>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default DeletedModal;
