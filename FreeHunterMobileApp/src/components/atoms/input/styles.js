import { StyleSheet } from 'react-native';
import commonStyle from '../../../res/styles/common.style';

export default StyleSheet.create({
  inputContainer: {
    ...commonStyle.textInputContainer
  },
  textInputStyle: {
    ...commonStyle.textInputStyle
  },
  noteTextStyle: {
    fontSize: 11,
    color: colors.gray79
  }
});
