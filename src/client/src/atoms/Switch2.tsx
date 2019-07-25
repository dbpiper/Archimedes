import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import STYLE from '../STYLE';
import {
  AnimationDuration,
  parseAnimationDuration,
} from '../util/animationDuration';
import {
  createBinaryAnimation,
  currentBinaryAnimation,
} from '../util/animationHelpers';
import { createCubicBezier } from '../util/cubicBezier';

const Keyframes = Object.freeze({
  __proto__: null,
  thumbContainer: {
    on: keyframes`
        0% {
          transform: translateX(0);
        }

        100% {
          transform: translateX(19px);
        }
      `,
    off: keyframes`
        0% {
          transform: translateX(19px);
        }

        100% {
          transform: translateX(0);
        }
      `,
  },
  track: {
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
});

const Animation = Object.freeze({
  __proto__: null,
  thumbContainer: (on: boolean, duration: AnimationDuration) =>
    createBinaryAnimation({
      duration,
      keyframes: Keyframes.thumbContainer,
      initialState: on
        ? Keyframes.thumbContainer.on
        : Keyframes.thumbContainer.off,
      // these are from the motion design
      // tslint:disable-next-line: no-magic-numbers
      cubicBezier: createCubicBezier(0.22, 1, 0.36, 1.5),
    }),
  track: (on: boolean, duration: AnimationDuration) =>
    createBinaryAnimation({
      duration,
      keyframes: Keyframes.track,
      initialState: on ? Keyframes.track.on : Keyframes.track.off,
      // these are from the motion design
      // tslint:disable-next-line: no-magic-numbers
      cubicBezier: createCubicBezier(0.22, 1, 0.36, 1),
    }),
});

interface TrackProps {
  on: boolean;
  clickCount: number;
  animationDuration: AnimationDuration;
}

interface ThumbContainerProps {
  on: boolean;
  clickCount: number;
  animationDuration: AnimationDuration;
}

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
  ThumbContainer: styled.div<ThumbContainerProps>`
    display: flex;
    position: absolute;
    width: 14px;
    height: 14px;
    align-items: center;

    will-change: transform;
    ${props =>
      currentBinaryAnimation(
        props.clickCount,
        Animation.thumbContainer(props.on, props.animationDuration),
      ).animation};
  `,
  Thumb: styled.svg`
    z-index: 3;
    position: relative;
    display: inline-block;
  `,
  HoverCircle: styled.span`
    position: absolute;
    z-index: 1;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    width: 28px;
    height: 28px;
    border-radius: 100%;
    transform: translate(-25%, 0);
    opacity: 0;

    will-change: opacity;
  `,
  ActiveCircle: styled.span`
    position: absolute;
    z-index: 2;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    opacity: 0.5;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    transform: translate(-25%, 0);
    opacity: 0;

    will-change: opacity;
  `,
});

const sDynamic = Object.freeze({
  Track: styled.button<TrackProps>`
    position: relative;
    display: inline-flex;
    align-items: center;
    padding: 4px;
    width: 40px;
    height: 22px;
    border-radius: 11px;
    border: none !important;
    outline: none !important;

    will-change: background-color, cursor;
    ${props =>
      currentBinaryAnimation(
        props.clickCount,
        Animation.track(props.on, props.animationDuration),
      ).animation};

    :hover {
      cursor: pointer;
    }

    &:hover ${sStatic.HoverCircle} {
      opacity: 0.25;
    }
    &:active ${sStatic.ActiveCircle} {
      opacity: 0.25;
    }
  `,
});

interface Switch2Props {
  animationDuration?: AnimationDuration;
  on: boolean;
  className?: string;
  onChange?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

/**
 *
 * @param props {Switch2Props} This component takes the animation
 *        durations as props, so that they can be set to '0s' for testing.
 *        Of course this also means that the animations can be adjusted
 *        as desired by the users.
 */
export const Switch2 = ({
  on,
  animationDuration = parseAnimationDuration('180ms'),
  onChange,
  className,
}: Switch2Props) => {
  const [onInternal, setOnInternal] = useState(on);
  const [clickCount, setClickCount] = useState(0);
  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    setOnInternal(!onInternal);
    setClickCount(clickCount + 1);
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <sDynamic.Track
      on={on}
      onClick={handleClick}
      clickCount={clickCount}
      animationDuration={animationDuration}
      className={className}
    >
      <sStatic.HiddenCheckbox checked={onInternal} />
      <sStatic.ThumbContainer
        on={on}
        clickCount={clickCount}
        animationDuration={animationDuration}
      >
        <sStatic.HoverCircle />
        <sStatic.ActiveCircle />
        <sStatic.Thumb
          viewBox="0 0 14 14"
          height="14px"
          width="14px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill={STYLE.color.onPrimary} />
        </sStatic.Thumb>
      </sStatic.ThumbContainer>
    </sDynamic.Track>
  );
};

Switch2.defaultProps = { on: false };

export { parseAnimationDuration };
