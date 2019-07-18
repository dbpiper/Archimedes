import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import STYLE from '../STYLE';
import {
  AnimationDuration,
  parseAnimationDuration,
} from '../util/animationDuration';
import {
  createBinaryAnimation,
  runBinaryAnimation,
} from '../util/animationHelpers';
import { createCubicBezier } from '../util/cubicBezier';

const Keyframes = Object.freeze({
  __proto__: null,
  thumbContainer: {
    on: keyframes`
        0% {
          left: 6px;
        }

        100% {
          left: 33px;
        }
      `,
    off: keyframes`
        0% {
          right: 6px;
        }

        100% {
          right: 33px;
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
  thumbContainer: (duration: AnimationDuration) =>
    createBinaryAnimation({
      duration,
      keyframes: Keyframes.thumbContainer,
      initialState: Keyframes.thumbContainer.off,
      // these are from the motion design
      // tslint:disable-next-line: no-magic-numbers
      cubicBezier: createCubicBezier(0.22, 1, 0.36, 1.5),
    }),
  track: (duration: AnimationDuration) =>
    createBinaryAnimation({
      duration,
      keyframes: Keyframes.track,
      initialState: Keyframes.track.off,
      // these are from the motion design
      // tslint:disable-next-line: no-magic-numbers
      cubicBezier: createCubicBezier(0.22, 1, 0.36, 1),
    }),
});

interface TrackProps {
  click: boolean;
  clickCount: number;
  animationDuration: AnimationDuration;
}

interface ThumbContainerProps {
  click: boolean;
  clickCount: number;
  animationDuration: AnimationDuration;
}

const sStatic = Object.freeze({
  __proto__: null,
  ThumbContainer: styled.div<ThumbContainerProps>`
    display: flex;
    position: absolute;
    width: 21px;
    height: 21px;
    ${props =>
      runBinaryAnimation(
        props.clickCount,
        Animation.thumbContainer(props.animationDuration),
      )};
    align-items: center;
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
    width: 42px;
    height: 42px;
    border-radius: 100%;
    transform: translate(-25%, 0);
    opacity: 0;
  `,
  ActiveCircle: styled.span`
    position: absolute;
    z-index: 2;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    opacity: 0.5;
    width: 42px;
    height: 42px;
    border-radius: 100%;
    transform: translate(-25%, 0);
    opacity: 0;
  `,
});

const sDynamic = Object.freeze({
  Track: styled.button<TrackProps>`
    position: relative;
    display: flex;
    align-items: center;
    padding: 6px;
    width: 60px;
    height: 33px;
    background-color: ${props =>
      props.click ? STYLE.color.primary : STYLE.color.darkSecondary};
    border-radius: 16.5px;
    border: none !important;
    outline: none !important;
    ${props =>
      runBinaryAnimation(
        props.clickCount,
        Animation.track(props.animationDuration),
      )};

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

interface Switch1Props {
  clickAnimationDuration?: AnimationDuration;
}

/**
 *
 * @param props {Switch1Props} This component takes the animation
 *        durations as props, so that they can be set to '0s' for testing.
 *        Of course this also means that the animations can be adjusted
 *        as desired by the users.
 */
export const Switch1 = ({
  clickAnimationDuration = parseAnimationDuration('333.3ms'),
}: Switch1Props) => {
  const [click, setClick] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const handleClick = () => {
    setClick(!click);
    setClickCount(clickCount + 1);
  };

  return (
    <sDynamic.Track
      onClick={handleClick}
      click={click}
      clickCount={clickCount}
      animationDuration={clickAnimationDuration}
    >
      <sStatic.ThumbContainer
        click={click}
        clickCount={clickCount}
        animationDuration={clickAnimationDuration}
      >
        <sStatic.HoverCircle />
        <sStatic.ActiveCircle />
        <sStatic.Thumb
          viewBox="0 0 21 21"
          height="21px"
          width="21px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10.5" cy="10.5" r="10.5" fill={STYLE.color.onPrimary} />
        </sStatic.Thumb>
      </sStatic.ThumbContainer>
    </sDynamic.Track>
  );
};

export { parseAnimationDuration };
