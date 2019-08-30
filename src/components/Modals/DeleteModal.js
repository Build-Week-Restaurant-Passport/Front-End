import React from "react";
import { Header, Image, Modal } from "semantic-ui-react";
import styled from "styled-components";

const BtnYes = styled.button`
  width: 80px;
  background: #157f22;
  border-radius: 14px;
  padding: 5px;
  border: none;
  color: white;
  margin-right: 10px;
`;
const BtnNo = styled.button`
  width: 80px;
  background: #e60800;
  border-radius: 14px;
  padding: 5px;
  border: none;
  color: white;
  margin-left: 10px;
`;

// Delete modal goes to restaurants
const DeleteModal = props => {
  console.log("dreated modal", props);
  return (
    <Modal closeIcon={true} open={props.openModal} onClose={props.closeModal}>
      <Modal.Header></Modal.Header>
      <Modal.Content
        style={{
          flexDirection: "column",
          textAlign: "center",
          height: "500px"
        }}
      >
        <Image wrapped size="medium" src="https://i.imgur.com/eNfjMiE.png" />
        <Modal.Description>
          <Header>Are you sure you want to delete this restaurant?</Header>
          <p>deleting this restaurant will remove it from your passport.</p>

          <BtnYes onClick={props.closeModal}>yes</BtnYes>
          <BtnNo onClick={props.closeModal}>no</BtnNo>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default DeleteModal;
