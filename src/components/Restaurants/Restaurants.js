import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getRestaurants } from "../../store/actions";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Restaurant from "./Restaurant";
import { Input, Icon, Accordion } from "semantic-ui-react";
import styled from "styled-components";
import { LoadMoreButton } from "../styled-components/Button";
import "./Restaurants.css";

const RestauransContainer = styled.div`
  width: 80%;
  margin: 20px auto;
`;
const RestaurantList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
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

  const changeHandler = event => {
    setCategories(event.target.value);
  };
  const changeSubmit = event => {
    event.preventDefault();
  };
  const [activeIndex, setActiveIndex] = useState(-1);
  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
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
      <div className="flex-searchbar">
        <h1 className="searchBar-title">Restaurants</h1>
        <Accordion className="searchBarcontainer">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="search" inverted circular link />
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <form onSubmit={changeSubmit} className="search-form">
              <Input
                id="searchInputId"
                className="searchInput"
                type="text"
                name="restaurant_search"
                onChange={changeHandler}
              ></Input>
            </form>
          </Accordion.Content>
        </Accordion>
      </div>

      <RestaurantList className="restaurants">
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
