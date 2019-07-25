import React from 'react';
import styled from 'styled-components';
import { Switch2 } from '../../atoms/Switch2';
import { Body1 } from '../../atoms/text/Body1';

const S = Object.freeze({
  __proto__: null,
  Setting: styled.div`
    width: 208px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  `,
});

export const Setting = ({ label }: { label: string }) => (
  <S.Setting>
    <Body1>{label}</Body1>
    <Switch2 />
  </S.Setting>
);
