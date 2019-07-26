import convert from 'color-convert';

/**
 * Finds the first matching Cypress wrapped element
 *
 * @param {string} elementSelector The jquery-style selector to use to find the
 * element
 * @param {string} classRegex The regular expression to use to filter matching
 * elements from the selected elements -- Essentially provides the ability
 * to extend the CSS selector to have the power of Regex.
 */
const findElementRegex = (elementSelector: string, classRegex: string) =>
  cy
    .get('div#root')
    .find(elementSelector)
    .filter((_index, element) => {
      const filteredElement = element.className.match(classRegex);
      if (!filteredElement) {
        return false;
      }
      return true;
    })
    .first();

/**
 * Finds the Cypress wrapped element of the Archimedes Header's
 * Title. This can then be used to perform tests on the Header.
 */
const findTitle = () => findElementRegex('span', 'Header.{2}Title.*');

// cypress color matching expects the color to be in rgb format rather than hex
const hexColorToRGBCssString = (color: string) => {
  const r = 0;
  const g = 1;
  const b = 2;
  const rgbColor = convert.hex.rgb(color.split('#').join(''));
  return `rgb(${rgbColor[r]}, ${rgbColor[g]}, ${rgbColor[b]})`;
};

export { findTitle, findElementRegex, hexColorToRGBCssString };
