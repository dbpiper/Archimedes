import { findElementRegex } from '../../util/archimedes';
import {
  getStorybookUrl,
  visitComponentStoryIframe,
} from '../../util/storybook';

describe('Header', () => {
  before('successfully loads', () => {
    visitComponentStoryIframe(getStorybookUrl(), 'Header');
  });
  specify('the title is correct', () => {
    findElementRegex(/Header.{2}Title.*/).contains('Archimedes');
  });
});

export {};
