import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';
import AppNavigator from '../../AppNavigator';
import UsersReducer from '../actions/user/reducer';

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  users: UsersReducer
});

export default rootReducer;
