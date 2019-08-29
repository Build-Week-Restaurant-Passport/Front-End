import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setLatLng } from "../../../store/actions";
import axios from "axios";

export default function MyPassport({ address, props }) {
  console.log("address", address);
  const dispatch = useDispatch();
  const addressFormat = [...address.cityname];
  console.log(addressFormat);
  // const format = arr => {
  //   arr[0] = arr[0].toUpperCase();
  //   arr.map((el, idx) => {
  //     if (el === " ") {
  //       arr[idx + 1] = arr[idx + 1].toUpperCase();
  //     }
  //     if (arr[arr.length - 3] === " ") {
  //       arr[arr.length - 1] = arr[arr.length - 1].toUpperCase();
  //     }
  //   });
  //   return arr.join("");
  // };
  // useEffect(() => {
  //   if (addressFormat) {
  //     format(addressFormat);
  //   }
  // }, []);
  // console.log(addressFormat);
  const handleClick = e => {
    e.preventDefault();
    // dispatch(getCities(props, address));
    axios
      .get(
        `http://open.mapquestapi.com/geocoding/v1/address?key=iajMmFEnM0izgPOAvTgN9eoU8wof2AZ3&location=${address}`
      )
      .then(res => {
        console.log("mapquest apis", res);
        dispatch(setLatLng(res.data.results[0].locations[0].latLng));
        props.history.push("/restaurants");
      })
      .catch(err => console.log(err));
  };
  return <>{<h3 onClick={handleClick}>{address.cityname}</h3>}</>;
}
