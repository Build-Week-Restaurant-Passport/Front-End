import React from "react";
import { Segment, Item, Card, Image, Checkbox, Grid } from "semantic-ui-react";
import "./Restaurants.css";
import { useSelector, useDispatch } from "react-redux";
import { setVisit } from "../../store/actions";
import styled from "styled-components";

const RestaurantCard = styled.div`
  width: 20%;
  margin: 20px 40px;

  @media screen and (max-width: 500px) {
    width: 100%;
    margin: 20px 40px;
  }
`;

const PhoneStyle = styled.div`
  display: none;

  @media screen and (max-width: 500px) {
    display: block;
  }
`;

const BtnsPhone = styled.div`
  @media screen and (max-width: 500px) {
    border: 2px solid red;
    display: flex;
    justify-content: center;
  }
`;

export default function Restaurant({ restaurant, index }) {
  // console.log(restaurant);
  // console.log(index);
  const dispatch = useDispatch();

  const starsCount = Math.round(
    restaurant.restaurant.user_rating.aggregate_rating
  );
  const price_range = restaurant.restaurant.price_range;

  const handleChange = e => {
    e.preventDefault();
    console.log(restaurant);
    console.log(index);
    dispatch(setVisit(index));
  };
  // if(restaurant.restaurant.featured_imag===null){
  //restaurant.restaurant.featured_imag="https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9"
  //}
  return (
    <RestaurantCard>
      <Card className="sameSize">
        <Image
          src={restaurant.restaurant.featured_image}
          wrapped
          ui={false}
          className="sameSizeImages"
        />
        <Card.Content>
          <Card.Header>{restaurant.restaurant.name}</Card.Header>

          <Card.Description>
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
            Address: {restaurant.restaurant.location.address}
            <br />
            <span>
              {[...Array(starsCount)].map((obj, index) => (
                <i
                  className="fas fa-star text-gold"
                  key={`${obj}?index=${index}`}
                />
              ))}
            </span>
            &nbsp; Menu : &nbsp;
            <a
              href={restaurant.restaurant.menu_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-book-open"></i>
            </a>
            <br />
            <Checkbox toggle onClick={handleChange} label="I've Been Here" />
          </Card.Description>
        </Card.Content>
      </Card>

      <PhoneStyle>
        <BtnsPhone>
          <button>Directions</button>
          <button>Unpunch</button>
        </BtnsPhone>

        <div>
          <h2>Reviews</h2>
        </div>
      </PhoneStyle>
    </RestaurantCard>
  );
}

/* <Segment>
        <Item.Group>
          <Item>
            <Item.Image src={restaurant.restaurant.featured_image} />
            <Item.Content>
              <Item.Header>{restaurant.restaurant.name}</Item.Header>
              <Item.Description>
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
                Address: {restaurant.restaurant.location.address}
              </Item.Description>
              <span>
                {[...Array(starsCount)].map((obj, index) => (
                  <i
                    className="fas fa-star text-gold"
                    key={`${obj}?index=${index}`}
                  />
                ))}
              </span>
              &nbsp; Menu : &nbsp;
              <a
                href={restaurant.restaurant.menu_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-book-open"></i>
              </a>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment> */
