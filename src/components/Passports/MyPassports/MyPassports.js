import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MyPassport from "./MyPassport";
import { getPassports } from "../../../store/actions";
// import { rootReducer, initialState } from "../store"
// import { modalContainer, innerBox } from "./modalstyle";
import {
  CreatePassportButton,
  HeaderButton,
  ButtonContainer,
  CheckitOutButton
} from "../../styled-components/Button";
import CreatedModal from "../../Modals/CreatedModal";
import PassportModal from "../../Modals/PassportModal";

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

  useEffect(() => {
    dispatch(getPassports());
  }, []);

  return (
    <div>
      <button onClick={deletePassport}>delete passport</button>

      <h1>Your Passports</h1>
      {state.myPassports &&
        state.myPassports.map(passport => (
          <MyPassport address={passport} props={props} />
        ))}

      <div>
        {/* Add create Modal with button press */}

        <CreatePassportButton onClick={toggleModal}>
          + Add New Passport
        </CreatePassportButton>
        {/* {modalOpen ? (
            <CreatedModal
              toggleModal={toggleModal}
              modalOpen={modalOpen}
              history={props.history}
            />
          ) : null} */}
        {modalOpen ? (
          <PassportModal
            toggleModal={toggleModal}
            modalOpen={modalOpen}
            history={props.history}
          />
        ) : null}
      </div>
    </div>
  );
}
