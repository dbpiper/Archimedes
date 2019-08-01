import { findElementRegex } from '../../../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

const verticalVoteButtonsPath = 'molecules/selection';
const voteButtonRegex = /VoteButton.*/;

describe('VerticalVoteButtons test suite', () => {
  before(() => {
    visitComponentStoryIframe(
      getStorybookUrl(),
      verticalVoteButtonsPath,
      'VerticalVoteButtons',
    );
  });

  specify('default view looks correct', () => {
    cy.matchImageSnapshot();
  });

  specify('up vote works', () => {
    findElementRegex(voteButtonRegex);
    cy.matchImageSnapshot();
  });

  specify('down vote works', () => {
    findElementRegex(voteButtonRegex, 1);
    cy.matchImageSnapshot();
  });
});

export {};
