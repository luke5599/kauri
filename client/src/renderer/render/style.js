/** @format */

import { kebabize } from "../helpers/inflections";

/**
 * Render CSS style to KCSS style.
 * @param style A CSS styles map.
 */
export function toCSS(style) {
  return style;
}

/*
 * Render CSS from style reducer
 * @param style Reducer style object
 */
export function renderStyle(style) {
  const css = getStyles(style);
  return css;
}

/*
 * Convert object into css string
 * @param style Reducer style object
 */
function getStyles(style) {
  let text = "";
  Object.entries(style).map(([id, value]) => {
    text = `${text}.__editor__${id} { `;
    Object.entries(value.styles).map(([cssKey, cssValue]) => {
      cssKey = kebabize(cssKey);
      text = `${text}${cssKey}: ${cssValue}; `;
    });
    text = `${text}}`;
  });
  return text;
}
