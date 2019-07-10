import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import STYLE from '../STYLE';
import {
  AnimationDuration,
  animationDurationToString,
  parseAnimationDuration,
} from '../util/animationDuration';

const Keyframes = Object.freeze({
  __proto__: null,
  hoverCircle: keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.25;
    }
  `,
  activeCircle: keyframes`
    0% {
      opacity: 0;
    }

    100% {
      opacity: 0.25;
    }
  `,
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
          left: 33px;
        }

        100% {
          left: 6px;
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
  hoverCircle: css<{ animationDuration: AnimationDuration }>`
    animation: ${Keyframes.hoverCircle}
      ${props => animationDurationToString(props.animationDuration)} forwards
      cubic-bezier(0.22, 1, 0.36, 1);
  `,
  activeCircle: css<{ animationDuration: AnimationDuration }>`
    animation: ${Keyframes.activeCircle}
      ${props => animationDurationToString(props.animationDuration)} forwards
      cubic-bezier(0.22, 1, 0.36, 1);
  `,
  thumbContainer: {
    on: css<{ animationDuration: AnimationDuration }>`
      animation: ${Keyframes.thumbContainer.on}
        ${props => animationDurationToString(props.animationDuration)} forwards
        cubic-bezier(0.22, 1, 0.36, 1.5);
    `,
    off: css<{ animationDuration: AnimationDuration }>`
      animation: ${Keyframes.thumbContainer.off}
        ${props => animationDurationToString(props.animationDuration)} forwards
        cubic-bezier(0.22, 1, 0.36, 1.5);
    `,
  },
  track: {
    on: css<{ animationDuration: AnimationDuration }>`
      animation: ${Keyframes.track.on}
        ${props => animationDurationToString(props.animationDuration)} forwards
        cubic-bezier(0.22, 1, 0.36, 1);
    `,
    off: css<{ animationDuration: AnimationDuration }>`
      animation: ${Keyframes.track.off}
        ${props => animationDurationToString(props.animationDuration)} forwards
        cubic-bezier(0.22, 1, 0.36, 1);
    `,
  },
});

const getThumbContainerAnimation = (clickCount: number) => {
  const evenDivisor = 2;
  if (clickCount === 0) {
    return 'animation: none';
  }
  if (clickCount % evenDivisor === 0) {
    return Animation.thumbContainer.off;
  }
  return Animation.thumbContainer.on;
};

const getTrackAnimation = (clickCount: number) => {
  const evenDivisor = 2;
  if (clickCount === 0) {
    return 'animation: none';
  }
  if (clickCount % evenDivisor === 0) {
    return Animation.track.off;
  }
  return Animation.track.on;
};

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

interface HoverCircleProps {
  hover: boolean;
  animationDuration: AnimationDuration;
}

interface ActiveCircleProps {
  active: boolean;
  animationDuration: AnimationDuration;
}

const S = Object.freeze({
  __proto__: null,
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
    ${props => getTrackAnimation(props.clickCount)};
  `,
  ThumbContainer: styled.span<ThumbContainerProps>`
    display: inline-block;
    position: absolute;
    width: 21.3px;
    height: 21px;
    ${props => getThumbContainerAnimation(props.clickCount)};
  `,
  Thumb: styled.span`
    position: absolute;
    z-index: 3;
    display: inline-block;
    background-color: ${STYLE.color.onPrimary};
    width: 21px;
    height: 21px;
    border-radius: 99px;
    transform: translate(-50%, 0);
  `,
  HoverCircle: styled.span<HoverCircleProps>`
    position: absolute;
    z-index: 1;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    visibility: ${props => (props.hover ? 'visible' : 'hidden')};
    width: 42px;
    height: 42px;
    border-radius: 99px;
    transform: translate(-50%, -25%);
    ${props => (props.hover ? Animation.hoverCircle : 'none')}
  `,
  ActiveCircle: styled.span<ActiveCircleProps>`
    position: absolute;
    z-index: 2;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    visibility: ${props => (props.active ? 'visible' : 'hidden')};
    opacity: 0.5;
    width: 42px;
    height: 42px;
    border-radius: 99px;
    transform: translate(-50%, -25%);
    ${props => (props.active ? Animation.activeCircle : 'none')}
  `,
});

interface Switch1Props {
  clickAnimationDuration?: AnimationDuration;
  circleEffectDuration?: AnimationDuration;
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
  circleEffectDuration = parseAnimationDuration('33.33ms'),
}: Switch1Props) => {
  const [click, setClick] = useState(false);
  const [clickCount, setCount] = useState(0);
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setCount(clickCount + 1);
  };
  const handleMouseOver = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const handleMouseDown = () => setActive(true);
  const handleMouseUp = () => setActive(false);

  return (
    <S.Track
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      click={click}
      clickCount={clickCount}
      animationDuration={clickAnimationDuration}
    >
      <S.ThumbContainer
        click={click}
        clickCount={clickCount}
        animationDuration={clickAnimationDuration}
      >
        <S.HoverCircle hover={hover} animationDuration={circleEffectDuration} />
        <S.ActiveCircle
          active={active}
          animationDuration={circleEffectDuration}
        />
        <S.Thumb />
      </S.ThumbContainer>
    </S.Track>
  );
};

export { parseAnimationDuration };
