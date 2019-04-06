/**
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { SafeAreaView } from 'react-navigation';
import { AndroidBackHandler } from '@molecules/back-hoc';
import HeaderNavigation from '@molecules/header-navigation';
import Input from '@atoms/input';
import Button from '@atoms/button';
import styles from './styles';

class ProfileCountPage extends Component {
  render() {
    return (
      <AndroidBackHandler>
        <SafeAreaView
          style={[styles.safeContainer]}
          forceInset={{ bottom: 'always', top: 'never' }}
        >
          <View style={[styles.container]}>
            <HeaderNavigation
              displayBack={false}
              isLogoVisible={false}
              headerTitle={'Profile Filtering'}
              titleStyle={{ color: 'black' }}
            />
            <View style={[styles.contentContainer]}>
              <Input
                placeholder={'Profile Count'}
                notes={
                  'Please specify the number of profile you want to display'
                }
              />
              <View
                style={{
                  width: 100,
                  position: 'absolute',
                  bottom: 16,
                  right: 16
                }}
              >
                <Button
                  text={'Next'}
                  buttonStyle={{
                    width: 100,
                    marginTop: 10
                  }}
                  onPress={() => {
                    this.props.navigation.navigate('ProfileFeedsPage');
                  }}
                />
              </View>
            </View>
          </View>
        </SafeAreaView>
      </AndroidBackHandler>
    );
  }
}

const mapStateToProps = globalState => {
  return {};
};
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileCountPage);
