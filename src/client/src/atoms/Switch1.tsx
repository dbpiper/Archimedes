import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import STYLE from '../STYLE';

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

const clickDuration = '333.3ms';

const Animation = Object.freeze({
  __proto__: null,
  hoverCircle: css`
    animation: ${Keyframes.hoverCircle} 33.33ms forwards
      cubic-bezier(0.22, 1, 0.36, 1);
  `,
  activeCircle: css`
    animation: ${Keyframes.activeCircle} 33.33ms forwards
      cubic-bezier(0.22, 1, 0.36, 1);
  `,
  thumbContainer: {
    on: css`
      animation: ${Keyframes.thumbContainer.on} ${clickDuration} forwards
        cubic-bezier(0.22, 1, 0.36, 1.5);
    `,
    off: css`
      animation: ${Keyframes.thumbContainer.off} ${clickDuration} forwards
        cubic-bezier(0.22, 1, 0.36, 1.5);
    `,
  },
  track: {
    on: css`
      animation: ${Keyframes.track.on} ${clickDuration} forwards
        cubic-bezier(0.22, 1, 0.36, 1);
    `,
    off: css`
      animation: ${Keyframes.track.off} ${clickDuration} forwards
        cubic-bezier(0.22, 1, 0.36, 1);
    `,
  },
});

const getThumbContainerAnimation = (clickCount: number) => {
  const evenDivisor = 2;
  if (clickCount === 0) {
    return 'none';
  }
  if (clickCount % evenDivisor === 0) {
    return Animation.thumbContainer.off;
  }
  return Animation.thumbContainer.on;
};

const getTrackAnimation = (clickCount: number) => {
  const evenDivisor = 2;
  if (clickCount === 0) {
    return 'none';
  }
  if (clickCount % evenDivisor === 0) {
    return Animation.track.off;
  }
  return Animation.track.on;
};

const S = Object.freeze({
  __proto__: null,
  Track: styled.button<{ click: boolean; clickCount: number }>`
    position: relative;
    display: flex;
    padding: 6px;
    width: 60px;
    height: 33px;
    background-color: ${props =>
      props.click ? STYLE.color.primary : STYLE.color.darkSecondary};
    border-radius: 16.5px;
    border: none !important;
    outline: none !important;
    ${(props: { click: boolean; clickCount: number }) =>
      getTrackAnimation(props.clickCount)};
  `,
  ThumbContainer: styled.span<{ click: boolean; clickCount: number }>`
    display: inline-block;
    position: absolute;
    width: 21px;
    height: 21px;
    ${(props: { click: boolean; clickCount: number }) =>
      getThumbContainerAnimation(props.clickCount)};
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
  HoverCircle: styled.span<{ hover: boolean }>`
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
  ActiveCircle: styled.span<{ active: boolean }>`
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

export const Switch1 = ({}) => {
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
    >
      <S.ThumbContainer click={click} clickCount={clickCount}>
        <S.HoverCircle hover={hover} />
        <S.ActiveCircle active={active} />
        <S.Thumb />
      </S.ThumbContainer>
    </S.Track>
  );
};
