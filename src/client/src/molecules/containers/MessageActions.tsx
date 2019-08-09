import React from 'react';
import styled from 'styled-components';

import { Caption } from '@atoms/text/Caption';
import { Button, ButtonStyle } from '@molecules/selection/Button';
import { getDurationForLabel } from '@util/getDurationForLabel';

const S = Object.freeze({
  __proto__: null,
  MessageActions: styled.div`
    width: 128px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  CaptionWrapper: styled.div`
    margin-left: 7.5px;
  `,
});

/**
 *
 * All DateTimes are expected to be ISO 8601 formatted DateTime strings.
 *
 */
export const MessageActions = ({
  messageArrivalDateTime,
  comparisonDateTime,
}: {
  messageArrivalDateTime: string;
  comparisonDateTime?: string;
}) => (
    <S.MessageActions>
      <Button buttonStyle={ButtonStyle.Text}>reply</Button>
      <S.CaptionWrapper>
        <Caption>
          {getDurationForLabel(messageArrivalDateTime, comparisonDateTime)}
        </Caption>
      </S.CaptionWrapper>
    </S.MessageActions>
);
