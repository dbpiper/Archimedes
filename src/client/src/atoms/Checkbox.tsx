import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import STYLE from '../STYLE';
import { parseAnimationDuration } from '../util/animationDuration';
import {
  createBinaryAnimation,
  runBinaryAnimation,
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
  boxDark: {
    on: keyframes`
        0% {
          border-color: ${STYLE.color.darkSecondary};
          background-color: ${STYLE.color.darkSecondary};
        }

        100% {
          border-color: ${STYLE.color.primary};
          background-color: ${STYLE.color.primary};
        }
      `,
    off: keyframes`
        0% {
          border-color: ${STYLE.color.primary};
          background-color: ${STYLE.color.primary};
        }

        100% {
          border-color: ${STYLE.color.darkSecondary};
          background-color: ${STYLE.color.darkSecondary};
        }
      `,
  },
});

const Animation = Object.freeze({
  __proto__: null,
  boxLight: (checked: boolean, duration = parseAnimationDuration('100ms')) =>
    createBinaryAnimation({
      duration,
      keyframes: Keyframes.boxLight,
      initialState: checked ? Keyframes.boxLight.on : Keyframes.boxLight.off,
      // these are from the motion design
      // tslint:disable-next-line: no-magic-numbers
      cubicBezier: createCubicBezier(0.84, 0, 0.16, 1),
    }),
  boxDark: (checked: boolean, duration = parseAnimationDuration('133.33ms')) =>
    createBinaryAnimation({
      duration,
      keyframes: Keyframes.boxDark,
      initialState: checked ? Keyframes.boxDark.on : Keyframes.boxDark.off,
      // these are from the motion design
      // tslint:disable-next-line: no-magic-numbers
      cubicBezier: createCubicBezier(0.22, 1, 0.36, 1),
    }),
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
    display: grid;
    place-content: center;
    margin: 25px;
    width: 40px;
    height: 40px;
    user-select: none;

    :hover {
      cursor: pointer;
    }
  `,
  BoxDark: styled.div<{ clickCount: number; checked: boolean }>`
    position: absolute;
    z-index: 10;
    width: 20px;
    height: 20px;
    border-radius: 3px;
    border: 1.5px solid;
    border-color: ${STYLE.color.darkSecondary};
    background-color: ${STYLE.color.darkSecondary};
    ${props =>
      runBinaryAnimation(props.clickCount, Animation.boxDark(props.checked))};
  `,
  CheckmarkImage: styled.img`
    position: absolute;
    z-index: 13;
    width: 13px;
    height: 10px;

    /* clip-path: polygon(
      1.5px 1.5px,
      1.5px calc(100% - 1.5px),
      calc(100% - 1.5px) calc(100% - 1.5px),
      calc(100% - 1.5px) 1.5px
    ); */
  `,
  BoxLight: styled.div<{ clickCount: number; checked: boolean }>`
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
      runBinaryAnimation(props.clickCount, Animation.boxLight(props.checked))}
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
  const [checkedInternal, setCheckedInternal] = useState(props.checked);
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setCheckedInternal(!checkedInternal);
    setClickCount(clickCount + 1);
  };
  return (
    <sDynamic.CheckboxContainer
      className={props.className}
      onClick={handleClick}
    >
      <sStatic.HoverCircle />
      <sStatic.ActiveCircle />
      <sStatic.HiddenCheckbox
        checked={checkedInternal}
        onChange={handleClick}
      />
      <sStatic.BoxLight clickCount={clickCount} checked={props.checked} />
      <sStatic.BoxDark clickCount={clickCount} checked={props.checked} />
      <sStatic.CheckmarkImage src={Checkmark} />
    </sDynamic.CheckboxContainer>
  );
};

Checkbox.defaultProps = { checked: true };
