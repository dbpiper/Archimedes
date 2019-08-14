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
const totalWidth = 215;
const totalHeight = 49;
const paddingSides = 15;
const paddingTopBottom = 10;
// we have a top and bottom as well as a left and right side
// we use these two for calculations
const numSides = 2;

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

const menuItemLeftPadding = 10;
const menuItemHeight = 50;

const S = Object.freeze({
  __proto__: null,
  Container: styled.div``,
  Input: styled.input`
    width: ${totalWidth - numSides * paddingSides}px;
    height: ${totalHeight - numSides * paddingTopBottom}px;

    /* Body1 styles */
    font-family: ${STYLES.text.body1.fontFamily};
    font-weight: ${STYLES.text.body1.fontWeight};
    font-size: ${STYLES.text.body1.fontSize};
    line-height: ${STYLES.text.body1.lineHeight};
    letter-spacing: ${STYLES.text.body1.letterSpacing};
    color: ${STYLES.color.darkPrimary};

    outline: none;
    border: 1px solid ${STYLES.color.darkSecondary};
    border-radius: 5px;
    padding: ${paddingTopBottom}px ${paddingSides}px ${paddingTopBottom}px
      ${paddingSides}px;

    &::placeholder {
      /* Body1 styles */
      font-family: ${STYLES.text.body1.fontFamily};
      font-weight: ${STYLES.text.body1.fontWeight};
      font-size: ${STYLES.text.body1.fontSize};
      letter-spacing: ${STYLES.text.body1.letterSpacing};

      /* the placeholder text should be slightly darker "Placeholder"
         component in mockup
       */
      color: ${STYLES.color.darkSecondary};
      /* fixes firefox quirk where firefox adds opacity to placeholders */
      opacity: 1;
    }
  `,
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
  Menu: styled.ul<{ open: boolean; matches: number }>`
    width: ${totalWidth}px;
    height: ${props => (props.open ? props.matches * menuItemHeight : 0)}px;
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
    /* Body1 styles */
    font-family: ${STYLES.text.body1.fontFamily};
    font-weight: ${STYLES.text.body1.fontWeight};
    font-size: ${STYLES.text.body1.fontSize};
    line-height: ${STYLES.text.body1.lineHeight};
    letter-spacing: ${STYLES.text.body1.letterSpacing};
    color: ${props =>
      props.highlighted ? STYLES.color.onPrimary : STYLES.color.darkPrimary};

    background-color: ${props =>
      props.highlighted
        ? STYLES.color.primary
        : // tslint:disable-next-line: no-magic-numbers
        props.index % 2 !== 0
        ? STYLES.color.lightSecondary
        : STYLES.color.lightPrimary};
    height: 50px;
    width: ${totalWidth}px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: ${menuItemLeftPadding}px;
    width: ${totalWidth - menuItemLeftPadding}px;

    border-radius: ${props =>
      getMenuItemBorderRadius(props.index, props.lastItem)};
  `,
});

const MenuItem = ({
  index,
  lastItem,
  onMenuItemSelect,
  onMenuItemMouseOver,
  menuOpen,
  highlightedIndex,
  children,
}: {
  index: number;
  lastItem: boolean;
  onMenuItemSelect: (index: number) => void;
  onMenuItemMouseOver: (index: number) => void;
  menuOpen: boolean;
  highlightedIndex: number;
  children: ReactNode;
}) => {
  const handleClick = () => {
    onMenuItemSelect(index);
  };

  const handleMouseOver = () => {
    onMenuItemMouseOver(index);
  };

  return menuOpen ? (
    <S.MenuItem
      index={index}
      lastItem={lastItem}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      highlighted={highlightedIndex === index}
    >
      {children}
    </S.MenuItem>
  ) : (
    <></>
  );
};

export const SearchField1 = ({
  options,
  className,
  placeholder,
  value,
  onChange,
}: {
  options?: string[];
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}) => {
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
    <S.Container>
      <S.Input
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
      <S.Menu matches={matches.length} open={menuOpen}>
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
            >
              {menuItemValue}
            </MenuItem>
          );
        })}
      </S.Menu>
    </S.Container>
  );
};

SearchField1.defaultProps = { value: '' };
