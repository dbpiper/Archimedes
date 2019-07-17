import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import STYLE from '../STYLE';
import { parseAnimationDuration } from '../util/animationDuration';
import {
  createBinaryAnimation,
  runBinaryAnimationPaused,
} from '../util/animationHelpers';
import { createCubicBezier } from '../util/cubicBezier';

// tslint:disable-next-line: no-var-requires
const Checkmark = require('../assets/Checkmark.svg') as string;

const Keyframes = Object.freeze({
  __proto__: null,
  boxLight: {
    on: keyframes`
        0% {
          transform: scale(1, 1);
        }

        100% {
          transform: scale(0, 0);
        }
      `,
    off: keyframes`
        0% {
          transform: scale(0, 0);
        }

        100% {
          transform: scale(1, 1);
        }
      `,
  },
});

const Animation = Object.freeze({
  __proto__: null,
  boxLight: createBinaryAnimation(
    Keyframes.boxLight,
    parseAnimationDuration('100ms'),
    // these are from the motion design
    // tslint:disable-next-line: no-magic-numbers
    createCubicBezier(0.84, 0, 0.16, 1),
  ),
});

const sStatic = Object.freeze({
  __proto__: null,
  HiddenCheckbox: styled.input.attrs({ type: 'checkbox' })`
    /* Hide checkbox visually but remain accessible to screen readers.
     * Source: https://polished.js.org/docs/#hidevisually
     */
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
    z-index: 3;
  `,
  StyledCheckbox: styled.div`
    position: absolute;
    z-index: 5;
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid;
    border-color: ${STYLE.color.darkSecondary};
    background-color: ${STYLE.color.lightPrimary};
    transition: all 150ms;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
    }
  `,
  HoverCircle: styled.span`
    position: absolute;
    z-index: 0;
    background-color: ${STYLE.color.darkPrimary};
    visibility: hidden;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    opacity: 0.25;
  `,
  ActiveCircle: styled.span`
    position: absolute;
    z-index: 0;
    background-color: ${STYLE.color.darkPrimary};
    visibility: hidden;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    opacity: 0.25;
  `,
  CheckboxContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
    width: 40px;
    height: 40px;
    user-select: none;

    :hover {
      cursor: pointer;
    }
  `,
  BoxDark: styled.div`
    position: absolute;
    z-index: 10;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1.5px solid;
    border-color: ${STYLE.color.darkSecondary};
    background-color: ${STYLE.color.darkSecondary};
  `,
  CheckmarkImage: styled.img`
    position: absolute;
    z-index: 13;
    width: 13px;
    height: 10px;
  `,
  BoxLight: styled.div<{ hover: boolean; clickCount: number }>`
    position: absolute;
    display: grid;
    place-items: center;
    z-index: 11;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border-color: ${STYLE.color.lightPrimary};
    background-color: ${STYLE.color.lightPrimary};

    ${props =>
      runBinaryAnimationPaused(
        props.clickCount,
        Animation.boxLight,
      )} /* clip-path: polygon(
      1.5px 1.5px,
      1.5px calc(100% - 1.5px),
      calc(100% - 1.5px) calc(100% - 1.5px),
      calc(100% - 1.5px) 1.5px
    ); */
  `,
});

const sDynamic = Object.freeze({
  __proto__: null,
  CheckboxContainer: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 25px;
    width: 40px;
    height: 40px;
    user-select: none;

    :hover {
      cursor: pointer;
    }

    &:hover ${sStatic.HoverCircle} {
      visibility: visible;
    }
    &:active ${sStatic.ActiveCircle} {
      visibility: visible;
    }
  `,
});

export const Checkbox = (props: { className?: string; checked: boolean }) => {
  const [checked, setChecked] = useState(props.checked);
  const [hover, setHover] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setChecked(!checked);
    setClickCount(clickCount + 1);
  };
  const handleMouseOver = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  return (
    <sDynamic.CheckboxContainer
      className={props.className}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <sStatic.HoverCircle />
      <sStatic.ActiveCircle />
      <sStatic.HiddenCheckbox checked={checked} onChange={handleClick} />

      {/* <sStatic.StyledCheckbox>
        <img src={Checkmark} hidden={!checked} />
      </sStatic.StyledCheckbox> */}
      <sStatic.BoxLight hover={hover} clickCount={clickCount} />
      <sStatic.BoxDark />
      <sStatic.CheckmarkImage src={Checkmark} />
    </sDynamic.CheckboxContainer>
  );
};

Checkbox.defaultProps = { checked: true };
