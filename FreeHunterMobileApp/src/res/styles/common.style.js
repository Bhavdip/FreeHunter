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
  statusBarContainer: {
    height: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: theme.ACTION_BAR_BG_COLOR
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
  verticalPadding: {
    paddingTop: theme.CONTAINER_PADDING,
    paddingBottom: theme.CONTAINER_PADDING
  },
  actionBarContainer: {
    height: Platform.OS === 'ios' ? 48 : 48,
    backgroundColor: theme.ACTION_BAR_BG_COLOR
  },
  toolbarContainer: {
    height: Platform.OS === 'ios' ? 56 : 56,
    backgroundColor: theme.ACTION_BAR_BG_COLOR
  },
  actionBarTitleStyle: {
    // fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TEXT_PRIMARY_COLOR
  },
  toolBarContainer: {
    height: 45,
    backgroundColor: colors.primaryColorC,
    justifyContent: 'center',
    paddingLeft: theme.CONTAINER_PADDING,
    paddingRight: theme.CONTAINER_PADDING
  },
  toolBarTextStyle: {
    fontFamily: theme.FONT_FAMILY,
    color: theme.TEXT_DARK_COLOR,
    fontSize: theme.FONT_SIZE_X_LARGE
  },

  /**
   * TEXT STYLE
   */
  textDarkH0: {
    // fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_TINY,
    color: theme.TEXT_DARK_COLOR
  },
  textDarkH1: {
    // fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_SMALL,
    color: theme.TEXT_DARK_COLOR
  },
  textDarkH2: {
    // fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.TEXT_DARK_COLOR
  },
  textDarkH3: {
    // fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_LARGE,
    color: theme.TEXT_DARK_COLOR
  },
  textDarkH4: {
    // fontFamily: theme.FONT_FAMILY,
    fontSize: theme.FONT_SIZE_X_LARGE,
    color: theme.TEXT_DARK_COLOR
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
  },
  loaderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  }
});
