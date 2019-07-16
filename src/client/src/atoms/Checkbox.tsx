import React, { useState } from 'react';
import styled from 'styled-components';
import STYLE from '../STYLE';

// tslint:disable-next-line: no-var-requires
const Checkmark = require('../assets/Checkmark.svg') as string;

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
});

const BoxLight = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  z-index: 11;
  width: 20px;
  height: 20px;
  border-radius: 3px;
  border-color: ${STYLE.color.lightPrimary};
  background-color: ${STYLE.color.lightPrimary};
  /* clip-path: polygon(
      1.5px 1.5px,
      1.5px calc(100% - 1.5px),
      calc(100% - 1.5px) calc(100% - 1.5px),
      calc(100% - 1.5px) 1.5px
    ); */
`;

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

    &:hover ${BoxLight} {
      transform: scale(0, 0);

      transition: transform 100ms cubic-bezier(0.84, 0, 0.16, 1);
    }
  `,
});

export const Checkbox = (props: { className?: string; checked: boolean }) => {
  const [checked, setChecked] = useState(props.checked);
  const toggleChecked = () => setChecked(!checked);

  return (
    <sDynamic.CheckboxContainer
      className={props.className}
      onClick={toggleChecked}
    >
      <sStatic.HoverCircle />
      <sStatic.ActiveCircle />
      <sStatic.HiddenCheckbox checked={checked} onChange={toggleChecked} />

      {/* <sStatic.StyledCheckbox>
        <img src={Checkmark} hidden={!checked} />
      </sStatic.StyledCheckbox> */}
      <BoxLight />
      <sStatic.BoxDark />
      <sStatic.CheckmarkImage src={Checkmark} />
    </sDynamic.CheckboxContainer>
  );
};

Checkbox.defaultProps = { checked: true };
