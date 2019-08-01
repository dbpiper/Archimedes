import { getStorybookUrl } from '../config/dotenvs';
import { findElementRegex } from './archimedes';

/**
 *
 * Converts the raw string passed in by the user to a form that matches the
 * format that Storybook uses. In other words, it makes it lowercase and
 * replaces spaces with hyphens.
 * @param {string} raw The raw string passed in.
 */
const _normalizeIdString = (raw: string) =>
  raw
    .split(/[\ \/]+/)
    .join('-')
    .toLowerCase();

/**
 * Navigates cypress to the iframe containing the storybook story
 * preview.
 *
 * @param {string} storybookUrl The base url of the running storybook
 * @param {string} storyKindIframePath The story path of the iframe
 */
const _navigateToStorybookIFrame = (
  storybookUrl: string,
  storyKindIframePath: string,
) => {
  const iframeUrl = `iframe.html?id=${storyKindIframePath}`;
  cy.visit(`${storybookUrl}/${iframeUrl}`, {
    timeout: Cypress.config('pageLoadTimeout'),
  });
};

/**
 * Opens the Storybook story for the given component. Rather than
 * opening in the normal storybook way, how a user would, it instead
 * opens the component story (which it calls the "preview") directly.
 *
 * This story is actually in an iframe so it is actually just telling
 * Cypress to visit the iframe url.
 *
 * @param {string} storybookUrl The url of the standard storybook page
 * @param {string} storyKindName The name of the story kind to navigate
 * to. This is the instance of the component or story; what is created
 * with `addWithJSX`.
 */
const visitComponentStoryIframe = (
  storybookUrl: string,
  storyPath: string,
  storyKindName: string,
) => {
  const storyKindIframePath = _normalizeIdString(
    `${storyPath}--${storyKindName}`,
  );
  _navigateToStorybookIFrame(storybookUrl, storyKindIframePath);
  findElementRegex(/sb-show-main/);
};

export { getStorybookUrl, visitComponentStoryIframe };
