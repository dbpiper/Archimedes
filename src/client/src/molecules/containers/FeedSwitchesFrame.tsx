import React from 'react';
import styled from 'styled-components';
import { Subsetting } from '../controls/Subsetting';

const S = Object.freeze({
  __proto__: null,
  FeedSwitchesFrame: styled.div`
    width: 173px;
    display: flex;
    flex-direction: column;
  `,
  // Since only Firefox supports flexbox gap, this is a hack to work around that.
  // We wrap all elements, but the last one with this div which has a bottom
  // margin, which is our 'gap' property.
  SubsettingContainer: styled.div`
    margin-bottom: 20px;
  `,
});

interface ProjectFeed {
  label: string;
  on?: boolean;
}

export const FeedSwitchesFrame = ({ feeds }: { feeds: ProjectFeed[] }) => (
  <S.FeedSwitchesFrame>
    {feeds.map((value, index) =>
      index < feeds.length - 1 ? (
        <S.SubsettingContainer>
          <Subsetting key={index} label={value.label} on={value.on} />
        </S.SubsettingContainer>
      ) : (
        <Subsetting key={index} label={value.label} on={value.on} />
      ),
    )}
  </S.FeedSwitchesFrame>
);
