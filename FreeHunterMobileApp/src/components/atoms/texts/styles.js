import { StyleSheet } from 'react-native';
import commonStyle from '../../../res/styles/common.style';

export default StyleSheet.create({
  defaultContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  centerContainer: {
    alignItems: 'center'
  },
  leftContainer: {
    alignItems: 'flex-start'
  },
  rightContainer: {
    alignItems: 'flex-end'
  },
  textDarkH2: {
    ...commonStyle.textDarkH2
  }
});
