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
  nwBtnStyle: {
    width: 55,
    height: 25,
    minHeight: 0
  },
  nwBtnTextStyle: {
    fontSize: 12,
    fontWeight: '700'
  }
});
