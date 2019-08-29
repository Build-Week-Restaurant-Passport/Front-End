// import React from "react";
// import { Button, Header, Image, Modal } from "semantic-ui-react";

// const SuccessModal = props => {
//   console.log("success modal props", props);
//   const clickHandler = () => {
//     props.toggleModal();
//     props.history.push("/restaurants");
//   };
//   return (
//     <Modal open={props.modalOpen} onClose={props.modalOpen} centered={true}>
//       <Modal.Content image>
//         <Image wrapped size="medium" src="https://i.imgur.com/1IeD2zH.png" />
//         <Modal.Header>Congrats! You did it!</Modal.Header>
//         <Button onClick={clickHandler}>click me</Button>
//         <Modal.Description>
//           <p>
//             Your personal passport has been created. Treat yourself to something
//             sweet to celebrate!
//           </p>
//         </Modal.Description>
//       </Modal.Content>
//     </Modal>
//   );
// };

// export default SuccessModal;

// export default function SuccessModal(props) {
//   return (
//     <div style={modalContainer}>
//       <div style={innerBox}>
//         <h1>OMG MODAL</h1>
//         <Button color="teal" onClick={props.toggleModal}>
//           Back
//         </Button>
//       </div>
//     </div>
//   );
// }
