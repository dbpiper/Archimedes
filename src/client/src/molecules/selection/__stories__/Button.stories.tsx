import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { StorybookWrapper } from '../../../shared/helpers/StorybookWrapper';
import { Button, ButtonStyle } from '../Button';

const componentName = getDisplayName(Button);

addStoryWithJsx(
  `molecules/selection/${componentName}/contained/primary`,
  module,
)(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Contained}>sign in</Button>
  </StorybookWrapper>
));

addStoryWithJsx(
  `molecules/selection/${componentName}/contained/secondary`,
  module,
)(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Contained} secondary={true}>
      sign in
    </Button>
  </StorybookWrapper>
));

addStoryWithJsx(
  `molecules/selection/${componentName}/contained/primary/icon`,
  module,
)(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Contained} icon={faGoogle}>
      sign in with Google
    </Button>
  </StorybookWrapper>
));

addStoryWithJsx(
  `molecules/selection/${componentName}/contained/secondary/icon`,
  module,
)(componentName, () => (
  <StorybookWrapper>
    <Button
      buttonStyle={ButtonStyle.Contained}
      secondary={true}
      icon={faGoogle}
    >
      sign in with Google
    </Button>
  </StorybookWrapper>
));

addStoryWithJsx(
  `molecules/selection/${componentName}/outlined/primary`,
  module,
)(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Outlined}>sign in</Button>
  </StorybookWrapper>
));

addStoryWithJsx(
  `molecules/selection/${componentName}/outlined/secondary`,
  module,
)(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Outlined} secondary={true}>
      sign in
    </Button>
  </StorybookWrapper>
));

addStoryWithJsx(`molecules/selection/${componentName}/text/primary`, module)(
  componentName,
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Text}>sign in</Button>
    </StorybookWrapper>
  ),
);

addStoryWithJsx(`molecules/selection/${componentName}/text/secondary`, module)(
  componentName,
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Text} secondary={true}>
        sign in
      </Button>
    </StorybookWrapper>
  ),
);
