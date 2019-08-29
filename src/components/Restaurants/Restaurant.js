import React from "react";
import { Segment, Item, Card, Image, Checkbox, Grid } from "semantic-ui-react";
import "./Restaurants.css";
import { useSelector, useDispatch } from "react-redux";
import { setVisit } from "../../store/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RestaurantCard = styled.div`
  width: 20%;
  margin-top: 3rem;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 20px 40px;
  }
`;

export default function Restaurant({ restaurant, index }) {
  // console.log(restaurant);
  // console.log(index);
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const starsCount = Math.round(
    restaurant.restaurant.user_rating.aggregate_rating
  );
  const price_range = restaurant.restaurant.price_range;

  const handleChange = e => {
    e.preventDefault();
    console.log("restaurant", restaurant);
    console.log(index);
    dispatch(setVisit(index));
  };
  // if(restaurant.restaurant.featured_imag===null){
  //restaurant.restaurant.featured_imag="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
  //}

  const HideInfo = styled.span`
    @media screen and (max-width: 500px) {
      display: none;
    }
  `;

  return (
    <Link
      className="restaurantLink"
      to={{
        pathname: `/restaurant/${restaurant.restaurant.id}`,
        restaurant: restaurant,
        index: index
      }}
    >
      <RestaurantCard className="restaurantCard">
        <div className="sameSize">
          <Image
            src={restaurant.restaurant.featured_image}
            wrapped
            ui={false}
            className="sameSizeImages"
          />
          <Card.Content>
            <Card.Header className="name">
              {restaurant.restaurant.name}
            </Card.Header>

            <Card.Description style={{ maxHeight: "55px" }}>
              <span>
                {[...Array(price_range)].map((obj, index) => (
                  <i
                    className="fas fa-dollar-sign"
                    key={`${obj}?index=${index}`}
                  ></i>
                ))}
              </span>
              &nbsp; &middot; &nbsp;
              {restaurant.restaurant.cuisines} <br />
              <span>
                {[...Array(starsCount)].map((obj, index) => (
                  <i
                    className="fas fa-star stars"
                    key={`${obj}?index=${index}`}
                  />
                ))}
              </span>
              <br />
              {state.restaurants[index].visited ? (
                <Image
                  style={{
                    height: "150px",
                    width: "150px",
                    margin: "0",
                    position: "relative",
                    bottom: "50px",
                    left: "150px"
                  }}
                  src="https://i.imgur.com/b5XLrth.png"
                  className="sameSizeImages"
                  onClick={handleChange}
                />
              ) : null}
            </Card.Description>
          </Card.Content>
        </div>
      </RestaurantCard>
    </Link>
  );
}
