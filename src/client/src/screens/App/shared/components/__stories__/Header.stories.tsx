import { storiesOf } from '@storybook/react';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { rootReducer } from 'App/reducer';
import Header from 'App/shared/components/Header';

const store = createStore(rootReducer);

storiesOf('App/shared/components', module).addWithJSX('Header', () => (
  <MockedProvider>
    <Provider store={store}>
      <Header />
    </Provider>
  </MockedProvider>
));
