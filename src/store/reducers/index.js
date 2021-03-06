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
  EDIT_CITY,
  EDIT_CITY_SUCCESS,
  EDIT_CITY_FAILURE,
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
  error: "",
  statuscode: ""
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
      console.log("payload from post register", action.payload);
      console.log("statuscode from state", state.statuscode);
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        error: "",
        statuscode: action.payload.status
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
      const temp = { ...state };
      temp.restaurants.map((el, index) => {
        if (index === action.payload.index) {
          temp.restaurants[index].visited = !temp.restaurants[index].visited;
        }
      });
      return {
        ...state,
        restaurants: [...temp.restaurants]
      };
    case DELETE_PASSPORT:
      return {
        ...state,
        error: "launch error",
        isLoading: true
      };
    case DELETE_PASSPORT_SUCCESS:
      console.log("Delete Reducer", action.payload.idx);
      return {
        ...state,
        myPassports: state.myPassports.filter(
          (el, index) =>
            state.myPassports[index] !== state.myPassports[action.payload]
        ),
        error: "",
        isLoading: false
      };
    case DELETE_PASSPORT_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case EDIT_CITY:
      return {
        ...state,
        error: "launch error",
        isLoading: true
      };
    case EDIT_CITY_SUCCESS:
      console.log("payload", action.payload);
      const edited = { ...state };
      edited.myPassports.map((el, idx) => {
        if (el.cityid === action.payload.id) {
          edited.myPassports[idx].cityname = action.payload.cityname;
        }
      });
      console.log("city names", edited.myPassports);
      console.log("city names", edited.myPassports.cityname);
      return {
        ...edited,
        error: "",
        isLoading: false
      };
    case EDIT_CITY_FAILURE:
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
