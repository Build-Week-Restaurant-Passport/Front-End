import {
  POST_DATA_START,
  POST_DATA_SUCCESS,
  POST_DATA_FAILURE,
  POST_REG_START,
  POST_REG_SUCCESS,
  POST_REG_FAILURE,
  GET_PASSPORTS_START,
  GET_PASSPORTS_SUCCESS,
  GET_PASSPORTS_FAILURE
} from "../actions";

const initialState = {
  data: [],
  passports: [],
  isLoading: false,
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
    default:
      return state;
  }
}

export default rootReducer;
