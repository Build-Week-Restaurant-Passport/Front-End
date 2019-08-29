import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyPassport from "./MyPassport";
import { getPassports } from "../../../store/actions";
// import { rootReducer, initialState } from "../store"
// import { modalContainer, innerBox } from "./modalstyle";
import {
  CreatePassportButton,
  DeletePassportButton,
  HeaderButton,
  ButtonContainer,
  CheckitOutButton
} from "../../styled-components/Button";
import CreatedModal from "../../Modals/CreatedModal";
import PassportModal from "../../Modals/PassportModal";
import "./MyPassports.css";

export default function MyPassports(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  console.log("modal test:", modalOpen);

  const deletePassport = e => {
    e.preventDefault();
    console.log("removal passport test", e);
    dispatch({ type: "DELETE_PASSPORT" });
  };

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(getPassports());
  }, []);

  return (
    <div className="Title">
      <h1>Your Passports</h1>
      {state.myPassports &&
        state.myPassports.map(passport => (
          <MyPassport address={passport} props={props} />
        ))}

      <div className="btn2">
        <DeletePassportButton>Delete Passport</DeletePassportButton>
      </div>

      {/* Add create Modal with button press */}
      <div className="btn1">
        <CreatePassportButton onClick={toggleModal}>
          + Add New Passport
        </CreatePassportButton>
      </div>
      {/* 
      <div>
        {modalOpen ? <PassportModal toggleModal={toggleModal} /> : null}
      </div> */}

      {modalOpen ? (
        <PassportModal
          toggleModal={toggleModal}
          modalOpen={modalOpen}
          history={props.history}
        />
      ) : null}
      {/* 
      {modalOpen2 ? (
        <CreatedModal
          toggleModal2={toggleModal2}
          modalOpen2={modalOpen2}
          history={props.history}
        />
      ) : null} */}
    </div>
  );
}
