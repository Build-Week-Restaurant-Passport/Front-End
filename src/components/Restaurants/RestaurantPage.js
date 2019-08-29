import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Accordion, Icon } from "semantic-ui-react";
import axios from "axios";
import "./Restaurants.css";
import { setVisit } from "../../store/actions";
import { DeletePassportButton } from "../styled-components/Button";
import DeleteModal from "../Modals/DeleteModal";

const RestaurantReviewComments = styled.div`
  display: flex;
  margin-bottom: 3rem;
  border-bottom: 2px solid black;
  padding: 0 0 1rem 0;
`;

const RestaurantPage = props => {
  const state = useSelector(state => state);
  console.log("restaurant page props", props);
  const id = props.match.params.restaurantID;
  const dispatch = useDispatch();
  const restaurant = props.location.restaurant;
  const index = props.location.index;
  const price_range = restaurant.restaurant.price_range;
  const starsCount = Math.round(
    restaurant.restaurant.user_rating.aggregate_rating
  );

  const zomatoConfig = {
    headers: { "user-key": "d8b6f250d68c7aff34c7a638eeeeef4e" }
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [restaurantInfo, setRestaurantInfo] = useState({});
  const [reviews, setReviews] = useState(restaurantInfo.all_reviews);
  const [open, setOpen] = useState(false);

  function isEmpty(obj) {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) return false;
    }
    return true;
  }

  useEffect(() => {
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/restaurant?res_id=${props.match.params.restaurantID}`,
        zomatoConfig
      )
      .then(res => setRestaurantInfo(res.data))
      .then()
      .catch(err => console.log(err.response));
  }, []);
  useEffect(() => {
    const reviews = restaurantInfo.all_reviews;
  }, [restaurantInfo]);

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const newIndex = activeIndex === index ? -1 : index;

    setActiveIndex(newIndex);
  };

  const openModal = () => {
    setOpen(true);
    console.log(open);
  };
  const closeModal = () => {
    setOpen(false);
    console.log(open);
  };

  const passportPunch = (index, bool) => {
    console.log("bool:", bool);
    if (bool === true) {
      console.log("if");
      localStorage.setItem(`${id}`, id);
    } else {
      console.log("else");
      localStorage.removeItem(`${id}`);
    }

    dispatch(setVisit({ index }));
  };

  const Button = styled.button`
    border-radius: 1.875rem;
    border: none;
    padding: 0.3125rem 0.625rem;
    color: white;
    width: 49%;
    height: 2.5rem;
    margin-top: 0.6rem;
    background: #e60800;
    transition: all ease-in 0.2s;
    &:hover {
      background: #b09c9c;
      cursor: pointer;
    }
    @media (max-width: 500px) {
      width: 60vw;
      height: 2.875rem;
      font-size: 1.5rem;
      margin: 0 1.5rem;
    }
  `;

  const Button2 = styled.button`
    border-radius: 1.875rem;
    border: 1px solid #e60800;
    padding: 0.3125rem 0.625rem;
    color: #e60800;
    width: 49%;
    height: 2.5rem;
    margin-top: 0.6rem;
    background: white;
    transition: all ease-in 0.2s;
    &:hover {
      background: #b09c9c;
      cursor: pointer;
      border: none;
      color: white;
    }
    @media (max-width: 500px) {
      width: 60vw;
      height: 2.875rem;
      font-size: 1.5rem;
      margin: 0 1.5rem;
    }
  `;
  return (
    <div className="restaurantPage">
      <div className="sideOne">
        <img
          className="restaurantPagePhoto"
          src={restaurantInfo.featured_image}
          alt="Restaurant Photo"
        />
      </div>
      <div className="sideTwo">
        <h1>{restaurant.restaurant.name}</h1>
        <span>
          {[...Array(price_range)].map((obj, index) => (
            <i className="fas fa-dollar-sign" key={`${obj}?index=${index}`}></i>
          ))}
          &nbsp; &middot; &nbsp;
          {restaurant.restaurant.cuisines}
        </span>
        <span>
          {[...Array(starsCount)].map((obj, index) => (
            <i
              className="fas fa-star text-gold stars"
              key={`${obj}?index=${index}`}
            />
          ))}
        </span>
        <div className="buttons">
          <Button>Directions</Button>
          {state.restaurants[index].visited ? (
            <>
              <Button2 onClick={() => passportPunch(index, false)}>
                Unpunch
              </Button2>

              <div>
                {open ? (
                  <DeleteModal
                    openModal={openModal}
                    closeModal={closeModal}
                    history={props.history}
                  />
                ) : null}
              </div>
            </>
          ) : (
            <Button2 onClick={() => passportPunch(index, true)}>Punch</Button2>
          )}
        </div>
        <Accordion fluid styled className="accordionContainer">
          <Accordion.Title
            active={activeIndex === 0}
            index={0}
            onClick={handleClick}
          >
            <Icon name="ellipsis horizontal" />
            More Info
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 0}>
            <p>
              Time: {restaurantInfo.timings}
              <br />
              Phone: {restaurantInfo.phone_numbers}
              <br />
              Address: {restaurant.restaurant.location.address} <br />
              Menu : &nbsp;
              <a
                href={restaurant.restaurant.menu_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-book-open"></i>
              </a>
              <br />
              Highlights:
              {restaurantInfo.highlights
                ? restaurantInfo.highlights.map(highlight => (
                    <span>{` ${highlight}. `}</span>
                  ))
                : null}
            </p>
          </Accordion.Content>

          <a href={restaurant.restaurant.photos_url} target="_blank">
            <Accordion.Title
              active={activeIndex === 1}
              index={1}
              onClick={handleClick}
            >
              <Icon name="ellipsis horizontal" />
              View Photos
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
              <p>Loading Photos ...</p>
            </Accordion.Content>
          </a>
          <Accordion.Title
            active={activeIndex === 2}
            index={2}
            onClick={handleClick}
          >
            <Icon name="ellipsis horizontal" />
            {`Review (${restaurantInfo.all_reviews_count})`}
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 2}>
            {restaurantInfo.all_reviews
              ? restaurantInfo.all_reviews.reviews.map(review => (
                  <RestaurantReviewComments>
                    <div className="reviewSideOne">
                      <p>{review.review.user.name}</p>
                      <img
                        src={review.review.user.profile_image}
                        alt="Profile "
                      />
                    </div>
                    <div className="reviewSideTwo">
                      <p>{review.review.review_text}</p>
                      <p>{review.review.review_time_friendly}</p>
                    </div>
                  </RestaurantReviewComments>
                ))
              : null}
          </Accordion.Content>

          <Accordion.Title
            active={activeIndex === 3}
            index={3}
            onClick={openModal}
          >
            <Icon name="x" color="red" />
            Delete Restaurant
          </Accordion.Title>
          <Accordion.Content active={activeIndex === 3}>
            <p></p>
          </Accordion.Content>
        </Accordion>
      </div>
    </div>
  );
};

export default RestaurantPage;
