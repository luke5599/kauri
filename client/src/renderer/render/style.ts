/** @format */

import { kebabize } from "../helpers/inflections";

export interface StyleMap {
  [property: string]: any;
}

/**
 * Render CSS style to KCSS style.
 * @param style A CSS styles map.
 */
export function toCSS(style: StyleMap): StyleMap {
  return style;
}

export function renderStyle(style: StyleMap): string {
  //Convert sytle reducer object to css string
  const css = ".__editor" + getStyles(style);

  //inject css to head style element of the DOM
  let styleElement: HTMLElement = document.querySelector("head > style");
  styleElement.textContent = css;

  return css;
}

export function getStyles(style: StyleMap) {
  let text = "";
  Object.entries(style).map(([id, value]) => {
    text = `${text}.__${id} { `;
    Object.entries(value.styles).map(([cssKey, cssValue]) => {
      cssKey = kebabize(cssKey);
      text = `${text}${cssKey}: ${cssValue}; `;
    });
    text = `${text}}`;
  });
  return text;
}
