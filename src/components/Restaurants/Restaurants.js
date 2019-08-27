import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../../store/actions";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Restaurant from "./Restaurant";

export default function Restaurants(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch]);
  return (
    <div>
      <h2>Restaurants</h2>
      {state.isLoading === true ? (
        <Loader type="TailSpin" color="#e65400" height={80} width={80} />
      ) : (
        state.restaurants &&
        state.restaurants.map((restaurant, index) => (
          <Restaurant key={index} restaurant={restaurant} />
        ))
      )}
    </div>
  );
}
