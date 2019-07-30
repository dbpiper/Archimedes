import convert from 'color-convert';

/**
 * Finds the first matching Cypress wrapped element
 *
 * @param {RegExp} classRegex The regular expression to use to filter matching
 * elements from the selected elements -- Essentially provides the ability
 * to extend the CSS selector to have the power of Regex.
 */
const findElementRegex = (classRegex: RegExp) =>
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
    .first();

// cypress color matching expects the color to be in rgb format rather than hex
const hexColorToRgbCssString = (color: string) => {
  const r = 0;
  const g = 1;
  const b = 2;
  const rgbColor = convert.hex.rgb(color.split('#').join(''));
  return `rgb(${rgbColor[r]}, ${rgbColor[g]}, ${rgbColor[b]})`;
};

/**
 * Checks that the background-color CSS property is the correct value and
 * then compares the visual snapshot to verify that the visual appearance is
 * correct; Visual Regression tests it.
 *
 * The reason for all of these checks is to avoid race-conditions, since if we
 * get to the point where there is a correct value then we are done with the
 * animation. Otherwise, we would never know for certain that the animation was
 * done.
 *
 * @param bgColor The hex string of the expected color of the background.
 * @param bgColorElementClassRegex The regex used to select the element, based
 * on class.
 */
const verifyBgColor = (bgColor: string, bgColorElementClassRegex: RegExp) => {
  findElementRegex(bgColorElementClassRegex).should(
    'have.css',
    'background-color',
    hexColorToRgbCssString(bgColor),
  );
  cy.matchImageSnapshot();
};

/**
 *
 * Checks that the background-color CSS property is the correct value, clicks,
 * then waits for the animation to finish, by ensuring that the desired value
 * is reached and then compares the visual snapshot
 * to verify that the visual appearance is correct; Visual Regression tests it.
 *
 * The reason for all of these checks is to avoid race-conditions, since if we
 * get to the point where there is a correct value then we are done with the
 * animation. Otherwise, we would never know for certain that the animation was
 * done.
 *
 * @param beforeBgColor The hex string of the expected color of the background
 * before the click.
 * @param afterBgColor The hex string of the expected color of the background
 * after the click.
 * @param bgColorElementClassRegex The regex used to select the element which
 * should have a different background color, based on class.
 * @param clickElementClassRegex The regex used to select the element to click,
 * based on class.
 */
const clickAndVerifyBgColor = (
  beforeBgColor: string,
  afterBgColor: string,
  bgColorElementClassRegex: RegExp,
  clickElementClassRegex?: RegExp,
) => {
  findElementRegex(bgColorElementClassRegex).should(
    'have.css',
    'background-color',
    hexColorToRgbCssString(beforeBgColor),
  );
  if (clickElementClassRegex) {
    findElementRegex(clickElementClassRegex).click();
  } else {
    findElementRegex(bgColorElementClassRegex).click();
  }
  findElementRegex(bgColorElementClassRegex).should(
    'have.css',
    'background-color',
    hexColorToRgbCssString(afterBgColor),
  );

  cy.matchImageSnapshot();
};

/**
 *
 * Checks that the transform CSS property is the correct value, clicks,
 * then waits for the animation to finish by ensuring that the desired value
 * is reached and then compares the visual snapshot
 * to verify that the visual appearance is correct; Visual Regression tests it.
 *
 * The reason for all of these checks is to avoid race-conditions, since if we
 * get to the point where there is a correct value then we are done with the
 * animation. Otherwise, we would never know for certain that the animation was
 * done.
 *
 * @param beforeBgColor The hex string of the expected color of the background
 * before the click.
 * @param afterBgColor The hex string of the expected color of the background
 * after the click.
 * @param bgColorElementClassRegex The regex used to select the element which
 * should have a different background color, based on class.
 * @param clickElementClassRegex The regex used to select the element to click,
 * based on class.
 */
const clickAndVerifyTransform = (
  beforeTransform: string,
  afterTransform: string,
  transformElementClassRegex: RegExp,
  clickElementClassRegex?: RegExp,
) => {
  findElementRegex(transformElementClassRegex).should(
    'have.css',
    'transform',
    beforeTransform,
  );
  if (clickElementClassRegex) {
    findElementRegex(clickElementClassRegex).click();
  } else {
    findElementRegex(transformElementClassRegex).click();
  }
  findElementRegex(transformElementClassRegex).should(
    'have.css',
    'transform',
    afterTransform,
  );

  cy.matchImageSnapshot();
};

export {
  findElementRegex,
  hexColorToRgbCssString,
  verifyBgColor,
  clickAndVerifyBgColor,
  clickAndVerifyTransform,
};
