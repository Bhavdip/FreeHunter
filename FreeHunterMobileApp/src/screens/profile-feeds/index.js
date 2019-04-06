import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import ListView from '@organisms/listview';
import HeaderNavigation from '@molecules/header-navigation';
import { SafeAreaView } from 'react-navigation';
import ProfileSegment from './profile-segment';
import { AndroidBackHandler } from '@molecules/back-hoc';
import { fetchRandomUserList } from '@actions/user';
import { log, logGreen } from '@utils';
import styles from './styles';

class ProfileFeedsList extends Component {
  constructor(props) {
    super(props);
    const pageCount = props.navigation.getParam('pageCount', 10);
    this.state = {
      pageCount: pageCount,
      randomUsersList: '',
      showProgressBar: false,
      isLoadMore: false
    };
  }

  /**
   * Other Methods
   */

  showHeaderTitle = () => {
    const { randomUsersList } = this.state;
    const result =
      randomUsersList && randomUsersList.length > 0
        ? `Profile Count: ` + randomUsersList.length
        : `Profile Count: 0`;
    return result;
  };

  renderUserItem = ({ item, index }) => {
    return <ProfileSegment profileItem={item} />;
  };

  renderFooter = () => {
    if (!this.state.isLoadMore) return null;
    return <ActivityIndicator />;
  };

  handleLoadMore = () => {
    log(
      'handleLoadMore::' +
        this.state.isLoadMore +
        ':::' +
        this.state.pageLoading
    );
    if (!this.state.isLoadMore && !this.state.pageLoading) {
      this.setState({ isLoadMore: true });
      setTimeout(() => {
        this.props.fetchRandomUserList(this.state.pageCount);
      }, 2000);
    }
  };
  /**
   * handle
   */

  onErrorHandle = (props, newProps) => {
    const { users } = props;
    if (!users.randomUsersListFail && newProps.users.randomUsersListFail) {
      this.setState({ isLoadMore: false });
      const { randomUsersListFail } = newProps.users;
      logging(randomUsersListFail);
    }
  };

  onResultRandomUsersList = (props, newProps) => {
    const { users } = props;
    if (!users.isFetching && newProps.users.isFetching) {
      if (this.state.randomUsersList.length === 0) {
        this.setState({ pageLoading: true });
      } else {
        this.setState({ isLoadMore: true });
      }
    }
    if (users.isFetching && !newProps.users.isFetching) {
      this.setState({ isLoadMore: false });
    }
    if (!users.randomUsersList && newProps.users.randomUsersList) {
      this.setState({ isLoadMore: false });
      const { randomUsersList } = newProps.users;
      if (randomUsersList && randomUsersList.length > 0) {
        this.setState({
          pageLoading: false,
          randomUsersList: [...this.state.randomUsersList, ...randomUsersList]
        });
      } else {
        this.setState({
          pageLoading: false,
          randomUsersList: []
        });
      }
      logGreen(JSON.stringify(randomUsersList));
    }
  };

  /**
   * Life-cycle
   */
  componentWillMount() {
    this.props.fetchRandomUserList(this.state.pageCount);
  }

  componentWillReceiveProps(newProps) {
    this.onErrorHandle(this.props, newProps);
    this.onResultRandomUsersList(this.props, newProps);
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
              headerTitle={this.showHeaderTitle()}
              onLeftPress={() => {
                this.props.navigation.goBack();
              }}
            />
            <View style={[styles.contentContainer]}>
              <ListView
                fullLoaderView={true}
                isLoading={this.state.pageLoading}
                data={this.state.randomUsersList}
                renderItem={this.renderUserItem}
                ListFooterComponent={this.renderFooter}
                onEndReachedThreshold={0.5}
                onEndReached={this.handleLoadMore}
              />
            </View>
          </View>
        </SafeAreaView>
      </AndroidBackHandler>
    );
  }
}

const mapStateToProps = globalState => {
  const { users } = globalState;
  return { users };
};
const mapDispatchToProps = {
  fetchRandomUserList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileFeedsList);
