import hexToRgba from 'hex-to-rgba';
import React from 'react';
import styled from 'styled-components';

import { VerticalVoteButtons } from '@molecules/selection/VerticalVoteButtons';
import { ProjectCardContents } from '@organisms/cards/ProjectCardContents';
import STYLE from '@src/STYLE';

const boxShadowOpacity = 0.5;

const S = Object.freeze({
  __proto__: null,
  VotingProjectCard: styled.div`
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

    width: 480px;
    height: 125px;
    align-items: center;
  `,
});

export const VotingProjectCard = ({
  stars,
  language,
  imageSrc,
  description,
  userName,
  projectName,
  className,
}: {
  stars: number;
  language: string;
  imageSrc: string;
  description: string;
  userName: string;
  projectName: string;
  className?: string;
}) => (
  <S.VotingProjectCard className={className}>
    <ProjectCardContents
      stars={stars}
      language={language}
      imageSrc={imageSrc}
      description={description}
      userName={userName}
      projectName={projectName}
    />
    <VerticalVoteButtons />
  </S.VotingProjectCard>
);
