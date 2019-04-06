import { createNavigationReducer } from 'react-navigation-redux-helpers';
import { combineReducers } from 'redux';
import AppNavigator from '../../AppNavigator';
import ProfileReducer from '../actions/profile/reducer';

const navReducer = createNavigationReducer(AppNavigator);

const rootReducer = combineReducers({
  nav: navReducer,
  profile: ProfileReducer
});

export default rootReducer;
