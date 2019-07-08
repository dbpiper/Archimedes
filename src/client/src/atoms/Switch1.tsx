import React, { useState } from 'react';
import styled from 'styled-components';
import STYLE from '../STYLE';

const S = Object.freeze({
  Track: styled.button<{ active: boolean }>`
    position: relative;
    display: flex;
    padding: 6px;
    width: 60px;
    height: 33px;
    background-color: ${props =>
      props.active ? STYLE.color.primary : STYLE.color.darkSecondary};
    border-radius: 16.5px;
    border: none !important;
    outline: none !important;
  `,
  ThumbContainer: styled.span<{ active: boolean }>`
    display: inline-block;
    position: absolute;
    width: 21px;
    height: 21px;
    right: ${props => (props.active ? '6px' : 'auto')};
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
    opacity: 0.25;
    width: 42px;
    height: 42px;
    border-radius: 99px;
    transform: translate(-50%, -25%);
  `,
  MouseDownCircle: styled.span<{ mouseDown: boolean }>`
    position: absolute;
    z-index: 2;
    display: inline-block;
    background-color: ${STYLE.color.darkPrimary};
    visibility: ${props => (props.mouseDown ? 'visible' : 'hidden')};
    opacity: 0.5;
    width: 42px;
    height: 42px;
    border-radius: 99px;
    transform: translate(-50%, -25%);
  `,
});

export const Switch1 = ({}) => {
  const [active, setActive] = useState(false);
  const [hover, setHover] = useState(false);
  const [mouseDown, setMouseDown] = useState(false);
  const handleClick = () => setActive(!active);
  const handleMouseOver = () => setHover(true);
  const handleMouseLeave = () => setHover(false);
  const handleMouseDown = () => setMouseDown(true);
  const handleMouseUp = () => setMouseDown(false);

  return (
    <S.Track
      active={active}
      onClick={handleClick}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <S.ThumbContainer active={active}>
        <S.HoverCircle hover={hover} />
        <S.MouseDownCircle mouseDown={mouseDown} />
        <S.Thumb />
      </S.ThumbContainer>
    </S.Track>
  );
};
