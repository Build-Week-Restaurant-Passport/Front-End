import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPassports } from "../../store/actions";
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
  console.log(state.passports);
  return (
    <div>
      <h2>Passports</h2>
      {state.isLoading === true ? (
        <Loader type="TailSpin" color="#e65400" height={80} width={80} />
      ) : (
        state.passports &&
        state.passports.map((passport, index) => (
          <Passport key={index} passport={passport} />
        ))
      )}
    </div>
  );
}
