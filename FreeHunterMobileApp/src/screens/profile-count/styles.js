import { StyleSheet } from 'react-native';
import commonStyle from '../../../src/res/styles/common.style';

export default StyleSheet.create({
  safeContainer: {
    ...commonStyle.containerFlexBG
  },
  container: {
    ...commonStyle.horizontalPadding,
    marginTop: 100
  }
});
