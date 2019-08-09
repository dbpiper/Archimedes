import moment from 'moment';
import React from 'react';
import styled from 'styled-components';

import { Caption } from '@atoms/text/Caption';
import { Button, ButtonStyle } from '@molecules/selection/Button';
import { StorybookWrapper } from '@src/helpers/StorybookWrapper';

const S = Object.freeze({
  __proto__: null,
  MessageActions: styled.div`
    width: 173px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  CaptionWrapper: styled.div`
    margin-left: 7.5px;
  `,
});

export const MessageActions = ({
  messageArrivalDateTime,
  comparisonDateTime,
}: {
  messageArrivalDateTime: string;
  comparisonDateTime?: string;
}) => {
  const _comparisonDateTime = comparisonDateTime
    ? comparisonDateTime
    : moment.utc().toISOString();

  const messageArrivalMoment = moment.utc(messageArrivalDateTime).local();
  const comparisonMoment = moment.utc(_comparisonDateTime).local();

  return (
    <StorybookWrapper>
      <S.MessageActions>
        <Button buttonStyle={ButtonStyle.Text}>reply</Button>
        <S.CaptionWrapper>
          <Caption>{messageArrivalMoment.from(comparisonMoment)}</Caption>
        </S.CaptionWrapper>
      </S.MessageActions>
    </StorybookWrapper>
  );
};
