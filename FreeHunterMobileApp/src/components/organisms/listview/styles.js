// @flow
import { StyleSheet } from 'react-native';
import Colors from '@colors';
import colors from '../../../res/colors';

export default StyleSheet.create({
  flatList: {},
  dividerStyle: { height: 1, backgroundColor: colors.gray19 },
  emptyView: {
    //https://medium.com/@nikil.arigela/listemptycomponent-to-center-bc14aa5a98ac
    //https://github.com/facebook/react-native/issues/17944
    marginTop: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyText: {},
  loaderBoxStyle: {
    flex: 1,
    justifyContent: 'center'
  }
});
