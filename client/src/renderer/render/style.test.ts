/** @format */

import { getStyles } from "./style";

describe("Convert object to css string using getStyles", () => {
  it("Convert object to css string", () => {
    const style = {
      body: {
        display: "Body Text",
        styles: {
          fontFamily: "Inter, sans-serif",
        },
      },
      h1: {
        styles: {
          color: "#111",
          padding: "4em 0 1em",
        },
      },
    };

    const expected =
      ".__body { font-family: Inter, sans-serif; }" +
      ".__h1 { color: #111; padding: 4em 0 1em; }";

    expect(getStyles(style)).toEqual(expected);
  });
});

function cssLooklike(actual: string, expected: string) {
  const regex = /\s/g;
  actual = actual.replace(regex, "");
  expected = expected.replace(regex, "");
  expect(actual).toEqual(expected);
  /*if ( actual !== expected ) {
    throw `CSS String does not match.\nActual: ${actual} \nExpected: ${expected}`;
  }  */
}

/*
  const actual = `
      .__body {
        font-family: Inter, sans-serif;
      }
      .__h1 {
        color: #111;
        padding: 4em 0 1em;
      }
    `;
    
    //cssLooklike(actual, expected);
    */
