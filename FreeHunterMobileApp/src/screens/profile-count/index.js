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
  constructor(props) {
    super(props);
    this.state = {
      pageCount: 1 + ''
    };
  }
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
                maxLength={1}
                value={this.state.pageCount}
                placeholder={'Profile Count'}
                onChangeText={text => {
                  this.setState({ pageCount: text });
                }}
                notes={
                  'Please specify the number of profile you want to display'
                }
              />
              <View style={[styles.nextBtnContainer]}>
                {this.state.pageCount.length > 0 ? (
                  <Button
                    text={'Next'}
                    buttonStyle={[styles.nextBtnStyle]}
                    onPress={() => {
                      this.props.navigation.navigate('ProfileFeedsPage', {
                        pageCount: this.state.pageCount
                      });
                    }}
                  />
                ) : null}
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
