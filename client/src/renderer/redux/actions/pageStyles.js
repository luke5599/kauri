/** @format */

import { SET_PAGE_STYLES } from "./types";

export const setPageStyles = (key, data) => ({
  type: SET_PAGE_STYLES,
  key,
  data,
});
