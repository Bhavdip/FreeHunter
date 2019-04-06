import React, { PureComponent } from 'react';
import { View, Image } from 'react-native';
import IconBookMark from '@svg/BookMark';
import Button from '@atoms/button';
import Texts from '@atoms/texts';
import styles from './styles';
import colors from '../../res/colors';
import { sinceDate } from '@utils';

class ProfileSegment extends PureComponent {
  constructor(props) {
    super(props);
    const profileItem = props.profileItem;
    this.state = {
      ...profileItem
    };
  }

  getTitle = () => {
    const { title } = this.state.name;
    return title ? title : '';
  };
  getName = () => {
    const { first, last } = this.state.name;
    return `${first + last}`;
  };

  getPhoneNumber = () => {
    return this.state.phone ? this.state.phone : '';
  };

  getCellNumber = () => {
    return this.state.cell ? this.state.cell : '';
  };

  isNewUser = () => {
    const { date } = this.state.registered;
    return sinceDate(date);
  };

  getMediumPic = () => {
    const { large, medium, thumbnail } = this.state.picture;
    if (medium) {
      return medium;
    }
    if (thumbnail) {
      return thumbnail;
    }
    if (large) {
      return large;
    }
    return '';
  };

  getAddress = () => {
    const { street, city, state } = this.state.location;
    return `${street + city + state}`;
  };

  render() {
    return (
      <View style={[styles.container]}>
        <View
          style={{
            margin: 3,
            borderRadius: 4,
            borderWidth: 1,
            borderColor: '#E7EAEB'
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <View
              style={{
                margin: 8,
                // backgroundColor: 'red',
                alignItems: 'center'
              }}
            >
              <Image
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 80 / 2,
                  backgroundColor: colors.primaryColorC
                }}
                source={{ uri: this.getMediumPic() }}
              />
              <Texts
                value={this.getTitle()}
                textStyle={{
                  color: 'gray',
                  fontSize: 10,
                  marginTop: 4,
                  marginBottom: 4
                }}
              />
              {this.isNewUser() ? (
                <Button
                  text={'NEW'}
                  buttonStyle={[styles.nwBtnStyle]}
                  textStyle={[styles.nwBtnTextStyle]}
                  onPress={() => {}}
                />
              ) : null}
            </View>

            <View style={{ flex: 1, margin: 8 }}>
              <Texts
                value={this.getName()}
                textStyle={{ fontWeight: '700', fontSize: 14 }}
              />
              <Texts
                value={this.state.email ? this.state.email : 'abc@gmail.com'}
                textStyle={{
                  fontWeight: '700',
                  fontSize: 12,
                  marginTop: 10,
                  marginBottom: 10
                }}
              />
              <Texts
                value={this.getPhoneNumber()}
                textStyle={{
                  fontWeight: '700',
                  fontSize: 12,
                  marginTop: 5,
                  marginBottom: 5
                }}
              />
              <Texts
                value={this.getPhoneNumber()}
                textStyle={{
                  fontWeight: '700',
                  fontSize: 12,
                  marginBottom: 5
                }}
              />
              <Texts
                value={this.getAddress()}
                textStyle={{
                  fontWeight: '700',
                  fontSize: 12,
                  marginTop: 10,
                  marginBottom: 10
                }}
              />
            </View>
          </View>
          <View style={{ position: 'absolute', right: 8, top: 8 }}>
            <IconBookMark />
          </View>
        </View>
      </View>
    );
  }
}

export default ProfileSegment;
