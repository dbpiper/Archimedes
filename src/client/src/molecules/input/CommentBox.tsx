import React from 'react';
import styled from 'styled-components';

import STYLES from '@src/STYLE';

// the box model adds the width/height to the padding, so in order
// to achieve the correct padding _and_ total width/height we need to
// subtract the padding from each to get the content width/height
const totalWidth = 434;
const totalHeight = 84;
const paddingSides = 15;
const paddingTopBottom = 10;
// we have a top and bottom as well as a left and right side
// we use these two for calculations
const numSides = 2;

const S = Object.freeze({
  __proto__: null,
  CommentBox: styled.textarea`
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
});

export const CommentBox = ({ className }: { className?: string }) => (
  <S.CommentBox
    className={className}
    placeholder="Comment"
    autoComplete="off"
  />
);
