import axios from "axios";
import axiosWithAuth from "../../utils/axiosWithAuth";

const headers = {
  Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
  "Content-Type": "application/x-www-form-urlencode"
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

export const postLogin = form => dispatch => {
  console.log("actions form test", form);
  dispatch({ type: POST_DATA_START });
  axios.post(
    "https://efrain-restaurant.herokuapp.com/login",
    `grant_type=password$username=${form.username}&password=${form.password}`,
    {
      headers: {
        Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
        "Content-Type": "application/x-www-form-urlencode"
      }
    }
  );
};

export const postRegister = form => dispatch => {
  dispatch({ type: POST_REG_START });
  axios
    .post(`https://jsonplaceholder.typicode.com/posts/1`, form)
    .then(res => {
      console.log("successful add:", res);
      dispatch({ type: POST_REG_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log("error test:", err);
      dispatch({ type: POST_REG_FAILURE, payload: err });
    });
};

export const getPassports = props => {
  return dispatch => {
    dispatch({ type: GET_PASSPORTS_START });
    axios
      .get(
        `https://developers.zomato.com/api/v2.1/cities?q=San%20Francisco`,
        "d8b6f250d68c7aff34c7a638eeeeef4e"
      )
      .then(res => {
        console.log("in actions", res.data);
        dispatch({ type: GET_PASSPORTS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log("actions", err);
        dispatch({ type: POST_REG_FAILURE, payload: err });
      });
  };
};
