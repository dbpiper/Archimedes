import React from 'react';
import getDisplayName from 'react-display-name';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { StorybookWrapper } from '../../shared/helpers/StorybookWrapper';
import { Checkbox } from '../Checkbox';

// stories

addStoryWithJsx('atoms/Checkbox/unchecked', module)(
	getDisplayName(Checkbox),
	() => (
		<StorybookWrapper>
			<Checkbox />
		</StorybookWrapper>
	),
);

addStoryWithJsx('atoms/Checkbox/checked', module)(getDisplayName(Checkbox), () => (
	<StorybookWrapper>
		<Checkbox checked={true} />
	</StorybookWrapper>
));
