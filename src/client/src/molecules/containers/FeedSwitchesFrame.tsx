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

interface ProjectFeed {
  label: string;
  on?: boolean;
}

export const FeedSwitchesFrame = ({ feeds }: { feeds: ProjectFeed[] }) => (
  <S.FeedSwitchesFrame>
    {feeds.map((value, index) => (
      <Subsetting key={index} label={value.label} on={value.on} />
    ))}
  </S.FeedSwitchesFrame>
);
