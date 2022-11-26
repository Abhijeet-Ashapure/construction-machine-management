import * as CONST from '../utils/Constants';

const initialState = {
  categories: [],
};

export default function categoriesReducer(state = initialState, action) {
  switch (action.type) {
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: [],
      };
      break;
    case "GET_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload
      };
      break;
    case "ADD_CATEGORIES_SUCCESS":
      return {
        ...state,
        categories: action.payload
      };
      break;
    default:
      return state;
  }
}