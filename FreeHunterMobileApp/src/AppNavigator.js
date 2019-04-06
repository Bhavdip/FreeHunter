import React from 'react';
import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import ProfileCount from '@screens/profile-count';
import ProfileFeeds from '@screens/profile-feeds';

const AppScreensStack = createStackNavigator(
  {
    ProfileCountPage: {
      screen: ProfileCount
    },
    ProfileFeedsPage: {
      screen: ProfileFeeds
    }
  },
  {
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);

export default createSwitchNavigator(
  {
    AppStack: AppScreensStack
  },
  {
    initialRouteName: 'AppStack'
  }
);
