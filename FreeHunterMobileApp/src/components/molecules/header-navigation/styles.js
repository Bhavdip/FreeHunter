import { StyleSheet } from 'react-native';
import commonStyle from '../../../res/styles/common.style';

export default StyleSheet.create({
  statusBarContainer: {
    ...commonStyle.statusBarContainer
  },
  actionBarContainer: {
    ...commonStyle.defaultContainer,
    ...commonStyle.actionBarContainer,
    flexDirection: 'row',
    flex: 0
  },
  toolBarContainer: {
    ...commonStyle.toolBarContainer
  },
  toolBarTextStyle: {
    ...commonStyle.toolBarTextStyle,
    ...commonStyle.textUPPERCASE
  },
  titleStyle: {
    ...commonStyle.actionBarTitleStyle
  },
  logoBox: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  logStyle: {
    flex: 1,
    width: 200,
    resizeMode: 'contain'
  },
  headerLeft: { position: 'absolute', left: 0 },
  headerRight: { position: 'absolute', right: 0 },
  button: { width: 40, height: 40 },
  buttonImage: { width: 35, height: 35 },
  drawer: { width: 40, height: 40 },
  drawerImage: { width: 26, height: 18 },
  headerLine: {
    height: 0.3,
    backgroundColor: 'lightgrey'
  }
});
