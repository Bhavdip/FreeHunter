import React from 'React';
import { TouchableOpacity, Image } from 'react-native';
import styles from './styles';

export default (ImageButton = ({
  onPress,
  svgImage,
  source,
  disabled,
  buttonStyle,
  imageStyle
}) => {
  const touchableProps = {};
  if (!disabled) {
    touchableProps.onPress = onPress;
  }
  return (
    <TouchableOpacity
      {...touchableProps}
      style={[styles.buttonStyle, buttonStyle]}
    >
      {source ? (
        <Image style={[styles.imageStyle, imageStyle]} source={source} />
      ) : (
        svgImage
      )}
    </TouchableOpacity>
  );
});
