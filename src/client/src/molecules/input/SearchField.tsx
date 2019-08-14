import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import keycode from 'keycode';
import _ from 'lodash';
import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';

import STYLES from '@src/STYLE';

// the box model adds the width/height to the padding, so in order
// to achieve the correct padding _and_ total width/height we need to
// subtract the padding from each to get the content width/height
const Sizes = Object.freeze({
  __proto__: null,
  input: {
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
});

// the keycode module names for some keys
enum KeyNames {
  Down = 'down',
  Up = 'up',
  Enter = 'enter',
}

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
  Input: styled.input`
    color: ${STYLES.color.darkPrimary};

    outline: none;
    border: 1px solid ${STYLES.color.darkSecondary};
    border-radius: 5px;

    &::placeholder {
      /* the placeholder text should be slightly darker "Placeholder"
         component in mockup
       */
      color: ${STYLES.color.darkSecondary};
      /* fixes firefox quirk where firefox adds opacity to placeholders */
      opacity: 1;
    }
  `,
  Menu: styled.ul<{ open: boolean; matches: number }>`
    background-color: ${STYLES.color.lightPrimary};
    border: ${props =>
      props.open ? `1px solid ${STYLES.color.darkSecondary}` : '0'};
    border-radius: 5px;
    margin: 0;
    padding: 0;
    display: absolute;
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
  Input: {
    Large: styled(sizedSBaseStyles.Input)`
      width: ${Sizes.input.large.totalWidth -
        Sizes.input.large.numSides * Sizes.input.large.paddingSides}px;
      height: ${Sizes.input.large.totalHeight -
        Sizes.input.large.numSides * Sizes.input.large.paddingTopBottom}px;

      /* Body1 styles */
      font-family: ${STYLES.text.body1.fontFamily};
      font-weight: ${STYLES.text.body1.fontWeight};
      font-size: ${STYLES.text.body1.fontSize};
      line-height: ${STYLES.text.body1.lineHeight};
      letter-spacing: ${STYLES.text.body1.letterSpacing};

      padding: ${Sizes.input.large.paddingTopBottom}px
        ${Sizes.input.large.paddingSides}px
        ${Sizes.input.large.paddingTopBottom}px
        ${Sizes.input.large.paddingSides}px;

      &::placeholder {
        /* Body1 styles */
        font-family: ${STYLES.text.body1.fontFamily};
        font-weight: ${STYLES.text.body1.fontWeight};
        font-size: ${STYLES.text.body1.fontSize};
        letter-spacing: ${STYLES.text.body1.letterSpacing};
      }
    `,
    Small: styled(sizedSBaseStyles.Input)`
      width: ${Sizes.input.small.totalWidth -
        Sizes.input.small.numSides * Sizes.input.small.paddingSides}px;
      height: ${Sizes.input.small.totalHeight -
        Sizes.input.small.numSides * Sizes.input.small.paddingTopBottom}px;

      /* Body2 styles */
      font-family: ${STYLES.text.body2.fontFamily};
      font-weight: ${STYLES.text.body2.fontWeight};
      font-size: ${STYLES.text.body2.fontSize};
      line-height: ${STYLES.text.body2.lineHeight};
      letter-spacing: ${STYLES.text.body2.letterSpacing};

      padding: ${Sizes.input.small.paddingTopBottom}px
        ${Sizes.input.small.paddingSides}px
        ${Sizes.input.small.paddingTopBottom}px
        ${Sizes.input.small.paddingSides}px;

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
    Large: styled(sizedSBaseStyles.Menu)<{ open: boolean; matches: number }>`
      width: ${Sizes.input.large.totalWidth}px;
      height: ${props =>
        props.open ? props.matches * Sizes.menuItem.large.height : 0}px;
    `,
    Small: styled(sizedSBaseStyles.Menu)<{ open: boolean; matches: number }>`
      width: ${Sizes.input.small.totalWidth}px;
      height: ${props =>
        props.open ? props.matches * Sizes.menuItem.small.height : 0}px;
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
      width: ${Sizes.input.large.totalWidth}px;
      padding-left: ${Sizes.menuItem.large.leftPadding}px;
      width: ${Sizes.input.large.totalWidth -
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
      width: ${Sizes.input.small.totalWidth}px;
      padding-left: ${Sizes.menuItem.small.leftPadding}px;
      width: ${Sizes.input.small.totalWidth -
        Sizes.menuItem.small.leftPadding}px;
    `,
  },
});

const S = Object.freeze({
  __proto__: null,
  SearchIcon: styled(FontAwesomeIcon)`
    display: absolute;
    margin-left: -35px;
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
    display: inline;
    margin-left: -50px;
    cursor: pointer;
    color: ${STYLES.color.error};

    /* Body1 styles */
    font-family: ${STYLES.text.body1.fontFamily};
    font-weight: ${STYLES.text.body1.fontWeight};
    font-size: ${STYLES.text.body1.fontSize};
    line-height: ${STYLES.text.body1.lineHeight};
    letter-spacing: ${STYLES.text.body1.letterSpacing};
  `,
});

const getSizedStyledComponents = (small: boolean) => {
  if (small) {
    return {
      Input: sizedS.Input.Small,
      Menu: sizedS.Menu.Small,
      MenuItem: sizedS.MenuItem.Small,
    };
  }

  return {
    Input: sizedS.Input.Large,
    Menu: sizedS.Menu.Large,
    MenuItem: sizedS.MenuItem.Large,
  };
};

const MenuItem = ({
  index,
  lastItem,
  onMenuItemSelect,
  onMenuItemMouseOver,
  menuOpen,
  highlightedIndex,
  children,
  small,
}: {
  index: number;
  lastItem: boolean;
  onMenuItemSelect: (index: number) => void;
  onMenuItemMouseOver: (index: number) => void;
  menuOpen: boolean;
  highlightedIndex: number;
  children: ReactNode;
  small: boolean;
}) => {
  const sizedStyledComponents = getSizedStyledComponents(small);
  const handleClick = () => {
    onMenuItemSelect(index);
  };

  const handleMouseOver = () => {
    onMenuItemMouseOver(index);
  };

  return menuOpen ? (
    <sizedStyledComponents.MenuItem
      index={index}
      lastItem={lastItem}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      highlighted={highlightedIndex === index}
    >
      {children}
    </sizedStyledComponents.MenuItem>
  ) : (
    <></>
  );
};

export const SearchField = ({
  options,
  className,
  placeholder,
  value,
  onChange,
  small,
}: {
  options?: string[];
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  small?: boolean;
}) => {
  // need to let TS know that it _is_ actually defined...
  const sizedStyledComponents = getSizedStyledComponents(small as boolean);
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // this can _never_ be undefined because we have a default value for it
  // but TypeScript doesn't know this so we have to explicitly tell it
  const [inputValue, setInputValue] = useState(value as string);
  const [matches, setMatches]: [string[], React.Dispatch<string[]>] = useState(
    [] as string[],
  );

  const handleValueChange = (newValue: string) => {
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const handleMatchesChange = (newMatches: string[]) => {
    setMatches(newMatches);

    if (newMatches.length > 0) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };

  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value;
    handleValueChange(userInput);

    if (userInput.length > 0) {
      // we want to include anything that contains the user input
      const testRegex = new RegExp(`.*${userInput}.*`, 'i');
      handleMatchesChange(_.filter(options, option => testRegex.test(option)));
    } else {
      handleMatchesChange([]);
    }
  };

  const handleMenuItemSelection = (index: number) => {
    handleValueChange(matches[index]);
    setMenuOpen(false);
    if (inputRef && inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleMenuItemMouseOver = (index: number) => {
    setHighlightedIndex(index);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyName = keycode(event.keyCode);

    switch (keyName) {
      case KeyNames.Down:
        setHighlightedIndex(highlightedIndex + 1);
        break;
      case KeyNames.Up:
        setHighlightedIndex(highlightedIndex - 1);
        break;
      case KeyNames.Enter:
        handleMenuItemSelection(highlightedIndex);
        break;
      default:
        break;
    }
  };

  const clearInput = () => {
    handleMatchesChange([]);
    handleValueChange('');
  };

  return (
    <>
      <sizedStyledComponents.Input
        onInput={handleInput}
        className={className}
        placeholder={placeholder}
        value={inputValue}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <S.SearchIcon icon={faSearch} size="lg" />
      {inputValue.length > 0 ? (
        <S.ClearInputButton onClick={clearInput}>🗙</S.ClearInputButton>
      ) : (
        <></>
      )}
      <sizedStyledComponents.Menu matches={matches.length} open={menuOpen}>
        {matches.map((menuItemValue, index) => {
          return (
            <MenuItem
              index={index}
              lastItem={index === matches.length - 1}
              key={index}
              onMenuItemSelect={handleMenuItemSelection}
              onMenuItemMouseOver={handleMenuItemMouseOver}
              menuOpen={menuOpen}
              highlightedIndex={highlightedIndex}
              small={small as boolean}
            >
              {menuItemValue}
            </MenuItem>
          );
        })}
      </sizedStyledComponents.Menu>
    </>
  );
};

SearchField.defaultProps = { value: '', small: false };
