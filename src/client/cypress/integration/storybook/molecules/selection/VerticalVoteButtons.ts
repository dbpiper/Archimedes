import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

const verticalVoteButtonsPath = 'molecules/selection';

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
});

export {};
