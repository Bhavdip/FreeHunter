import React from 'react';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import { connect } from 'react-redux';
import AppNavigator from './AppNavigator';

const App = reduxifyNavigator(AppNavigator, 'root');

const mapStateToProps = state => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(App);

export default AppWithNavigationState;
