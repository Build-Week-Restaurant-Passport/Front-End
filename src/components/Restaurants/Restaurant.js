import React from "react";
import { Segment, Item } from "semantic-ui-react";
import "./Restaurants.css";

export default function Restaurant({ restaurant }) {
  const starsCount = Math.round(
    restaurant.restaurant.user_rating.aggregate_rating
  );
  const price_range = restaurant.restaurant.price_range;

  return (
    <div>
      <Segment>
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
      </Segment>
    </div>
  );
}
