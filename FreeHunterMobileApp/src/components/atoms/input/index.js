import React from 'react';
import { Text, View, TextInput } from 'react-native';
import styles from './styles';
import colors from '../../../res/colors';

const Input = props => {
  return (
    <View>
      <View style={[styles.inputContainer]}>
        <TextInput
          autoCapitalize="none"
          underlineColorAndroid="transparent"
          style={[styles.textInputStyle]}
          {...props}
        />
      </View>
      <View style={{ marginTop: 4 }}>
        <Text style={[styles.noteTextStyle]}>
          {props.notes ? props.notes : ''}
        </Text>
      </View>
    </View>
  );
};

export default Input;
