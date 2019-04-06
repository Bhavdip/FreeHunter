import * as React from 'react';
import { withNavigation, NavigationActions } from 'react-navigation';
import { BackHandler } from 'react-native';
import { log } from '@utils';

class BackHandlerAndroid extends React.Component {
  _didFocusSubscription;
  _willBlurSubscription;

  constructor(props) {
    super(props);
    this._didFocusSubscription = props.navigation.addListener(
      'didFocus',
      payload =>
        BackHandler.addEventListener('hardwareBackPress', this.onBackPressed)
    );
  }

  componentDidMount() {
    this._willBlurSubscription = this.props.navigation.addListener(
      'willBlur',
      payload =>
        BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed)
    );
  }

  onBackPressed = () => {
    var isHandled = false;
    if (this.props.onBackPress) {
      this.props.onBackPress();
      isHandled = true;
    }
    if (!isHandled) {
      // this.props.navigation.goBack();
      //https://github.com/react-navigation/react-navigation/issues/697
      const backAction = NavigationActions.back({
        key: null
      });
      this.props.navigation.dispatch(backAction);
      log('*******');
      log('isBackHandle::::' + isHandled);
      log('*******');
    }
    return true;
  };

  componentWillUnmount() {
    this._didFocusSubscription && this._didFocusSubscription.remove();
    this._willBlurSubscription && this._willBlurSubscription.remove();
    BackHandler.removeEventListener('hardwareBackPress', this.onBackPressed);
  }

  render() {
    return this.props.children || null;
  }
}

export const AndroidBackHandler = withNavigation(BackHandlerAndroid);
