import React from "react";
import { Card, Image } from "semantic-ui-react";
import "./Restaurants.css";
import { useSelector, useDispatch } from "react-redux";
import { setVisit } from "../../store/actions";
import styled from "styled-components";
import { Link } from "react-router-dom";

const RestaurantCard = styled.div`
  width: 20%;
  margin-top: 3rem;
  margin: 0 auto;
  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 20px 40px;
  }
`;

export default function Restaurant({ restaurant, index }) {
  const state = useSelector(state => state);
  const dispatch = useDispatch();
  const starsCount = Math.round(
    restaurant.restaurant.user_rating.aggregate_rating
  );
  const price_range = restaurant.restaurant.price_range;

  const handleChange = e => {
    e.preventDefault();
    dispatch(setVisit(index));
  };

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
            src={
              restaurant.restaurant.featured_image.length > 2
                ? restaurant.restaurant.featured_image
                : `https://i.imgur.com/7YHZ8gM.jpg`
            }
            wrapped
            ui={false}
            className="sameSizeImages"
          />
          <Card.Content>
            <Card.Header className="name">
              <strong>{restaurant.restaurant.name}</strong>
            </Card.Header>

            <Card.Description
              style={{ maxHeight: "55px" }}
              className="subheader"
            >
              <div>
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
              </div>
              {state.restaurants[index].visited ? (
                <div>
                  <Image
                    // style={{
                    //   height: "150px",
                    //   width: "150px",
                    //   margin: "0",
                    //   position: "relative",
                    //   bottom: "50px",
                    //   left: "150px"
                    // }}
                    src="https://i.imgur.com/b5XLrth.png"
                    className="sameSizeImages visitedStamp"
                    onClick={handleChange}
                  />
                </div>
              ) : null}
            </Card.Description>
          </Card.Content>
        </div>
      </RestaurantCard>
    </Link>
  );
}
