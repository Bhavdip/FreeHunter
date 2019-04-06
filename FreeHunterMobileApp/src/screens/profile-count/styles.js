import { StyleSheet } from 'react-native';
import commonStyle from '../../../src/res/styles/common.style';

export default StyleSheet.create({
  safeContainer: {
    ...commonStyle.containerFlexBG
  },
  container: {
    ...commonStyle.containerFlexBG
  },
  contentContainer: {
    ...commonStyle.containerFlexBG,
    ...commonStyle.horizontalPadding
  },
  nextBtnContainer: {
    width: 100,
    position: 'absolute',
    bottom: 16,
    right: 16
  },
  nextBtnStyle: {
    width: 100,
    marginTop: 10
  }
});
