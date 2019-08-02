import convert from 'color-convert';

export enum CssProperty {
  Transform = 'transform',
  BackgroundColor = 'background-color',
  Color = 'color',
}

/**
 * Finds the first matching Cypress wrapped element
 *
 * @param {RegExp} classRegex The regular expression to use to filter matching
 * elements from the selected elements -- Essentially provides the ability
 * to extend the CSS selector to have the power of Regex.
 * @param {number} index The index to select from the resulting set if there
 * are more than one. Will default to 0; i.e. select the first element in the
 * result set.
 */
const findElementRegex = (classRegex: RegExp, index: number = 0) =>
  cy
    .get('*')
    .filter((_index, element) => {
      if (element.className.match) {
        const filteredElement = element.className.match(classRegex);
        if (!filteredElement) {
          return false;
        }
        return true;
      }
      return false;
    })
    // essentially we're doing an array access like array[index]
    // where array is the elements that match our regex
    .filter((fIndex, _element) => {
      if (fIndex === index) {
        return true;
      }
      return false;
    });

// cypress color matching expects the color to be in rgb format rather than hex
const hexColorToRgbCssString = (color: string) => {
  const r = 0;
  const g = 1;
  const b = 2;
  const rgbColor = convert.hex.rgb(color.split('#').join(''));
  return `rgb(${rgbColor[r]}, ${rgbColor[g]}, ${rgbColor[b]})`;
};

/**
 *
 * Selects an element and ensures that it has the specified value of
 * a specified CSS property. This uses `findElementRegex` for selection
 * and the parameters dealing with it are exactly the same as the ones
 * it takes.
 *
 * This function is very useful in combination with Visual Regression
 * testing as it helps to ensure that there are no race conditions;
 * in other words that the state of the components are in the correct
 * place before any images are taken.
 *
 * @param property The CSS property to check has the correct value
 * @param value The value that the property should have
 * @param classRegex The Regular Express to use to select the class
 * @param index The index of the element to select if there are more
 * than one that match the regex
 */
const verifyCssProperty = (
  property: CssProperty,
  value: string,
  classRegex: RegExp,
  index?: number,
) => {
  switch (property) {
    case CssProperty.BackgroundColor:
    case CssProperty.Color:
      findElementRegex(classRegex, index).should(
        'have.css',
        property,
        hexColorToRgbCssString(value),
      );
      break;
    default:
      findElementRegex(classRegex, index).should('have.css', property, value);
      break;
  }
};

export { findElementRegex, hexColorToRgbCssString, verifyCssProperty };
