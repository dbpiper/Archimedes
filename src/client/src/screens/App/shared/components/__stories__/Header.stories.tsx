import { MockedProvider } from '@apollo/react-testing';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import { addStoryWithJsx } from '@util/storybook/add-story';
import { rootReducer } from 'App/reducer';
import Header from 'App/shared/components/Header';

const store = createStore(rootReducer);

addStoryWithJsx('App/shared/components', module)(Header.name, () => (
  <MockedProvider>
    <Provider store={store}>
      <Header />
    </Provider>
  </MockedProvider>
));
