import { findElementRegex } from '../../../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../../../util/storybook';

const VoteButtonRegex = /VoteButton.*/;

const voteButtonPath = 'molecules/selection/VoteButton';

describe('VoteButton/up test suite', () => {
  describe('VoteButton/up/off test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/up/off`,
        'VoteButton',
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      // there is no animation here so we don't need to worry about a race-condition
      findElementRegex(VoteButtonRegex).click();
      cy.matchImageSnapshot();
    });
  });

  describe('VoteButton/up/on test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/up/on`,
        'VoteButton',
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      // there is no animation here so we don't need to worry about a race-condition
      findElementRegex(VoteButtonRegex).click();
      cy.matchImageSnapshot();
    });
  });
});

describe('VoteButton/down test suite', () => {
  describe('VoteButton/down/off test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/down/off`,
        'VoteButton',
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      // there is no animation here so we don't need to worry about a race-condition
      findElementRegex(VoteButtonRegex).click();
      cy.matchImageSnapshot();
    });
  });

  describe('VoteButton/down/on test suite', () => {
    before(() => {
      visitComponentStoryIframe(
        getStorybookUrl(),
        `${voteButtonPath}/down/on`,
        'VoteButton',
      );
    });

    specify('default view looks correct', () => {
      cy.matchImageSnapshot();
    });

    specify('looks correct after click', () => {
      // there is no animation here so we don't need to worry about a race-condition
      findElementRegex(VoteButtonRegex).click();
      cy.matchImageSnapshot();
    });
  });
});

export {};
