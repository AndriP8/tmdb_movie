import { SEARCH_MOVIE } from "../actionTypes/search";

const initialstate = {};

const searchReducer = (state = initialstate, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
