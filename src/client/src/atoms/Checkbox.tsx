import React, { useState } from 'react';
import styled from 'styled-components';
import STYLE from '../STYLE';

// tslint:disable-next-line: no-var-requires
const Checkmark = require('../assets/Check mark.svg') as string;

const S = Object.freeze({
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
  `,
  StyledCheckbox: styled.div`
    width: 20px;
    height: 20px;
    /* background-color: transparent; */
    border-radius: 5px;
    border: 1px solid;
    border-color: ${STYLE.color.darkSecondary};
    transition: all 150ms;

    /* center the checkmark */
    vertical-align: middle;
    text-align: center;
    display: table-cell;
  `,
  CheckboxContainer: styled.div`
    display: inline-block;
    vertical-align: middle;
  `,
});

export const Checkbox = (props: { className?: string; checked: boolean }) => {
  const [checked, setChecked] = useState(props.checked);
  const toggleChecked = () => setChecked(!checked);

  return (
    <S.CheckboxContainer className={props.className} onClick={toggleChecked}>
      <S.HiddenCheckbox checked={checked} onChange={toggleChecked} />
      <S.StyledCheckbox>
        <img src={Checkmark} hidden={!checked} />
      </S.StyledCheckbox>
    </S.CheckboxContainer>
  );
};

Checkbox.defaultProps = { checked: true };
