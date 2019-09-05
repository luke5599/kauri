/** @format */

import { combineReducers } from "redux";
import { SET_STYLES } from "../actionTypes";

export default combineReducers({
  allIds: allStyles,
  byId: stylesById,
});

function allStyles(state = [], action) {
  switch (action.type) {
    case SET_STYLES:
      return [...state, action.payload.id];
    default:
      return state;
  }
}

function stylesById(state = {}, action) {
  switch (action.type) {
    case SET_STYLES:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    default:
      return state;
  }
}
