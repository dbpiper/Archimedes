import hexToRgba from 'hex-to-rgba';
import React from 'react';
import styled from 'styled-components';

import { Switch1 } from '@atoms/Switch1';
import { VerticalVoteButtons } from '@molecules/selection/VerticalVoteButtons';
import { ProjectCardContents } from '@organisms/cards/ProjectCardContents';
import STYLE from '@src/STYLE';

const boxShadowOpacity = 0.5;

const votingWidth = 490;
const switch1Width = 525;

const S = Object.freeze({
  __proto__: null,
  ProjectCard: styled.div<{ voting: boolean }>`
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

    width: ${props => (props.voting ? votingWidth : switch1Width)}px;
    height: 125px;
    align-items: center;
  `,
});

export const ProjectCard = ({
  stars,
  language,
  imageSrc,
  description,
  userName,
  projectName,
  voting,
  className,
}: {
  stars: number;
  language: string;
  imageSrc: string;
  description: string;
  userName: string;
  projectName: string;
  voting?: boolean;
  className?: string;
}) => (
  // we have to tell TypeScript that it _really_ is a boolean, since we
  // have a defaultProp
  <S.ProjectCard voting={voting as boolean} className={className}>
    <ProjectCardContents
      stars={stars}
      language={language}
      imageSrc={imageSrc}
      description={description}
      userName={userName}
      projectName={projectName}
    />
    {voting ? <VerticalVoteButtons /> : <Switch1 />}
  </S.ProjectCard>
);

ProjectCard.defaultProps = { voting: true };
