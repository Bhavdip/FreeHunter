import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import loggingMiddleware from './middleware/logging';

const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav
);

const configureStore = initialState => {
  const middleware = applyMiddleware(navMiddleware, thunk, loggingMiddleware);
  return createStore(rootReducer, initialState, middleware);
};

export default configureStore;
