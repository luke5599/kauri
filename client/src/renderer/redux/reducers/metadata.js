/** @format */

import { SET_METADATA } from "../actionTypes";

const initialState = {
  title: "Let's Rethink Document Processing",
  authors: [
    "Sean Bailey",
    "Adam Crocker",
    "Prajna Sariputra",
    "Luke Ingram",
    "David Abraham",
  ],
  createdAt: "2019-08-01T12:59:15+11:00",
  updatedAt: "2019-08-01T12:59:15+11:00",
  editDuration: "P3Y6M4DT12H30M5S",
};

const metadataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_METADATA:
      if (action.key === "authors") {
        return { ...state, [action.key]: [...state.authors, action.data] };
      } else {
        return {
          ...state,
          [action.key]: action.data,
        };
      }
    default:
      return state;
  }
};

export default metadataReducer;
