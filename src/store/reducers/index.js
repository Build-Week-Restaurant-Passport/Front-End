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
  ADD_PASSPORTS_START,
  ADD_PASSPORTS_SUCCESS,
  ADD_PASSPORTS_FAILURE,
  SET_LATLNG,
  SET_VISIT,
  DELETE_PASSPORT,
  DELETE_PASSPORT_SUCCESS,
  DELETE_PASSPORT_FAILURE
} from "../actions";

const initialState = {
  data: [],
  passports: [],
  myPassports: [],
  isLoading: false,
  restaurants: [],
  latlng: { lat: 13.874392, lng: 121.090756 },
  error: ""
  // visited: []
};

function rootReducer(state = initialState, action) {
  console.log("state from reducer", state);
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
        myPassports: action.payload,
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
      const arr = action.payload.map(el => {
        return { ...el, visited: false };
      });
      arr.map((el, idx) => {
        if (el.restaurant.id === localStorage.getItem(el.restaurant.id)) {
          el.visited = true;
        }
      });
      return {
        ...state,
        restaurants: arr,
        isLoading: false,
        error: ""
      };

    case GET_RESTAURANTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_PASSPORTS_START:
      return {
        ...state,
        isLoading: true,
        error: ""
      };
    case ADD_PASSPORTS_SUCCESS:
      return {
        ...state,
        myPassports: [...state.myPassports, action.payload],
        isLoading: false,
        error: ""
      };
    case ADD_PASSPORTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case SET_LATLNG:
      return {
        ...state,
        latlng: action.payload
      };
    case SET_VISIT:
      console.log("restaurants array", state.restaurants);
      const temp = { ...state };
      temp.restaurants.map((el, index) => {
        if (index === action.payload.index) {
          temp.restaurants[index].visited = !temp.restaurants[index].visited;
        }
      });
      console.log("temp", [...temp.restaurants]);
      return {
        ...state,
        restaurants: [...temp.restaurants]
      };
    case DELETE_PASSPORT:
      return {
        ...state,
        myPassports: state.myPassports.filter(
          ({ myPassports }) => !myPassports.id
        ),
        isLoading: true
      };
    case DELETE_PASSPORT_SUCCESS:
      return {
        ...state,
        myPassports: action.payload,
        error: action.payload,
        isLoading: false
      };
    case DELETE_PASSPORT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default rootReducer;
