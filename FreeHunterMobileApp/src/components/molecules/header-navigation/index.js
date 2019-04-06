import React from 'React';
import styles from './styles';
import ImageButton from '@atoms/image-button';
import LeftArrow from '@svg/LeftArrow';
import { View, Image } from 'react-native';
import Texts from '@atoms/texts';

export default (HeaderNavigation = props => {
  const showLeftContainer = props.leftSideView ? props.leftSideView : false;
  const showRightContainer = props.rightSideView ? props.rightSideView : false;
  const isBackVisible = props.displayBack;
  const isLogoVisible = props.isLogoVisible;
  const isTitleVisible = props.headerTitle ? props.headerTitle : false;
  const menuDrawer = props.menuDrawerImage ? props.menuDrawerImage : false;

  return (
    <View>
      <View style={[styles.statusBarContainer, props.actionBarStyle]} />
      <View style={[styles.actionBarContainer, props.actionBarStyle]}>
        {isBackVisible ? (
          <View style={[styles.headerLeft, props.styleLeftSide]}>
            <ImageButton
              svgImage={<LeftArrow />}
              buttonStyle={styles.button}
              onPress={props.onLeftPress}
              title="Back"
            />
          </View>
        ) : (
          <View />
        )}
        {menuDrawer ? (
          <View style={[styles.headerLeft, props.styleLeftSide]}>
            <ImageButton
              source={ic_menu}
              buttonStyle={styles.drawer}
              imageStyle={styles.drawerImage}
              onPress={props.toggleDrawer}
            />
          </View>
        ) : (
          <View />
        )}
        {showLeftContainer ? (
          <View style={[styles.headerLeft, props.styleLeftSide]}>
            {props.leftSideView}
          </View>
        ) : (
          <View />
        )}
        {isLogoVisible ? (
          <View style={styles.logoBox}>
            <Image style={styles.logStyle} source={''} />
          </View>
        ) : (
          <View />
        )}
        {isTitleVisible ? (
          <Texts
            value={props.headerTitle}
            textStyle={[styles.titleStyle, props.titleStyle]}
          />
        ) : (
          <View />
        )}
        {showRightContainer ? (
          <View style={[styles.headerRight, props.styleRightSide]}>
            {props.rightSideView}
          </View>
        ) : (
          <View />
        )}
      </View>
      {props.subTitle ? (
        <View style={[styles.toolBarContainer, props.toolBarContainer]}>
          <Texts value={props.subTitle} textStyle={styles.toolBarTextStyle} />
        </View>
      ) : null}
      {!props.showActionBarLine ? <View style={[styles.headerLine]} /> : null}
    </View>
  );
});
