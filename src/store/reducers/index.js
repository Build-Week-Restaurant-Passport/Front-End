import {
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  POST_REG_START,
  POST_REG_SUCCESS,
  POST_REG_FAILURE,
  GET_PASSPORTS_START,
  GET_PASSPORTS_SUCCESS,
  GET_PASSPORTS_FAILURE,
  GET_RESTAURANTS_START,
  GET_RESTAURANTS_SUCCESS,
  GET_RESTAURANTS_FAILURE,
  SET_LATLNG
} from "../actions";

const initialState = {
  data: [],
  passports: [],
  isLoading: false,
  restaurants: [],
  latlng: {},
  error: ""
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case POST_DATA_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ""
      };
    case POST_DATA_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case POST_REG_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case POST_REG_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: ""
      };
    case POST_REG_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case GET_PASSPORTS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_PASSPORTS_SUCCESS:
      return {
        ...state,
        passports: action.payload,
        isLoading: false,
        error: ""
      };

    case GET_PASSPORTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case GET_RESTAURANTS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case GET_RESTAURANTS_SUCCESS:
      return {
        ...state,
        restaurants: action.payload,
        isLoading: false,
        error: ""
      };

    case GET_RESTAURANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case SET_LATLNG:
      return {
        ...state,
        latlng: action.payload
      };
    default:
      return state;
  }
}

export default rootReducer;
