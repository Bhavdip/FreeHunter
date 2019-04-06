/**
 *
 * @format
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import AppWithNavigationState from './AppWithNavigationState';
import NavigationService from './NavigationService';
const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <AppWithNavigationState
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
    />
  </Provider>
);

export default app;
