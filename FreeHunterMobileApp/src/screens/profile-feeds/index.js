import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import ListView from '@organisms/listview';
import HeaderNavigation from '@molecules/header-navigation';
import { SafeAreaView } from 'react-navigation';
import { AndroidBackHandler } from '@molecules/back-hoc';
import styles from './styles';

class ProfileFeedsList extends Component {
  constructor(props) {
    super(props);
    const pageCount = props.navigation.getParam('', 2);
    this.state = {
      pageCount: pageCount
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
              displayBack={true}
              isLogoVisible={false}
              headerTitle={'Profile Filtering'}
              onLeftPress={() => {
                this.props.navigation.goBack();
              }}
            />
            <ListView />
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
)(ProfileFeedsList);
