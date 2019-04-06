/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { AndroidBackHandler } from '@molecules/back-hoc';
import Input from '@atoms/input';
import Button from '@atoms/button';
import styles from './styles';

export default class App extends Component {
  render() {
    return (
      <AndroidBackHandler>
        <SafeAreaView
          style={[styles.safeContainer]}
          forceInset={{ bottom: 'always', top: 'never' }}
        >
          <View style={styles.container}>
            <Input
              placeholder={'Profile Count'}
              notes={'Please specify the number of profile you want to display'}
            />
            <Button
              text={'Next'}
              buttonStyle={{ width: 100 }}
              onPress={() => {}}
            />
          </View>
        </SafeAreaView>
      </AndroidBackHandler>
    );
  }
}
