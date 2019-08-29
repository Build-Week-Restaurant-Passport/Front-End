import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../../store/actions";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Restaurant from "./Restaurant";
import { Input, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { LoadMoreButton } from "../styled-components/Button";

const RestauransContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;
const RestaurantList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: stretch;
`;

const BtnFooter = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: flex;
    justify-content: center;
    background: white;
    padding: 20px;
  }
`;

export default function Restaurants(props) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();

  const [categories, setCategories] = useState("");

  useEffect(() => {
    dispatch(getRestaurants(state.latlng));
  }, [dispatch, state.latlng]);
  console.log(state);
  console.log(state.restaurants);

  const changeHandler = event => {
    setCategories(event.target.value);
    console.log(categories.toLowerCase());
  };
  const changeSubmit = event => {
    event.preventDefault();
  };
  const filterSearch = state.restaurants.filter(
    restaurant =>
      restaurant.restaurant.cuisines
        .toLowerCase()
        .includes(categories.toLowerCase()) ||
      restaurant.restaurant.name
        .toLowerCase()
        .includes(categories.toLowerCase())
  );
  return (
    <RestauransContainer>
      <h2>Restaurants</h2>
      <form onSubmit={changeSubmit}>
        <Input
          className="searchInput"
          icon={<Icon name="search" inverted circular link />}
          type="text"
          name="restaurant_search"
          onChange={changeHandler}
        ></Input>
      </form>

      <RestaurantList>
        {state.isLoading === true ? (
          <Loader type="TailSpin" color="#e65400" height={80} width={80} />
        ) : (
          //state.restaurants &&
          filterSearch.map((restaurant, index) => (
            <Restaurant key={index} restaurant={restaurant} index={index} />
          ))
        )}
      </RestaurantList>

      <BtnFooter>
        <LoadMoreButton>Load More</LoadMoreButton>
      </BtnFooter>
    </RestauransContainer>
  );
}
