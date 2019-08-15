import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { StorybookWrapper } from '../../../helpers/StorybookWrapper';
import { Button, ButtonStyle } from '../Button';

const componentName = getDisplayName(Button);

storiesOf(
  `molecules/selection/${componentName}/contained/primary`,
  module,
).addWithJSX(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Contained}>sign in</Button>
  </StorybookWrapper>
));

storiesOf(
  `molecules/selection/${componentName}/contained/secondary`,
  module,
).addWithJSX(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Contained} secondary={true}>
      sign in
    </Button>
  </StorybookWrapper>
));

storiesOf(
  `molecules/selection/${componentName}/contained/primary/icon`,
  module,
).addWithJSX(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Contained} icon={faGoogle}>
      sign in with Google
    </Button>
  </StorybookWrapper>
));

storiesOf(
  `molecules/selection/${componentName}/contained/secondary/icon`,
  module,
).addWithJSX(componentName, () => (
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

storiesOf(
  `molecules/selection/${componentName}/outlined/primary`,
  module,
).addWithJSX(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Outlined}>sign in</Button>
  </StorybookWrapper>
));

storiesOf(
  `molecules/selection/${componentName}/outlined/secondary`,
  module,
).addWithJSX(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Outlined} secondary={true}>
      sign in
    </Button>
  </StorybookWrapper>
));

storiesOf(
  `molecules/selection/${componentName}/text/primary`,
  module,
).addWithJSX(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Text}>sign in</Button>
  </StorybookWrapper>
));

storiesOf(
  `molecules/selection/${componentName}/text/secondary`,
  module,
).addWithJSX(componentName, () => (
  <StorybookWrapper>
    <Button buttonStyle={ButtonStyle.Text} secondary={true}>
      sign in
    </Button>
  </StorybookWrapper>
));
