import { StyleSheet, Platform } from 'react-native';
import theme from '../styles/theme.style';
import colors from '../colors';

export default StyleSheet.create({
  defaultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.WINDOW_BACKGROUND
  },
  containerFlexBG: {
    flex: 1,
    backgroundColor: theme.WINDOW_BACKGROUND
  },
  containerBG: {
    backgroundColor: theme.WINDOW_BACKGROUND
  },
  horizontalPadding: {
    paddingLeft: theme.CONTAINER_PADDING,
    paddingRight: theme.CONTAINER_PADDING
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRadius: theme.TEXT_INPUT_BORDER_RADIUS,
    backgroundColor: '#00000000',
    borderColor: colors.gray39
  },
  textInputStyle: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: Platform.OS === 'ios' ? 12 : 8,
    paddingBottom: Platform.OS === 'ios' ? 12 : 8,
    color: colors.gray99
  },
  defaultButtonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: theme.BUTTON_MIN_HEIGHT,
    borderRadius: theme.BUTTON_BORDER_RADIUS,
    paddingLeft: theme.BUTTON_PADDING,
    paddingRight: theme.BUTTON_PADDING,
    backgroundColor: theme.DEFAULT_BNT_BG
  },
  defaultButtonTextStyle: {
    color: theme.TEXT_WHITE_COLOR,
    fontSize: theme.FONT_SIZE_MEDIUM,
    fontWeight: '400'
  }
});
