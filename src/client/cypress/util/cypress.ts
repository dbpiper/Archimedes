import convert from 'color-convert';

export enum CssProperty {
  Transform = 'transform',
  BackgroundColor = 'background-color',
  Color = 'color',
}

export enum TriggerEvent {
  MouseDown = 'mousedown',
  MouseUp = 'mouseup',
  MouseOver = 'mouseover',
  Focus = 'focus',
  Click = 'click',
  PointerDown = 'pointerdown',
  PointerUp = 'pointerup',
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
 * @param property The CSS property to check has the correct value.
 * @param value The value that the property should have.
 * @param classRegex The Regular Express to use to select the class which the
 * desired element is a member of.
 * @param index The index of the element to select if there are more
 * than one that match the regex.
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

/**
 *
 * A convenience function to handle the common case of wanting to verify
 * that a property has the correct value before and after a click. This is
 * especially useful for animations, as it allows you to prevent
 * race-conditions.
 *
 * @param property The CSS property to check has the correct values.
 * @param valueBefore The value that the property should have before the click.
 * @param valueAfter The value that the property should have after the click.
 * @param classRegexProperty The Regular Express to use to select the class
 * which the desired element is a member of; where the element is the one that
 * you want to check has the correct property values.
 * @param classRegexClickElement The Regular Express to use to select the class
 * which the desired element is a member of; where the element is the one that
 * you want to click on. This argument is optional and if it is not provided
 * then the clicked element will be the same as the classRegexProperty element.
 * @param index The index of the element to select if there are more
 * than one that match the regex.
 */
const verifyCssPropertyAndClick = (
  property: CssProperty,
  valueBefore: string,
  valueAfter: string,
  classRegexProperty: RegExp,
  classRegexClickElement?: RegExp,
  index?: number,
) => {
  // we want to use the click element regex if it is provided, otherwise we fallback
  // and just use the same one as the property
  const _classRegexClickElement = classRegexClickElement
    ? classRegexClickElement
    : classRegexProperty;
  verifyCssProperty(property, valueBefore, classRegexProperty, index);
  findElementRegex(_classRegexClickElement).click();
  verifyCssProperty(property, valueAfter, classRegexProperty, index);
};

/**
 *
 * A convenience function to handle the common case of wanting to verify
 * that a property has the correct value before and after a focus. This is
 * especially useful for animations, as it allows you to prevent
 * race-conditions.
 *
 * @param property The CSS property to check has the correct values.
 * @param valueBefore The value that the property should have before the focus.
 * @param valueAfter The value that the property should have after the focus.
 * @param classRegexProperty The Regular Express to use to select the class
 * which the desired element is a member of; where the element is the one that
 * you want to check has the correct property values.
 * @param classRegexFocusElement The Regular Express to use to select the class
 * which the desired element is a member of; where the element is the one that
 * you want to focus on. This argument is optional and if it is not provided
 * then the focused element will be the same as the classRegexProperty element.
 * @param index The index of the element to select if there are more
 * than one that match the regex.
 */
const verifyCssPropertyAndFocus = (
  property: CssProperty,
  valueBefore: string,
  valueAfter: string,
  classRegexProperty: RegExp,
  classRegexFocusElement?: RegExp,
  index?: number,
) => {
  // we want to use the focus element regex if it is provided, otherwise we fallback
  // and just use the same one as the property
  const _classRegexFocusElement = classRegexFocusElement
    ? classRegexFocusElement
    : classRegexProperty;
  verifyCssProperty(property, valueBefore, classRegexProperty, index);
  findElementRegex(_classRegexFocusElement).focus();
  verifyCssProperty(property, valueAfter, classRegexProperty, index);
};

/**
 *
 * A convenience function to handle the common case of wanting to verify
 * that a property has the correct value before and after a trigger. This is
 * especially useful for animations, as it allows you to prevent
 * race-conditions.
 *
 * @param property The CSS property to check has the correct values.
 * @param valueBefore The value that the property should have before the trigger.
 * @param valueAfter The value that the property should have after the trigger.
 * @param classRegexProperty The Regular Express to use to select the class
 * which the desired element is a member of; where the element is the one that
 * you want to check has the correct property values.
 * @param classRegexTriggerElement The Regular Express to use to select the class
 * which the desired element is a member of; where the element is the one that
 * you want to trigger on. This argument is optional and if it is not provided
 * then the triggered element will be the same as the classRegexProperty element.
 * @param index The index of the element to select if there are more
 * than one that match the regex.
 */
const verifyCssPropertyAndTrigger = (
  property: CssProperty,
  triggerEvent: TriggerEvent,
  valueBefore: string,
  valueAfter: string,
  classRegexProperty: RegExp,
  classRegexTriggerElement?: RegExp,
  index?: number,
) => {
  // we want to use the trigger element regex if it is provided, otherwise we fallback
  // and just use the same one as the property
  const _classRegexTriggerElement = classRegexTriggerElement
    ? classRegexTriggerElement
    : classRegexProperty;
  verifyCssProperty(property, valueBefore, classRegexProperty, index);
  // findElementRegex(_classRegexTriggerElement).trigger(triggerEvent);
  findElementRegex(_classRegexTriggerElement).trigger(triggerEvent);
  findElementRegex(_classRegexTriggerElement).trigger('mouseover');
  findElementRegex(_classRegexTriggerElement).trigger('mousedown');
  verifyCssProperty(property, valueAfter, classRegexProperty, index);
};

export {
  findElementRegex,
  hexColorToRgbCssString,
  verifyCssProperty,
  verifyCssPropertyAndClick,
  verifyCssPropertyAndFocus,
  verifyCssPropertyAndTrigger,
};
