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
          left: 4px;
        }

        100% {
          left: 23px;
        }
      `,
    off: keyframes`
        0% {
          right: 4px;
        }

        100% {
          right: 23px;
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
    padding: 4px;
    width: 40px;
    height: 22px;
    background-color: ${props =>
      props.click ? STYLE.color.primary : STYLE.color.darkSecondary};
    border-radius: 11px;
    border: none !important;
    outline: none !important;
    ${props => getTrackAnimation(props.clickCount)};
  `,
  ThumbContainer: styled.div<ThumbContainerProps>`
    display: flex;
    position: absolute;
    width: 14px;
    height: 14px;
    ${props => getThumbContainerAnimation(props.clickCount)};
    align-items: center;
  `,
  Thumb: styled.svg`
    z-index: 3;
    position: relative;
    display: inline-block;
  `,
  HoverCircle: styled.span<HoverCircleProps>`
    position: absolute;
    z-index: 1;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    visibility: ${props => (props.hover ? 'visible' : 'hidden')};
    width: 28px;
    height: 28px;
    border-radius: 100%;
    transform: translate(-25%, 0);
    ${props => (props.hover ? Animation.hoverCircle : 'none')}
  `,
  ActiveCircle: styled.span<ActiveCircleProps>`
    position: absolute;
    z-index: 2;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    visibility: ${props => (props.active ? 'visible' : 'hidden')};
    opacity: 0.5;
    width: 28px;
    height: 28px;
    border-radius: 100%;
    transform: translate(-25%, 0);
    ${props => (props.active ? Animation.activeCircle : 'none')}
  `,
});

interface Switch2Props {
  clickAnimationDuration?: AnimationDuration;
  circleEffectDuration?: AnimationDuration;
}

/**
 *
 * @param props {Switch2Props} This component takes the animation
 *        durations as props, so that they can be set to '0s' for testing.
 *        Of course this also means that the animations can be adjusted
 *        as desired by the users.
 */
export const Switch2 = ({
  clickAnimationDuration = parseAnimationDuration('333.3ms'),
  circleEffectDuration = parseAnimationDuration('33.33ms'),
}: Switch2Props) => {
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
        <S.Thumb
          viewBox="0 0 14 14"
          height="14px"
          width="14px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="7" cy="7" r="7" fill={STYLE.color.onPrimary} />
        </S.Thumb>
      </S.ThumbContainer>
    </S.Track>
  );
};

export { parseAnimationDuration };
