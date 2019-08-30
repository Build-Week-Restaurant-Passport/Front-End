import axios from "axios";

const zomatoConfig = {
  headers: { "user-key": "d8b6f250d68c7aff34c7a638eeeeef4e" }
};

export const POST_DATA_START = "POST_DATA_START";
export const POST_DATA_SUCCESS = "POST_DATA_SUCCESS";
export const POST_DATA_FAILURE = "POST_DATA_FAILURE";

export const POST_REG_START = "POST_REG_START";
export const POST_REG_SUCCESS = "POST_REG_SUCCESS";
export const POST_REG_FAILURE = "POST_REG_FAILURE";

export const GET_PASSPORTS_START = "GET_PASSPORTS_START";
export const GET_PASSPORTS_SUCCESS = "GET_PASSPORTS_SUCCESS";
export const GET_PASSPORTS_FAILURE = "GET_PASSPORTS_FAILURE";

export const GET_RESTAURANTS_START = "GET_RESTAURANTS_START";
export const GET_RESTAURANTS_SUCCESS = "GET_RESTAURANTS_SUCCESS";
export const GET_RESTAURANTS_FAILURE = "GET_RESTAURANTS_FAILURE";

export const ADD_PASSPORTS_START = "ADD_PASSPORTS_START";
export const ADD_PASSPORTS_SUCCESS = "ADD_PASSPORTS_SUCCESS";
export const ADD_PASSPORTS_FAILURE = "ADD_PASSPORTS_FAILURE";

export const ADD_PASSPORTS = "ADD_PASSPORTS";

export const SET_LATLNG = "SET_LATLNG";

export const SET_VISIT = "SET_VISIT";

export const EDIT_PASSPORT = "EDIT_PASSPORT";
export const EDIT_PASSPORT_SUCCESS = "EDIT_PASSPORT_SUCCESS";
export const EDIT_PASSPORT_FAILURE = "EDIT_PASSPORT_FAILURE ";

export const EDIT_CITY = "EDIT_CITY";
export const EDIT_CITY_SUCCESS = "EDIT_CITY_SUCCESS";
export const EDIT_CITY_FAILURE = "EDIT_CITY_FAILURE ";

export const DELETE_PASSPORT = "DELETE_PASSPORT";
export const DELETE_PASSPORT_SUCCESS = "DELETE_PASSPORT_SUCCESS";
export const DELETE_PASSPORT_FAILURE = "DELETE_PASSPORT_FAILURE ";

export const postLogin = form => dispatch => {
  dispatch({ type: POST_DATA_START });
  axios
    .post(
      "https://efrain-restaurant.herokuapp.com/login",
      `grant_type=password&username=${form.username}&password=${form.password}`,
      {
        headers: {
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }
    )
    .then(res => localStorage.setItem("token", res.data.access_token));
};

export const postRegister = form => dispatch => {
  dispatch({ type: POST_REG_START });
  axios
    .post(`https://efrain-restaurant.herokuapp.com/group/add`, form)
    .then(res => {
      console.log(res);
      dispatch({ type: POST_REG_SUCCESS, payload: res });
    })
    .catch(err => {
      console.log("error test:", err);
      dispatch({ type: POST_REG_FAILURE, payload: err });
    });
};

// export const getCities = ({ props, address }) => {
//   return dispatch => {
//     dispatch({ type: "GET_CITES" });
//     axios
//       .get(
//         `http://open.mapquestapi.com/geocoding/v1/address?key=iajMmFEnM0izgPOAvTgN9eoU8wof2AZ3&location=${address}`
//       )
//       .then(res => {
//         // dispatch();
//         // dispatch(setLatLng(res.data.results[0].locations[0].latLng));
//         props.history.push("/restaurants");
//       });
//   };
// };

export const getPassports = props => {
  return dispatch => {
    dispatch({ type: GET_PASSPORTS_START });
    axios
      .get(`https://efrain-restaurant.herokuapp.com/group/city`)
      .then(res => {
        dispatch({ type: GET_PASSPORTS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("getPassports actions error", err);
        dispatch({ type: POST_REG_FAILURE, payload: err });
      });
  };
};
// cities
export const addPassports = props => {
  return dispatch => {
    dispatch({ type: ADD_PASSPORTS_START });
    axios
      .post(`https://efrain-restaurant.herokuapp.com/group/city/add`, props)
      .then(res => {
        dispatch({ type: ADD_PASSPORTS_SUCCESS, payload: props });
      })
      .catch(err => {
        console.log(err.response);
        dispatch({ type: ADD_PASSPORTS_FAILURE, payload: err.response });
      });
  };
};

export const setLatLng = props => {
  return dispatch => {
    dispatch({ type: SET_LATLNG, payload: props });
  };
};

export const getRestaurants = props => {
  return dispatch => {
    dispatch({ type: GET_RESTAURANTS_START });
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/geocode?lat=${props.lat}&lon=${props.lng}`,
        zomatoConfig
      )
      .then(res => {
        dispatch({
          type: GET_RESTAURANTS_SUCCESS,
          payload: res.data.nearby_restaurants
        });
      })
      .catch(err => {
        dispatch({ type: POST_REG_FAILURE, payload: err });
      });
  };
};

export const setVisit = props => {
  return dispatch => {
    dispatch({ type: SET_VISIT, payload: props });
  };
};

export const editPassport = props => {
  return dispatch => {
    dispatch({ type: EDIT_PASSPORT });
    axios
      .put(`https://efrain-restaurant.herokuapp.com/group/city/${props.id}`)
      .then(res => {
        dispatch({ type: EDIT_PASSPORT_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: EDIT_PASSPORT_FAILURE, payload: err });
      });
  };
};

export const removePassport = (idx, id) => {
  return dispatch => {
    dispatch({ type: DELETE_PASSPORT });
    axios
      .delete(`https://efrain-restaurant.herokuapp.com/group/delete/city/${id}`)
      // .delete(`https://jsonplaceholder.typicode.com/posts/1`)
      .then(res => {
        dispatch({ type: DELETE_PASSPORT_SUCCESS, payload: idx });
      })
      .catch(err => {
        console.error("removePassport Error", err);
        dispatch({ type: DELETE_PASSPORT_FAILURE, payload: err });
      });
  };
};

export const editCity = (id, cityname) => {
  console.log(cityname);
  console.log("whats sent", {
    id,
    cityname
  });
  return dispatch => {
    dispatch({ type: EDIT_CITY });
    axios
      .put(`https://efrain-restaurant.herokuapp.com/group/city/${id}`, {
        id,
        cityname
      })
      .then(res => {
        console.log(res);
        dispatch({
          type: EDIT_CITY_SUCCESS,
          payload: { id: id, cityname: cityname }
        });
      })
      .catch(err => {
        console.error(err);
        dispatch({ type: EDIT_CITY_FAILURE, payload: err });
      });
  };
};
