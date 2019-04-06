import React from 'React';
import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles';

export default (Button = ({
  text,
  onPress,
  containerStyle,
  buttonStyle,
  textStyle
}) => {
  return (
    <TouchableOpacity
      underlayColor="#ffffff00"
      style={containerStyle}
      onPress={onPress}
    >
      <View style={[styles.buttonStyle, buttonStyle]}>
        <Text style={[styles.textStyle, textStyle]}>{text ? text : ''}</Text>
      </View>
    </TouchableOpacity>
  );
});
