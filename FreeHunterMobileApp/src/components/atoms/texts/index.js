import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const Texts = props => {
  const leftContainer =
    props.left == true ? styles.leftContainer : styles.leftContainer;
  const centerContainer = props.center == true && styles.centerContainer;
  const rightContainer = props.right == true && styles.rightContainer;
  const textAlignCenter = props.textAlign == 'center' && {
    textAlign: 'center'
  };
  const textAlignJustify = props.textAlign == 'justify' && {
    textAlign: 'justify'
  };
  const textAlignLeft = props.textAlign == 'left' && { textAlign: 'left' };
  const textAlignRight = props.textAlign == 'right' && { textAlign: 'right' };

  return (
    <View
      style={[
        styles.defaultContainer,
        leftContainer,
        centerContainer,
        rightContainer,
        props.containerStyle
      ]}
    >
      <Text
        style={[
          styles.textDarkH2,
          textAlignCenter,
          textAlignJustify,
          textAlignLeft,
          textAlignRight,
          props.textStyle
        ]}
        {...props}
      >
        {props.value}
      </Text>
    </View>
  );
};

export default Texts;
