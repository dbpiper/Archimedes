import { storiesOf } from '@storybook/react';
import React from 'react';
import getDisplayName from 'react-display-name';
import { StorybookWrapper } from '../../../helpers/StorybookWrapper';
import { Button, ButtonStyle } from '../Button';

storiesOf('molecules/selection/Button/contained/primary', module).addWithJSX(
  getDisplayName(Button),
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Contained}>sign in</Button>
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/Button/contained/secondary', module).addWithJSX(
  getDisplayName(Button),
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Contained} secondary={true}>
        sign in
      </Button>
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/Button/outlined/primary', module).addWithJSX(
  getDisplayName(Button),
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Outlined}>sign in</Button>
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/Button/outlined/secondary', module).addWithJSX(
  getDisplayName(Button),
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Outlined} secondary={true}>
        sign in
      </Button>
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/Button/text/primary', module).addWithJSX(
  getDisplayName(Button),
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Text}>sign in</Button>
    </StorybookWrapper>
  ),
);

storiesOf('molecules/selection/Button/text/secondary', module).addWithJSX(
  getDisplayName(Button),
  () => (
    <StorybookWrapper>
      <Button buttonStyle={ButtonStyle.Text} secondary={true}>
        sign in
      </Button>
    </StorybookWrapper>
  ),
);
