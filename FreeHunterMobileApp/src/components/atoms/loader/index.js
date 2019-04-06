import React from 'React';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './styles';

const LoaderView = props => {
  const showProgressText = () => {
    if (props.message) {
      return <Text style={styles.titleTextStyle}>{props.message}</Text>;
    } else {
      return <Text style={styles.titleTextStyle}>{'Please wait...'}</Text>;
    }
  };
  const fullStyle = props.fullView ? { flex: 1 } : {};
  const size = props.size ? props.size : 'large';
  return (
    <View style={[styles.container, fullStyle, props.containerStyle]}>
      <ActivityIndicator style={styles.loader} size={size} />
      {showProgressText()}
    </View>
  );
};
export default LoaderView;
