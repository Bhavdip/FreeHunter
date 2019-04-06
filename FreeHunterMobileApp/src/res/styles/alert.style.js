import { Alert } from 'react-native';

export const alertOnly = message => {
  setTimeout(() => {
    Alert.alert('', message);
  }, 650); //Fixed Me
};

export const alertOkay = (title, message, onPress) => {
  setTimeout(() => {
    Alert.alert(title, message, [{ text: 'OK', onPress }]);
  }, 650);
};

export const alertOkayCancel = (title, message, onOkPress, onCancelPress) => {
  setTimeout(() => {
    Alert.alert(title, message, [
      { text: 'OK', onPress: onOkPress },
      {
        text: 'Cancel',
        onPress: onCancelPress,
        style: 'cancel'
      }
    ]);
  }, 650);
};
