/** @format */

import { SET_STYLES } from "./types";

export const setStyles = (key, data) => ({
  type: SET_STYLES,
  key,
  data,
});
