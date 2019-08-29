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
import PassportModal from "../../Modals/PassportModal";
import "./MyPassports.css";

export default function MyPassports(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [createModalOpen, setCreateModalOpen] = useState(false);
  console.log("modal test:", modalOpen);

  const deletePassport = e => {
    e.preventDefault();
    console.log("removal passport test", e);
    dispatch({ type: "DELETE_PASSPORT" });
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openCreateModal = () => {
    setCreateModalOpen(true);
  };

  const closeCreateModal = () => {
    setCreateModalOpen(false);
  };

  useEffect(() => {
    dispatch(getPassports());
  }, []);

  return (
    <div className="mypassportsTitleContainer">
      <div className="mypassportsTitle">
        <h1>Your Passports</h1>
        <div className="btnContainer">
          <div className="btn2">
            <DeletePassportButton>Delete Passport</DeletePassportButton>
          </div>

          {/* Add create Modal with button press */}
          <div className="btn1">
            <CreatePassportButton onClick={openModal}>
              + Add New Passport
            </CreatePassportButton>
          </div>
        </div>
      </div>

      <p className="myPassportsContainer">
        {state.myPassports &&
          state.myPassports.map(passport => (
            <MyPassport address={passport} props={props} />
          ))}
      </p>
      {modalOpen ? (
        <PassportModal
          modalOpen={modalOpen}
          openModal={openModal}
          closeModal={closeModal}
          openCreateModal={openCreateModal}
          closeCreateModal={closeCreateModal}
          createModalOpen={createModalOpen}
          history={props.history}
        />
      ) : null}
    </div>
  );
}
