import React from 'react';
import styled from 'styled-components';

import { Checkbox } from '@atoms/Checkbox';
import { Caption } from '@atoms/text/Caption';

const S = Object.freeze({
  __proto__: null,
  LabeledCheckbox: styled.div`
    width: 124px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px;
  `,
});

export const LabeledCheckbox = ({
  label,
  checked,
}: {
  label: string;
  checked?: boolean;
}) => (
  <S.LabeledCheckbox>
    <Checkbox checked={checked} />
    <Caption>{label}</Caption>
  </S.LabeledCheckbox>
);

LabeledCheckbox.defaultProps = { checked: false };
