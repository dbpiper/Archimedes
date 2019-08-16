import { faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import keycode from 'keycode';
import _ from 'lodash';
import React, { ReactNode, useEffect, useState } from 'react';

import { getMenuScrollAmount, getS } from './styles';

// the keycode module names for some keys
enum KeyNames {
  Down = 'down',
  Up = 'up',
  Enter = 'enter',
}

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
  // ---------------------------------------------------------------------------
  // Styles
  // ---------------------------------------------------------------------------
  const S = getS(small);
  const handleClick = () => {
    onMenuItemSelect(index);
  };

  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
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

export interface SelectProps {
  options: string[];
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  small?: boolean;
  dropdown?: boolean;
}

export const Select = ({
  options,
  className,
  placeholder,
  value,
  onChange,
  small,
  dropdown,
}: SelectProps) => {
  // ---------------------------------------------------------------------------
  // Dropdown vs SearchField logic
  // ---------------------------------------------------------------------------
  const _icon = dropdown ? faChevronDown : faSearch;
  const _small = (small || dropdown) as boolean;

  // ---------------------------------------------------------------------------
  // Styles
  // ---------------------------------------------------------------------------
  // need to let TS know that it _is_ actually defined...
  const S = getS(_small as boolean);

  // ---------------------------------------------------------------------------
  // Refs and Hooks
  // ---------------------------------------------------------------------------
  const inputRef: React.RefObject<HTMLInputElement> = React.createRef();
  const menuRef: React.RefObject<HTMLUListElement> = React.createRef();
  // an index of -1 indicates that _nothing_ is highlighted/selected
  // that is, we aren't using any of the auto-complete options
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [menuOpen, setMenuOpen] = useState(false);
  // this can _never_ be undefined because we have a default value for it
  // but TypeScript doesn't know this so we have to explicitly tell it
  const [inputValue, setInputValue] = useState(value as string);
  const [matches, setMatches]: [string[], React.Dispatch<string[]>] = useState(
    [] as string[],
  );
  const [menuItems, setMenuItems]: [
    string[],
    React.Dispatch<string[]>,
  ] = useState([] as string[]);

  useEffect(() => {
    setMenuItems(dropdown ? options : matches);
  });

  // ---------------------------------------------------------------------------
  // Helper functions
  // ---------------------------------------------------------------------------
  const changeValue = (newValue: string) => {
    setInputValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  const setHighlightedIndexAndScroll = (
    newHighlightedIndex: number,
    setByKey: boolean = true,
  ) => {
    setHighlightedIndex(newHighlightedIndex);
    if (setByKey && menuRef.current) {
      menuRef.current.scrollTo({
        top: getMenuScrollAmount(newHighlightedIndex, _small),
        left: 0,
        behavior: 'smooth',
      });
    }
  };

  const changeHighlightedIndex = (
    newHighlightedIndex: number,
    setByKey: boolean = true,
  ) => {
    if (newHighlightedIndex < -1) {
      setHighlightedIndexAndScroll(-1, setByKey);
    } else if (newHighlightedIndex > menuItems.length - 1) {
      setHighlightedIndexAndScroll(menuItems.length - 1, setByKey);
    } else {
      setHighlightedIndexAndScroll(newHighlightedIndex, setByKey);
    }
  };

  const toggleMenuOpen = () => {
    if (dropdown) {
      setMenuOpen(!menuOpen);

      if (!menuOpen) {
        changeHighlightedIndex(-1);
      }
    }
  };

  // ---------------------------------------------------------------------------
  // Event handlers
  // ---------------------------------------------------------------------------

  const handleInputContainerClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
      inputRef.current.focus();
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
    changeValue(userInput);

    if (userInput.length > 0) {
      // we want to include anything that contains the user input
      const testRegex = new RegExp(`.*${userInput}.*`, 'i');
      handleMatchesChange(_.filter(options, option => testRegex.test(option)));
    } else {
      handleMatchesChange([]);
    }
  };

  const handleMenuItemSelection = (index: number) => {
    // if we made a selection from the list then we want to keep it,
    // otherwise just keep our literal input; which may not be an item in the
    // auto-complete list
    if (index > -1) {
      changeValue(menuItems[index]);
    }
    setMenuOpen(false);
    if (inputRef && inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleMenuItemMouseOver = (index: number) => {
    changeHighlightedIndex(index, false);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyName = keycode(event.keyCode);

    switch (keyName) {
      case KeyNames.Down:
        changeHighlightedIndex(highlightedIndex + 1);
        break;
      case KeyNames.Up:
        changeHighlightedIndex(highlightedIndex - 1);
        break;
      case KeyNames.Enter:
        handleMenuItemSelection(highlightedIndex);
        break;
      default:
        break;
    }
  };

  const handleClearInputClick = () => {
    handleMatchesChange([]);
    changeValue('');
    changeHighlightedIndex(-1);
  };

  return (
    <>
      <S.SelectContainer>
        <S.InputContainer
          className={className}
          onKeyDown={handleKeyDown}
          dropdown={dropdown as boolean}
          onClick={handleInputContainerClick}
        />
        <S.Input
          ref={inputRef}
          readOnly={dropdown}
          dropdown={dropdown as boolean}
          type="text"
          onKeyDown={handleKeyDown}
          onInput={handleInput}
          value={inputValue}
          onClick={toggleMenuOpen}
          placeholder={placeholder}
        />
        <S.IconContainer onClick={toggleMenuOpen}>
          <FontAwesomeIcon icon={_icon} size="lg" />
        </S.IconContainer>
        {inputValue.length > 0 ? (
          <S.ClearInputButton onClick={handleClearInputClick}>
            ✕
          </S.ClearInputButton>
        ) : (
          <></>
        )}
      </S.SelectContainer>
      <S.Menu numItems={menuItems.length} open={menuOpen} ref={menuRef}>
        {menuItems.map((menuItemValue, index) => {
          return (
            <MenuItem
              index={index}
              lastItem={index === menuItems.length - 1}
              key={index}
              onMenuItemSelect={handleMenuItemSelection}
              onMenuItemMouseOver={handleMenuItemMouseOver}
              menuOpen={menuOpen}
              highlightedIndex={highlightedIndex}
              small={_small as boolean}
            >
              {menuItemValue}
            </MenuItem>
          );
        })}
      </S.Menu>
    </>
  );
};

Select.defaultProps = { value: '', small: false, dropdown: false };
