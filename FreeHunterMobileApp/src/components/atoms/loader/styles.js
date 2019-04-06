import { StyleSheet } from 'react-native';
import commonStyle from '../../../res/styles/common.style';

export default StyleSheet.create({
  container: {
    ...commonStyle.loaderContainer
  },
  titleTextStyle: {
    ...commonStyle.textDarkH1,
    marginTop: 12
  },
  loader: {
    justifyContent: 'center',
    alignItems: 'center'
  }
});
