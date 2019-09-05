/** @format */

import stylesReducer from "./styles";
import * as types from "../actionTypes";

describe("style reducer", () => {
  it("should handle SET_STYLES", () => {
    expect(
      stylesReducer(
        { allIds: [], byId: {} },
        {
          type: types.SET_STYLES,
          payload: {
            id: "h1",
            display: "Heading 1",
            element: {
              type: "heading",
              level: 1,
            },
            styles: {
              color: "#333",
              fontsize: "2rem",
              spacing: "4rem 0 2rem",
            },
          },
        },
      ),
    ).toEqual({
      allIds: ["h1"],
      byId: {
        h1: {
          id: "h1",
          display: "Heading 1",
          element: {
            type: "heading",
            level: 1,
          },
          styles: {
            color: "#333",
            fontsize: "2rem",
            spacing: "4rem 0 2rem",
          },
        },
      },
    });
  });
});
