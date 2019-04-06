import { NavigationActions } from 'react-navigation';
import { log } from '@utils';

let _navigator;

function setTopLevelNavigator(navigatorRef) {
  log('setTopLevelNavigator', navigatorRef);
  _navigator = navigatorRef ? navigatorRef.store : null;
}

function navigate(routeName, params) {
  logging(_navigator);
  if (_navigator) {
    _navigator.dispatch(
      NavigationActions.navigate({
        routeName,
        params
      })
    );
  }
}
// add other navigation functions that you need and export them
export default {
  navigate,
  setTopLevelNavigator
};
