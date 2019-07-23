import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import STYLE from '../STYLE';
import {
  AnimationDuration,
  animationDurationToString,
  parseAnimationDuration,
} from '../util/animationDuration';
import {
  createBinaryAnimation,
  currentBinaryAnimation,
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
          background-color: ${STYLE.color.darkSecondary};
        }

        100% {
          background-color: ${STYLE.color.primary};
        }
      `,
    off: keyframes`
        0% {
          background-color: ${STYLE.color.primary};
        }

        100% {
          background-color: ${STYLE.color.darkSecondary};
        }
      `,
  },
  checkmark: {
    on: keyframes`
      0% {
        /* completely hidden */
        clip-path: polygon(-2px -2px, -2px -2px, -2px 12px, -2px 12px);
      }
      25% {
        /* some of the left side is visible */
        clip-path: polygon(-2px -2px, 3px -2px, 3px 12px, -2px 12px);
        animation-timing-function: cubic-bezier(0.84, 0, 0.16, 1);
      }
      100% {
        /* completely visible */
        clip-path: polygon(-2px -2px, 15px -2px, 15px 12px, -2px 12px);
      }
    `,
    off: keyframes`
      0% {
        /* completely visible */
        clip-path: polygon(-2px -2px, 15px -2px, 15px 12px, -2px 12px);
      }
      25% {
        /* some of the left side is visible */
        clip-path: polygon(-2px -2px, 3px -2px, 3px 12px, -2px 12px);
        animation-timing-function: cubic-bezier(0.84, 0, 0.16, 1);
      }
      100% {
        /* completely hidden */
        clip-path: polygon(-2px -2px, -2px -2px, -2px 12px, -2px 12px);
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
  checkmark: (checked: boolean, duration = parseAnimationDuration('100ms')) =>
    createBinaryAnimation({
      duration,
      keyframes: Keyframes.checkmark,
      initialState: checked ? Keyframes.checkmark.on : Keyframes.checkmark.off,
      // these are from the motion design
      // tslint:disable-next-line: no-magic-numbers
      cubicBezier: createCubicBezier(0.17, 0.17, 0.83, 0.83),
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
  BoxDark: styled.div<{
    clickCount: number;
    checked: boolean;
    duration?: AnimationDuration;
  }>`
    position: absolute;
    z-index: 10;
    width: 21.5px;
    height: 21.5px;
    border-radius: 3px;
    background-color: ${STYLE.color.darkSecondary};

    will-change: background-color;
    ${props =>
      currentBinaryAnimation(
        props.clickCount,
        Animation.boxDark(props.checked, props.duration),
      ).animation};
  `,
  CheckmarkImage: styled.img<{
    clickCount: number;
    checked: boolean;
    duration?: AnimationDuration;
  }>`
    position: absolute;
    z-index: 13;
    width: 13px;
    height: 10px;
    display: grid;
    place-content: center;
    /* completely hidden */
    clip-path: polygon(-2px -2px, -2px -2px, -2px 12px, -2px 12px);
    will-change: clip-path, animation-timing-function;

    ${props =>
      currentBinaryAnimation(
        props.clickCount,
        Animation.checkmark(props.checked, props.duration),
      ).animation};
  `,
  BoxLight: styled.div<{
    clickCount: number;
    checked: boolean;
    duration?: AnimationDuration;
  }>`
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
      currentBinaryAnimation(
        props.clickCount,
        Animation.boxLight(props.checked, props.duration),
      ).animation}
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

export const Checkbox = (props: {
  className?: string;
  checked: boolean;
  animationDuration?: AnimationDuration;
}) => {
  const [checkedInternal, setCheckedInternal] = useState(props.checked);
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setCheckedInternal(!checkedInternal);
    setClickCount(clickCount + 1);
  };
  let boxDarkDuration;
  if (props.animationDuration) {
    const boxDarkMultiplier = 1.3333333333333333;
    const durationValue = parseFloat(
      animationDurationToString(props.animationDuration),
    );
    const durationUnit = props.animationDuration.replace(
      durationValue.toString(),
      '',
    );
    boxDarkDuration = parseAnimationDuration(
      `${durationValue * boxDarkMultiplier}${durationUnit}`,
    );
  }
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
      <sStatic.BoxLight
        clickCount={clickCount}
        checked={props.checked}
        duration={props.animationDuration}
      />
      <sStatic.BoxDark
        clickCount={clickCount}
        checked={props.checked}
        duration={boxDarkDuration}
      />
      <sStatic.CheckmarkImage
        checked={props.checked}
        clickCount={clickCount}
        src={Checkmark}
        duration={props.animationDuration}
      />
    </sDynamic.CheckboxContainer>
  );
};

Checkbox.defaultProps = { checked: false };
