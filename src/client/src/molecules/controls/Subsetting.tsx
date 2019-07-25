import React from 'react';
import styled from 'styled-components';
import { Switch2 } from '../../atoms/Switch2';
import { Body2 } from '../../atoms/text/Body2';

const S = Object.freeze({
  __proto__: null,
  Subsetting: styled.div`
    width: 173px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
});

export const Subsetting = ({ label, on }: { label: string; on?: boolean }) => (
  <S.Subsetting>
    <Body2>{label}</Body2>
    <Switch2 on={on} />
  </S.Subsetting>
);
