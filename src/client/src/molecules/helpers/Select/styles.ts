import styled from 'styled-components';

import STYLES from '@src/STYLE';

// the box model adds the width/height to the padding, so in order
// to achieve the correct padding _and_ total width/height we need to
// subtract the padding from each to get the content width/height
export const Sizes = Object.freeze({
  __proto__: null,
  inputContainer: {
    large: {
      totalWidth: 215,
      totalHeight: 49,
      paddingSides: 15,
      paddingTopBottom: 10,
      // we have a top and bottom as well as a left and right side
      // we use these two for calculations
      numSides: 2,
    },
    small: {
      totalWidth: 215,
      totalHeight: 41,
      paddingSides: 15,
      paddingTopBottom: 10,
      // we have a top and bottom as well as a left and right side
      // we use these two for calculations
      numSides: 2,
    },
  },
  input: {
    large: {
      width: 125,
      height: 29,
      marginLeft: 15,
      marginTop: 10,
    },
    small: {
      width: 125,
      height: 21,
      marginLeft: 15,
      marginTop: 10,
    },
  },
  menuItem: {
    large: {
      leftPadding: 10,
      height: 50,
    },
    small: {
      leftPadding: 10,
      height: 50,
    },
  },
  menu: {
    numberOfItems: 5,
  },
});

export const getMenuScrollAmount = (
  highlightedIndex: number,
  small: boolean,
) => {
  if (small) {
    return highlightedIndex * Sizes.menuItem.small.height;
  }

  return highlightedIndex * Sizes.menuItem.large.height;
};

const getMenuItemBorderRadius = (index: number, lastItem: boolean) => {
  if (index === 0 || lastItem) {
    if (index === 0) {
      if (lastItem) {
        // it is both the first and last item in the list...
        return '5px';
      }

      return '5px 5px 0 0';
    }

    return '0 0 5px 5px';
  }
  return '0';
};

const sizedSBaseStyles = Object.freeze({
  InputContainer: styled.div<{ dropdown: boolean }>`
    display: inline-flex;
    outline: none;
    border: 1px solid ${STYLES.color.darkSecondary};
    border-radius: 5px;
    cursor: ${props => (props.dropdown ? 'pointer' : 'text')};
  `,
  Input: styled.input<{ dropdown: boolean }>`
    display: inline-block;
    position: absolute;
    color: ${STYLES.color.darkPrimary};
    outline: none;
    border: 0;
    cursor: ${props => (props.dropdown ? 'pointer' : 'text')};
    left: 0;
    top: 0;

    &::placeholder {
      /* the placeholder text should be slightly darker "Placeholder"
         component in mockup
       */
      color: ${STYLES.color.darkSecondary};
      /* fixes firefox quirk where firefox adds opacity to placeholders */
      opacity: 1;
    }
  `,
  Menu: styled.ul<{
    open: boolean;
    numItems: number;
  }>`
    background-color: ${STYLES.color.lightPrimary};
    border: ${props =>
      props.open ? `1px solid ${STYLES.color.darkSecondary}` : '0'};
    border-radius: 5px;
    margin: 0;
    padding: 0;
    display: absolute;
    overflow-y: scroll;
    overflow-x: hidden;
  `,
  MenuItem: styled.div<{
    index: number;
    lastItem: boolean;
    highlighted: boolean;
  }>`
    color: ${props =>
      props.highlighted ? STYLES.color.onPrimary : STYLES.color.darkPrimary};

    background-color: ${props =>
      props.highlighted
        ? STYLES.color.primary
        : // tslint:disable-next-line: no-magic-numbers
        props.index % 2 !== 0
        ? STYLES.color.lightSecondary
        : STYLES.color.lightPrimary};
    display: flex;
    justify-content: left;
    align-items: center;

    border-radius: ${props =>
      getMenuItemBorderRadius(props.index, props.lastItem)};
  `,
});

const sizedS = Object.freeze({
  __proto__: null,
  InputContainer: {
    Large: styled(sizedSBaseStyles.InputContainer)`
      width: ${Sizes.inputContainer.large.totalWidth -
        Sizes.inputContainer.large.numSides *
          Sizes.inputContainer.large.paddingSides}px;
      height: ${Sizes.inputContainer.large.totalHeight -
        Sizes.inputContainer.large.numSides *
          Sizes.inputContainer.large.paddingTopBottom}px;

      padding: ${Sizes.inputContainer.large.paddingTopBottom}px
        ${Sizes.inputContainer.large.paddingSides}px
        ${Sizes.inputContainer.large.paddingTopBottom}px
        ${Sizes.inputContainer.large.paddingSides}px;
    `,
    Small: styled(sizedSBaseStyles.InputContainer)`
      width: ${Sizes.inputContainer.small.totalWidth -
        Sizes.inputContainer.small.numSides *
          Sizes.inputContainer.small.paddingSides}px;
      height: ${Sizes.inputContainer.small.totalHeight -
        Sizes.inputContainer.small.numSides *
          Sizes.inputContainer.small.paddingTopBottom}px;

      padding: ${Sizes.inputContainer.small.paddingTopBottom}px
        ${Sizes.inputContainer.small.paddingSides}px
        ${Sizes.inputContainer.small.paddingTopBottom}px
        ${Sizes.inputContainer.small.paddingSides}px;
    `,
  },
  Input: {
    Large: styled(sizedSBaseStyles.Input)`
      width: ${Sizes.input.large.width}px;
      height: ${Sizes.input.large.height}px;
      margin-left: ${Sizes.input.large.marginLeft}px;
      margin-top: ${Sizes.input.large.marginTop}px;

      /* Body1 styles */
      font-family: ${STYLES.text.body1.fontFamily};
      font-weight: ${STYLES.text.body1.fontWeight};
      font-size: ${STYLES.text.body1.fontSize};
      line-height: ${STYLES.text.body1.lineHeight};
      letter-spacing: ${STYLES.text.body1.letterSpacing};

      &::placeholder {
        /* Body1 styles */
        font-family: ${STYLES.text.body1.fontFamily};
        font-weight: ${STYLES.text.body1.fontWeight};
        font-size: ${STYLES.text.body1.fontSize};
        letter-spacing: ${STYLES.text.body1.letterSpacing};
      }
    `,
    Small: styled(sizedSBaseStyles.Input)`
      width: ${Sizes.input.small.width}px;
      height: ${Sizes.input.small.height}px;
      margin-left: ${Sizes.input.small.marginLeft}px;
      margin-top: ${Sizes.input.small.marginTop}px;

      /* Body2 styles */
      font-family: ${STYLES.text.body2.fontFamily};
      font-weight: ${STYLES.text.body2.fontWeight};
      font-size: ${STYLES.text.body2.fontSize};
      line-height: ${STYLES.text.body2.lineHeight};
      letter-spacing: ${STYLES.text.body2.letterSpacing};

      &::placeholder {
        /* Body1 styles */
        font-family: ${STYLES.text.body2.fontFamily};
        font-weight: ${STYLES.text.body2.fontWeight};
        font-size: ${STYLES.text.body2.fontSize};
        letter-spacing: ${STYLES.text.body2.letterSpacing};
      }
    `,
  },
  Menu: {
    Large: styled(sizedSBaseStyles.Menu)<{
      open: boolean;
      numItems: number;
    }>`
      width: ${Sizes.inputContainer.large.totalWidth}px;
      height: ${props =>
        props.open
          ? (props.numItems < Sizes.menu.numberOfItems
              ? props.numItems
              : Sizes.menu.numberOfItems) * Sizes.menuItem.large.height
          : 0}px;
    `,
    Small: styled(sizedSBaseStyles.Menu)<{
      open: boolean;
      numItems: number;
    }>`
      width: ${Sizes.inputContainer.small.totalWidth}px;
      height: ${props =>
        props.open
          ? (props.numItems < Sizes.menu.numberOfItems
              ? props.numItems
              : Sizes.menu.numberOfItems) * Sizes.menuItem.small.height
          : 0}px;
    `,
  },
  MenuItem: {
    Large: styled(sizedSBaseStyles.MenuItem)<{
      index: number;
      lastItem: boolean;
      highlighted: boolean;
    }>`
      /* Body1 styles */
      font-family: ${STYLES.text.body1.fontFamily};
      font-weight: ${STYLES.text.body1.fontWeight};
      font-size: ${STYLES.text.body1.fontSize};
      line-height: ${STYLES.text.body1.lineHeight};
      letter-spacing: ${STYLES.text.body1.letterSpacing};

      height: ${Sizes.menuItem.large.height}px;
      width: ${Sizes.inputContainer.large.totalWidth}px;
      padding-left: ${Sizes.menuItem.large.leftPadding}px;
      width: ${Sizes.inputContainer.large.totalWidth -
        Sizes.menuItem.large.leftPadding}px;
    `,
    Small: styled(sizedSBaseStyles.MenuItem)<{
      index: number;
      lastItem: boolean;
      highlighted: boolean;
    }>`
      /* Body2 styles */
      font-family: ${STYLES.text.body2.fontFamily};
      font-weight: ${STYLES.text.body2.fontWeight};
      font-size: ${STYLES.text.body2.fontSize};
      line-height: ${STYLES.text.body2.lineHeight};
      letter-spacing: ${STYLES.text.body2.letterSpacing};

      height: ${Sizes.menuItem.small.height}px;
      width: ${Sizes.inputContainer.small.totalWidth}px;
      padding-left: ${Sizes.menuItem.small.leftPadding}px;
      width: ${Sizes.inputContainer.small.totalWidth -
        Sizes.menuItem.small.leftPadding}px;
    `,
  },
});

const _S = Object.freeze({
  __proto__: null,
  SelectContainer: styled.div`
    display: inline-flex;
    justify-content: right;
    align-content: center;
  `,
  IconContainer: styled.button`
    /* disable all default button styling */
    padding: 0;
    border: 0;
    background: none;
    background-color: none;
    display: flex;
    place-content: center;
    align-items: center;
    outline: none !important;
    appearance: none;

    margin-left: -35px;
    cursor: pointer;

    &:hover {
      color: ${STYLES.color.darkSecondary};
    }

    &:active {
      color: ${STYLES.color.darkSecondaryLight};
    }
  `,
  ClearInputButton: styled.button`
    border: 0;
    background: none;
    background-color: none;
    place-content: center;
    outline: none !important;
    appearance: none;
    margin: 0;
    padding: 0;
    display: inline-block;
    cursor: pointer;
    color: ${STYLES.color.error};

    /* Body1 styles */
    font-family: ${STYLES.text.body1.fontFamily};
    font-weight: ${STYLES.text.body1.fontWeight};
    letter-spacing: ${STYLES.text.body1.letterSpacing};

    /* this is effectively an icon, so we need it to be larger than normal text */
    font-size: ${STYLES.text.h4.fontSize};

    /* micro adjustments to the positioning:
       - move it left so that it is on top of the input, to the left of the icon
       - move it up a bit so that it "looks" centered with the icon
    */
    margin-left: -55px;
    margin-top: -2.5px;
  `,
});

const getSizedStyledComponents = (small: boolean) => {
  if (small) {
    return {
      Input: sizedS.Input.Small,
      InputContainer: sizedS.InputContainer.Small,
      Menu: sizedS.Menu.Small,
      MenuItem: sizedS.MenuItem.Small,
    };
  }

  return {
    Input: sizedS.Input.Large,
    InputContainer: sizedS.InputContainer.Large,
    Menu: sizedS.Menu.Large,
    MenuItem: sizedS.MenuItem.Large,
  };
};

export const getS = (small: boolean) => ({
  ..._S,
  ...getSizedStyledComponents(small),
});
