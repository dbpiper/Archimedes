import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import React, { useState } from 'react';
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
  Menu: styled.ul<{ matches: number }>`
    width: ${totalWidth}px;
    height: ${props => props.matches * 50}px;
    background-color: ${STYLES.color.lightPrimary};
    border: ${props =>
      props.matches > 0 ? `1px solid ${STYLES.color.darkSecondary}` : '0'};
    border-radius: 5px;
    margin: 0;
    padding: 0;
  `,
  MenuItem: styled.div<{ index: number; lastItem: boolean }>`
    background-color: ${props =>
      // tslint:disable-next-line: no-magic-numbers
      props.index % 2 !== 0 ? '#f0f0ec' : STYLES.color.lightPrimary};
    height: 50px;
    width: ${totalWidth}px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 10px;
    width: ${totalWidth - 10}px;

    border-radius: ${props =>
      getMenuItemBorderRadius(props.index, props.lastItem)};
  `,
});

const defaultOptions = ['hello world!', 'FizzBuzz', 'abcd...', 'abra'];

export const SearchField1 = ({
  options,
  className,
  placeholder,
}: {
  options?: string[];
  className?: string;
  placeholder?: string;
}) => {
  const [matches, setMatches]: [string[], React.Dispatch<string[]>] = useState(
    [] as string[],
  );
  const handleInput = (event: React.FormEvent<HTMLInputElement>) => {
    const userInput = event.currentTarget.value;

    if (userInput.length > 0) {
      // we want to include anything that contains the user input
      const testRegex = new RegExp(`.*${userInput}.*`, 'i');

      setMatches(_.filter(options, option => testRegex.test(option)));
    } else {
      setMatches([] as string[]);
    }
  };

  return (
    <S.Container>
      <S.Input
        onInput={handleInput}
        className={className}
        placeholder={placeholder}
      />
      <S.SearchIcon icon={faSearch} size="lg" />
      <S.Menu matches={matches.length}>
        {matches.map((value, index) => {
          return (
            <S.MenuItem
              index={index}
              lastItem={index === matches.length - 1}
              key={index}
            >
              {value}
            </S.MenuItem>
          );
        })}
      </S.Menu>
    </S.Container>
  );
};

SearchField1.defaultProps = { options: defaultOptions };

// export const SearchField1 = ({
//   className,
//   placeholder,
// }: {
//   className?: string;
//   placeholder?: string;
// }) => (
//   <Select
//     components={{ Input: SearchField1Box }}
//     className={className}
//     placeholder={placeholder}
//     ariaLabel="Search"
//   />
// );

// const S = Object.freeze({
//   __proto__: null,
//   SearchField1: styled(Select)`
//     & .react-select__control {
//       color: purple;
//       background-color: pink;
//       width: 200px;

//       width: ${totalWidth - numSides * paddingSides}px;
//       height: ${totalHeight - numSides * paddingTopBottom}px;

//       /* Body1 styles */
//       font-family: ${STYLES.text.body1.fontFamily};
//       font-weight: ${STYLES.text.body1.fontWeight};
//       font-size: ${STYLES.text.body1.fontSize};
//       line-height: ${STYLES.text.body1.lineHeight};
//       letter-spacing: ${STYLES.text.body1.letterSpacing};
//       color: ${STYLES.color.darkPrimary};
//       outline: none;
//       border: 1px solid ${STYLES.color.darkSecondary};
//       border-radius: 5px;
//       /* padding: ${paddingTopBottom}px ${paddingSides}px ${paddingTopBottom}px
//         ${paddingSides}px; */
//     }

//     & .react-select__input {
//       height: ${totalHeight - numSides * paddingTopBottom}px;
//       padding: 0;
//     }

//     & .react-select__value-container {
//       height: ${totalHeight - numSides * paddingTopBottom}px;
//     }

//     & .react-select__placeholder {
//       /* the placeholder text should be slightly darker "Placeholder"
//          component in mockup
//        */
//       color: ${STYLES.color.darkSecondary};
//       /* fixes firefox quirk where firefox adds opacity to placeholders */
//       opacity: 1;
//       height: ${totalHeight - numSides * paddingTopBottom}px;
//     }

//     & .react-select__indicators {
//       visibility: hidden;
//     }
//   `,
// });

// export const SearchField1 = (props: object) => (
//   <S.SearchField1 classNamePrefix="react-select" {...props} />
//   // <Select {...props} />
// );
