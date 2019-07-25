import React from 'react';
import styled from 'styled-components';
import { Checkbox } from '../../atoms/Checkbox';
import { Caption } from '../../atoms/text/Caption';

const S = Object.freeze({
  __proto__: null,
  LabeledCheckbox: styled.div`
    width: 124px;
    /* height: 20px; */
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
  `,
});

export const LabeledCheckbox = ({ label }: { label: string }) => (
  <S.LabeledCheckbox>
    <Checkbox />
    <Caption>{label}</Caption>
  </S.LabeledCheckbox>
);
