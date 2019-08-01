import { getStorybookUrl } from '../config/dotenvs';

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
 * Get the internal storybook id of the component, this is needed to
 * open the iframe as its src attribute is unreliable and sometimes appears
 * to be just '+' which isn't helpful for Cypress purposes.
 *
 * This **is** a workaround and it *could* potentially break with an update
 * to Storybook, however I do think that it is the best option given what
 * we have to work with (no official iframe support from Cypress).
 *
 * @param {string} storyName The name of the Story to grab the id of, this
 * should generally be the same as the React Component name.
 * @param {string} kindName The name of the story kind, this is basically
 * an instance of the React Component with different props, in other words
 * it would be the same story, but a different way to use it.
 *
 */
// const _getStoryKindId = (kindName: string, storyName?: string) => {
//   const storyIdPortion: string = storyName ? _normalizeIdString(storyName) : '';
//   const kindIdPortion: string = _normalizeIdString(kindName);
//   const typedName = cy
//     .get('input')
//     .should('have.attr', 'placeholder', 'Press "/" to search...')
//     .clear()
//     .type(kindName, {
//       delay: 0,
//     });
//   typedName.then(() => {
//     const getComponentDiv = () =>
//       cy.get('div').filter((_index, element) => {
//         const filteredElement = element.id.match(
//           storyIdPortion.length > 0
//             ? `.*${storyIdPortion}--${kindIdPortion}`
//             : `.*--${kindIdPortion}`,
//         );
//         if (!filteredElement) {
//           return false;
//         }
//         return true;
//       });
//     getComponentDiv()
//       .invoke('attr', 'id')
//       .as('ComponentId');
//   });
// };

/**
 * Navigates cypress to the iframe containing the storybook story
 * preview. This uses the alias of the component which Cypress gets
 * in the `getComponentId` function.
 *
 * @param {string} storybookUrl The base url of the running storybook
 */
// const _navigateToStorybookIFrame = (storybookUrl: string) => {
//   cy.get('@ComponentId').then(componentId => {
//     const iframeUrl = `iframe.html?id=${componentId}`;
//     cy.visit(`${storybookUrl}/${iframeUrl}`, {
//       timeout: Cypress.config('pageLoadTimeout'),
//     });
//   });
// };

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
  cy.visit(storybookUrl);
  const storyKindIframePath = _normalizeIdString(
    `${storyPath}--${storyKindName}`,
  );
  // wait for the storybook to finish loading, we can test for this
  // by simply waiting for the input to resolve
  cy.get('input').should('have.attr', 'placeholder', 'Press "/" to search...');
  _navigateToStorybookIFrame(storybookUrl, storyKindIframePath);
};

export { getStorybookUrl, visitComponentStoryIframe };
