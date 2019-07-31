import moment from 'moment';
import React from 'react';
import styled from 'styled-components';
import { Caption } from '../../atoms/text/Caption';
import { Subtitle2 } from '../../atoms/text/Subtitle2';

const S = Object.freeze({
  __proto__: null,
  ReleaseInfo: styled.div`
    width: 132px;
    height: 16px;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
  `,
});

export const ReleaseInfo = ({
  releaseDate,
  semVerCategory,
}: {
  releaseDate: string;
  semVerCategory: string;
}) => (
  <S.ReleaseInfo>
    <Caption>
      {moment
        .utc(releaseDate)
        .local()
        .format('MMMM D, YYYY')}
    </Caption>
    <Subtitle2>{semVerCategory}</Subtitle2>
  </S.ReleaseInfo>
);
