import {
  ADD_TO_FAVOURITE_REQUEST,
  ADD_TO_FAVOURITE_SUCCESS,
  ADD_TO_FAVOURITE_FAILURE,
  REMOVE_FROM_FAVOURITE_REQUEST,
  REMOVE_FROM_FAVOURITE_SUCCESS,
  REMOVE_FROM_FAVOURITE_FAILURE,
} from "../actions";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITE_REQUEST:
    case REMOVE_FROM_FAVOURITE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case ADD_TO_FAVOURITE_SUCCESS:
      return {
        ...state,
        list: [...state.list, action.payload],
        loading: false,
        error: null,
      };
    case REMOVE_FROM_FAVOURITE_SUCCESS:
      return {
        ...state,
        list: state.list.filter((fav) => fav !== action.payload),
        loading: false,
        error: null,
      };
    case ADD_TO_FAVOURITE_FAILURE:
    case REMOVE_FROM_FAVOURITE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default favouriteReducer;
