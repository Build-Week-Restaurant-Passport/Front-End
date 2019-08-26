import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPassports } from "../store/actions";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import Passport from "./Passport";

export default function Passports(props) {
  //   const [passports, setPassport] = useState([
  //     {
  //       city: "San Fransisco",
  //       country: "United States"
  //     }
  //   ]);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPassports());
  }, [dispatch]);
  console.log(state);
  return (
    <div>
      <h2>Passports</h2>
      {state.isLoading === true ? (
        <Loader type="TailSpin" color="red" height={80} width={80} />
      ) : (
        state.passports.map((passport, index) => (
          <Passport key={index} passport={passport} />
        ))
      )}
    </div>
  );
}
