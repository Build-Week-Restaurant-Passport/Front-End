import React, { useEffect, useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useSelector, useDispatch } from "react-redux";
import { getPassports } from "../store/actions";

import Passport from "./Passport";

export default function Passports(props) {
  const [passports, setPassport] = useState([
    {
      city: "San Fransisco",
      country: "United States"
    }
  ]);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getPassports());
  }, [dispatch]);
  return (
    <div>
      {passports.map((passport, index) => (
        <Passport key={index} passport={passport} />
      ))}
    </div>
  );
}
