import { storiesOf } from '@storybook/react';

const isAddWithJsxFunction = (
  addWithJsx: string | typeof storiesOf,
): addWithJsx is typeof storiesOf => addWithJsx !== 'string';

export const addStoryWithJsx = (kind: string, passedFileModule: NodeModule) => {
  const addWithJsx = storiesOf(kind, passedFileModule).addWithJSX;
  if (!addWithJsx || !isAddWithJsxFunction(addWithJsx)) {
    throw new Error('the addWithJsx function was not created successfully!');
  }

  return addWithJsx;
};
