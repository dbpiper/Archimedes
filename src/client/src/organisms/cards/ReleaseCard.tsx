import hexToRgba from 'hex-to-rgba';
import React from 'react';
import styled from 'styled-components';

import { VerticalVoteButtons } from '@molecules/selection/VerticalVoteButtons';
import { ReleaseCardContents } from '@organisms/cards/ReleaseCardContents';
import STYLE from '@src/STYLE';
import { SemVerCategory } from '@util/enums/SemVerCategory';

const boxShadowOpacity = 0.5;

const S = Object.freeze({
  __proto__: null,
  ReleaseCard: styled.div`
    display: flex;
    outline: none;
    border: 0;
    border-radius: 5px;
    /*
      we have to do this to support older browsers, which don't support
      #rrggbbaa hex color notation: https://caniuse.com/#feat=css-rrggbbaa
      Which is about 15% of web browsers, importantly including Electron 61
      and thus the current version of Cypress.
    */
    box-shadow: 0 4px 4px
      ${hexToRgba(STYLE.color.darkPrimary, boxShadowOpacity)};

    width: 490px;
    height: 125px;
    align-items: center;
  `,
});

export const ReleaseCard = ({
  imageSrc,
  releaseDescriptionMarkdown,
  projectName,
  semVerCategory,
  releaseDate,
  releaseVersion,
  className,
}: {
  imageSrc: string;
  releaseDescriptionMarkdown: string;
  projectName: string;
  semVerCategory: SemVerCategory;
  releaseDate: string;
  releaseVersion: string;
  className?: string;
}) => (
  // we have to tell TypeScript that it _really_ is a boolean, since we
  // have a defaultProp
  <S.ReleaseCard className={className}>
    <ReleaseCardContents
      projectName={projectName}
      releaseVersion={releaseVersion}
      releaseDate={releaseDate}
      semVerCategory={semVerCategory}
      imageSrc={imageSrc}
      releaseDescriptionMarkdown={releaseDescriptionMarkdown}
    />
    <VerticalVoteButtons />
  </S.ReleaseCard>
);

ReleaseCard.defaultProps = { voting: true };
