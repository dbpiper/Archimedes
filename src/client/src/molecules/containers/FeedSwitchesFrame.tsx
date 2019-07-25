import React from 'react';
import styled from 'styled-components';
import { Subsetting } from '../controls/Subsetting';

const S = Object.freeze({
  __proto__: null,
  FeedSwitchesFrame: styled.div`
    width: 173px;
    display: grid;
    gap: 20px;
  `,
});

export const FeedSwitchesFrame = () => (
  <S.FeedSwitchesFrame>
    <Subsetting label="JavaScript" />
    <Subsetting label="Python" />
  </S.FeedSwitchesFrame>
);
